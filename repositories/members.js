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

  updateMember = async (userId, nickname, password) => {
    const updateMember = await this.Members.update(
      { nickname, password },
      { where: { userId } }
    );
    return updateMember;
  };

  changePassword = async (userId, password) => {
    const changePassword = await this.Members.update(
      { password },
      { where: { userId } }
    );
    return changePassword
  };

  deleteMember = async (userId) => {
    await this.Members.destroy({ where: { userId } });
    return;
  };
}

module.exports = MembersRepository;
