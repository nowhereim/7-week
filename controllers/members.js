const MembersService = require("../services/members");
const Joi = require("joi");
const e = require("cors");

const schema = Joi.object({
    id: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{4,20}$")),
    name: Joi.string().min(2).max(7),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{4,30}$")),
    confirm: Joi.ref("password"),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    address: Joi.string().min(2).max(30),
    detailaddress: Joi.string().min(2).max(20),
    phoneNum: Joi.string().pattern(new RegExp("^[0-9]{11}$")),
    birthday: Joi.number().integer().min(19000101).max(20221028),
  });

class MembersController {
  membersService = new MembersService();

  SignupMember = async (req, res, next) => {
    try {
      const { id, password, confirm, name, email, phoneNum, address, detailaddress, birthday } = req.body;
      if (!id) {
        res.status(412).json( { message: "아이디를 입력해주세요." } );
      }
      // const existsId = await this.membersService.existsId(id);
      // if (!existsId) {
      //   res.status(200).json( { message: "사용가능한 아이디입니다." } );
      // }
      if (!password) {
        res.status(412).json( { message: "비밀번호를 입력해주세요." } );
      }
      if (!confirm) {
        res.status(412).json( { message: "비밀번호 확인을 입력해주세요." } );
      }
      if (confirm !== password) {
        res.status(412).json( { message: "비밀번호와 일치하지 않습니다." } );
      }
      if (!name) {
         res.status(412).json( { message: "이름을 입력해주세요." } );
      }
      if (!email) {
         res.status(412).json( { message: "이메일을 입력해주세요." } );
      }
      if (!phoneNum) {
         res.status(412).json( { message: "핸드폰번호를 입력해주세요." } );
      }
      if (!address) {
         res.status(412).json( { message: "주소를 입력해주세요." } );
      }
      if (!detailaddress) {
         res.status(412).json( { message: "상세주소를 입력해주세요." } );
      }
      if (!birthday) {
         res.status(412).json( { message: "생년월일을 입력해주세요." } );
      }
      if (id && password && confirm && name && email && phoneNum && address && detailaddress && birthday) {
        await schema.validateAsync(req.body);
        await this.membersService.createMember(id, password, confirm, name, email, phoneNum, address, detailaddress, birthday);
        return res.status(201).json( { message: "회원가입이 완료되었습니다." } );
      }     
    } catch (err) {
      if (err.code === -1) {
        res.status(401).json({ errormessage: "중복된 아이디입니다." });
      } else if (err.code === -3) {
        res.status(401).json({ errormessage: "이미 가입한 이메일입니다." });
      }else {
        res.status(401).json({ errormessage: "빈칸을 모두 알맞게 작성해주세요." });
      }
      
    }
  };

  LoginMember = async (req, res, next) => {
    try {
      const { id, password } = req.body;
      const user = await this.membersService.LoginMember(id, password);
      return res.status(201).json({ 
        name: user[0].name,
        userId: user[0].userId,
        accessToken: user[1],
        refreshToken: user[0].refreshToken,
        message: "로그인 되었습니다." });
    } catch (err) {
      res.status(401).json({ errormessage: err });
    }
  };

  GetMember = async (req, res, next) => {
    try{
      const { userId } = res.locals.user;
      const { id } = req.params;
      const MemberData = await this.membersService.GetMember( userId, id );
      return res.status(201).json( { data: MemberData , message:"정상적으로 조회되었습니다."} );
    } catch (err) {
      res.status(401).json({ errormessage: "err" });
    }
  };

  updateMember = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { name, password, confirm, email, phoneNum, birthday } = req.body;
      await schema.validateAsync(req.body);
      const lookUpdate = await this.membersService.updateMember(userId, name, password, email, phoneNum, birthday);
      return res.status(201).json( { data: lookUpdate, message: "수정을 완료하였습니다." } );
    } catch (err) {
      res.status(401).json({ errormessage: err });
    }
  };

  deleteMember = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      await this.membersService.deleteMember(userId);
      return res.status(201).json( { message: "삭제를 완료하였습니다." } );
    } catch (err) {
      res.status(401).json({ errormessage: err });
    }
  };
}
module.exports = MembersController;