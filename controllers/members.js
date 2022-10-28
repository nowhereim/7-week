const MembersService = require("../services/members");
const Joi = require("joi");

const schema = Joi.object({
  id: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{4,20}$")),
  name: Joi.string().min(2).max(7),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{4,30}$")),
  confirm: Joi.ref("password"),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  address: Joi.string(),
  detailaddress: Joi.string(),
  phoneNum: Joi.string(),
  birthday: Joi.number().integer().min(19000101).max(20221028),
});

class MembersController {
  membersService = new MembersService();

  SignupMember = async (req, res, next) => {
    try {
      const { id, password, confirm, name, email, phoneNum, address, detailaddress, birthday } = req.body;
      await schema.validateAsync(req.body);
      await this.membersService.createMember(id, password, confirm, name, email, phoneNum, address, detailaddress, birthday);
      res.status(201).json( { message: "회원가입이 완료되었습니다." } );
    } catch (err) {
      res.status(401).json({ errormessage: err });
    }
  };

  LoginMember = async (req, res, next) => {
    try {
      const { id, password } = req.body;
      const LoginMemberData = await this.membersService.findMember(
        id,
        password
      );
      res
        .status(201)
        .json({ data: LoginMemberData, message: "로그인 되었습니다." });
    } catch (err) {
      res.status(401).json({ errormessage: err });
    }
  };

  GetMember = async (req, res, next) => {
  try{
    const { userId } = res.locals.user;
    const { id } = req.params;
    const MemberData = await this.membersService.GetMember( userId, id );
    res.status(201).json( { data: MemberData , message:"정상적으로 조회되었습니다."} );
  } catch (err) {
    res.status(401).json({ errormessage: err });
  }
    
  };

  updateMember = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { name, password, confirm, email, phoneNum, birthday } = req.body;
      await schema.validateAsync(req.body);
      const lookUpdate = await this.membersService.updateMember(userId, name, password, email, phoneNum, birthday);
      res.status(201).json( { data: lookUpdate, message: "수정을 완료하였습니다." } );
    } catch (err) {
      res.status(401).json({ errormessage: err });
    }
  };

  deleteMember = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      await this.membersService.deleteMember(userId);
      res.status(201).json( { message: "삭제를 완료하였습니다." } );
    } catch (err) {
      res.status(401).json({ errormessage: err });
    }
  };
}
module.exports = MembersController;
