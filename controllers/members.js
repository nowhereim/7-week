const MembersService = require("../service/members");
const Joi = require("joi");

const schema = Joi.object({
  id: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{4,20}$")),
  name: Joi.string().min(2).max(7),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{4,30}$")),
  confirm: Joi.ref("password"),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  phoneNum: Joi.number().integer().min(11),
  birthday: Joi.number().integer().min(1900).max(2015),
});

class MembersController {
  membersService = new MembersService();

  SignupMember = async (req, res, next) => {
    try {
      const { id, password, confirm, name, email, phoneNum, birthday } =
        req.body;
      await schema.validateAsync(req.body);
      await this.membersService.createMember(
        id,
        password,
        confirm,
        name,
        email,
        phoneNum,
        birthday
      );
      res.status(201).json({ message: "회원가입이 완료되었습니다." });
    } catch (e) {
      res.status(409).json({ message: e.message });
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
    } catch (e) {
      res.status(401).json({ message: e.message });
    }
  };

  GetMember = async (req, res, next) => {
    const { userId } = res.locals.user;
    const { id } = req.params;
    const MemberData = await this.membersService.GetMember(userId, id);
    res
      .status(200)
      .json({ data: MemberData, message: "정상적으로 조회되었습니다." });
  };

  updateMember = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { nickname, password, confirm } = req.body;
      await schema.validateAsync(req.body);
      const UpdateMember = await this.membersService.updateMember(
        userId,
        nickname,
        password,
        confirm
      );
      res
        .status(200)
        .json({ data: UpdateMember, message: "수정을 완료하였습니다." });
    } catch (e) {
      res.status(403).json({ message: e.message });
    }
  };

  deleteMember = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      await this.membersService.deleteMember(userId);
      res.status(200).json({ message: "삭제를 완료하였습니다." });
    } catch (e) {
      res.status(403).json({ message: e.message });
    }
  };
}
module.exports = MembersController;
