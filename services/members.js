const MembersRepository = require("../repositories/members");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class MembersService {
  constructor() {
    this.membersRepository = new MembersRepository();
  }
  createMember = async (id, password, confirm, name, email, phoneNum, birthday) => {
    const existsId = await this.membersRepository.findMember(id);
    if (existsId) {
      throw { message: "아이디가 이미 존재합니다" };
    }
    const existsEmail = await this.membersRepository.findMemberbyEmail(email);
    if (existsEmail) {
      throw { message: "닉네임이 이미 존재합니다." };
    }
    const salt = await bcrypt.genSalt(10);
    const enpryptedPW = bcrypt.hashSync(password, salt);
    password = enpryptedPW;
    const createMembersData = await this.membersRepository.createMember(
      id,
      password,
      confirm,
      name,
      email,
      phoneNum,
      birthday
    );
    return createMembersData;
  };

  GetMember = async (userId, id) => {
    const GetMember = await this.membersRepository.GetMember(userId, id);
    return {
      userId: GetMember.userId,
      id: GetMember.id,
    };
  };

  findMember = async (id, password) => {
    const member = await this.membersRepository.findMember(id);
    if (!member) {
      throw { message: "아이디 또는 비밀번호가 일치하지 않습니다." };
    }
    const validPassword = await bcrypt.compare(password, member.password);
    if (!validPassword) {
      throw { message: "아이디 또는 비밀번호가 일치하지 않습니다." };
    }
    return {
      token: jwt.sign(
        { userId: member.userId, id: member.id, nickname: member.nickname },
        "week6-mini-project"
      ),
    };
  };

  updateMember = async (userId, nickname, password) => {
    if (nickname === undefined) {
      await this.membersRepository.changePassword(userId);
      return;
    }
    const existsNickname = await this.membersRepository.findMember(nickname);
    if (existsNickname) {
      throw { message: "닉네임이 이미 존재합니다" };
    }
    await this.membersRepository.updateMember(userId, nickname, password);
    return;
  };

  deleteMember = async (userId) => {
    await this.membersRepository.deleteMember(userId);
    return;
  };
}

module.exports = MembersService;
