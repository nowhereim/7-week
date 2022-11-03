const MembersRepository = require("../repositories/members");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

class MembersService {
  constructor() {
    this.membersRepository = new MembersRepository();
  }
  createMember = async (
    id,
    password,
    confirm,
    name,
    email,
    phoneNum,
    address,
    detailaddress,
    birthday
  ) => {
    const existsEmail = await this.membersRepository.findMemberbyEmail(email);
    if (existsEmail) {
      throw { code: -3 };
    }

    const salt = await bcrypt.genSalt(10);
    const enpryptedPW = bcrypt.hashSync(password, salt);
    password = enpryptedPW;
    await this.membersRepository.createMember(
      id,
      password,
      confirm,
      name,
      email,
      phoneNum,
      address,
      detailaddress,
      birthday
    );
    return;
  };

  existsId = async (id) => {
    const existsId = await this.membersRepository.existsId(id);
    return existsId;
  };

  FindId = async (id) => {
    const FindId = await this.membersRepository.FindId(id);
      // if (FindId) {
      //   throw { code: -1 };
      // }
    return FindId;
  };

  LoginMember = async (id, password) => {
    const user = await this.membersRepository.LoginMember(id);
    if (!user) {
      throw { message: "아이디 또는 비밀번호가 일치하지 않습니다." };
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw { message: "아이디 또는 비밀번호가 일치하지 않습니다." };
    }
    const accessToken = jwt.sign(
      { userId: user.userId, name: user.name },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );
    const refreshToken = jwt.sign({}, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    await this.membersRepository.updateRefresh(refreshToken, user);
    return [user, accessToken];
  };

  updateMember = async (userId, name, password, email, phoneNum, birthday) => {
    console.log(userId, name, password, email, phoneNum, birthday)
    const existsEmail = await this.membersRepository.findMemberbyEmail(email);
    console.log(existsEmail)
    if (existsEmail) {
      throw { code: -3 };
    }
    const salt = await bcrypt.genSalt(10);
    const bryptedPW = bcrypt.hashSync(password, salt);
    password = bryptedPW;
    console.log(userId, name, password, email, phoneNum, birthday)
    await this.membersRepository.updateMember(
      userId,
      name,
      password,
      email,
      phoneNum,
      birthday
    );
    const lookUpdate = await this.membersRepository.lookUpdateMember(userId);
    return lookUpdate;
  };

  deleteMember = async (userId) => {
    await this.membersRepository.deleteMember(userId);
    return;
  };
}

module.exports = MembersService;
