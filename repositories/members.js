const { Members } = require("../models");

class MembersRepository {
  constructor() {
    this.Members = Members;
  }
  createMember = async (id, password, confirm, name, email, phoneNum, address, detailaddress, birthday) => {
    const createMembersData = await this.Members.create({ id, password, confirm, name, email, phoneNum, address, detailaddress, birthday });
    return createMembersData;
  };

  findMember = async (id) => {
    const member = await this.Members.findOne({ where: { id } });
    return member;
  };

  findMemberbyEmail = async (email) => {
    const member = await this.Members.findOne({ where: { email } });
    return member;
  };

  GetMember = async (userId, id) => {
    const GetMember = await this.Members.findOne({ where: { userId, id } });
    return GetMember;
  };

  lookUpdateMember = async (userId) => {
    const lookUpdate = await Members.findOne({where: {userId}});
    return lookUpdate;
  };

  updateMember = async (userId, name, password, email, phoneNum, birthday) => {
    await this.Members.update(
      { name, password, email, phoneNum, birthday }, { where: { userId } }
    );
    return;
    
  };

  // changePassword = async (userId, password) => {
  //   const changePassword = await this.Members.update(
  //     { password },
  //     { where: { userId } }
  //   );
  //   return changePassword
  // };

  deleteMember = async (userId) => {
    await this.Members.destroy({ where: { userId } });
    return;
  };
}

module.exports = MembersRepository;
