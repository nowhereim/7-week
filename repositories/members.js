const { Members } = require("../models");

class MembersRepository {
  constructor() {
    this.Members = Members;
  }
  //회원가입
  createMember = async (id, password, confirm, name, email, phoneNum, address, detailaddress, birthday) => {
    await this.Members.create({ id, password, confirm, name, email, phoneNum, address, detailaddress, birthday });
    return;
  };
  existsId = async (id) => {
    const existsId = await this.Members.findOne({ where: { id } });
    // console.log(existsId.id)
    return existsId;
  };
  //user 정보가져오기
  LoginMember = async (id) => {
    const user = await this.Members.findOne({ where: { id } });
    return user;
  };
  //email중복검사
  findMemberbyEmail = async (email) => {
    const member = await this.Members.findOne({ where: { email } });
    return member;
  };
  //Refresh토큰 업데이트
  updateRefresh = async (refreshToken, user) => {
    console.log(user.id);
    await Members.update({ refreshToken }, { where: { userId: user.userId } });
    console.log(user.refreshToken) 
  };

  GetMember = async (userId, id) => {
    const GetMember = await this.Members.findOne({ where: { userId, id } });
    return GetMember;
  };

  lookUpdateMember = async (userId) => {
    const lookUpdate = await Members.findOne({where: {userId}});
    return lookUpdate;
  };
  //회원정보 수정
  updateMember = async (userId, name, password, email, phoneNum, birthday) => {
    await this.Members.update(
      { name, password, email, phoneNum, birthday }, { where: { userId } }
    );
    return;
    
  };
  //회원 탈퇴
  deleteMember = async (userId) => {
    await this.Members.destroy({ where: { userId } });
    return;
  };
}

module.exports = MembersRepository;
