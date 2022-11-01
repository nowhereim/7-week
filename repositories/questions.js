const { Question, Answer, Code } = require("../models");
const moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");
const time = moment().format("YYYY-MM-DD HH:mm:ss");

class Questionsrepository {
  // 질문 등록
  createQuestion = async (userId, productId, secret, title, content) => {
    try {
      const createquestion = await Question.create({
        userId,
        productId,
        secret,
        title,
        content,
        createdAt: time,
      });

      return createquestion;
    } catch (err) {
      throw err;
    }
  };

  // 질문 수정
  updateQuestion = async (title, content, questionId, secret, userId) => {
    try {
      const updatequestion = await Question.update(
        {
          title,
          content,
          questionId,
          secret,
          updatedAt: time,
        },
        {
          where: {
            questionId,
            userId,
          },
        }
      );
      return updatequestion;
    } catch (err) {
      throw "레포지토리 파트에서 에러 발생. 태환이에게 문의하세요.";
    }
  };

  // 질문 전체 조회
  getQuestion = async () => {
    try {
      const readallquestion = await Question.findAll();
      return readallquestion;
    } catch (err) {
      throw "레포지토리 파트에서 에러 발생. 태환이에게 문의하세요.";
    }
  };

  // 질문 단일 조회
  getQuestionOne = async (questionId) => {
    try {
      const readonequestion = await Question.findOne({
        where: {
          questionId,
        },
      });
      return readonequestion;
    } catch (err) {
      throw "레포지토리 파트에서 에러 발생. 태환이에게 문의하세요.";
    }
  };

  // 질문 삭제
  deleteQuestion = async (userId, questionId) => {
    try {
      const deletequestion = await Question.destroy({
        where: {
          userId,
          questionId,
        },
      });
      return deletequestion;
    } catch (err) {
      throw "레포지토리 파트에서 에러 발생. 태환이에게 문의하세요.";
    }
  };

  // 질문 답변 등록
  createAnswer = async (questionId, answer) => {
    try {
      const createanswer = await Answer.create({
        questionId,
        answer,
        createdAt: time,
        updatedAt: time,
      });
      return createanswer;
    } catch (err) {
      throw "레포지토리 파트에서 에러 발생. 태환이에게 문의하세요.";
    }
  };

  // 질문 답변 수정
  updateAnswer = async (questionId, answer, answerId) => {
    try {
      const updateanswer = await Answer.update(
        {
          answer: answer,
          updatedAt: time,
        },
        {
          where: {
            answerId,
            questionId,
          },
        }
      );
      return updateanswer;
    } catch (err) {
      throw "레포지토리 파트에서 에러 발생. 태환이에게 문의하세요.";
    }
  };

  // 질문 답변 삭제
  deleteAnswer = async (questionId, answerId) => {
    try {
      const deleteanswer = await Answer.destroy({
        where: {
          questionId,
          answerId,
        },
      });
      return deleteanswer;
    } catch (err) {
      throw "레포지토리 파트에서 에러 발생. 태환이에게 문의하세요.";
    }
  };

  // 질문 답변 조회
  getAnswer = async () => {
    try {
      const readanswer = await Answer.findAll();
      return readanswer;
    } catch (err) {
      throw "레포지토리 파트에서 에러 발생. 태환이에게 문의하세요.";
    }
  };

  // 질문 답변 단일 조회
  getAnswerOne = async (answerId) => {
    try {
      const readoneanswer = await Answer.findOne({
        where: {
          answerId,
        },
      });
      return readoneanswer;
    } catch (err) {
      throw "레포지토리 파트에서 에러 발생. 태환이에게 문의하세요.";
    }
  };

  maile = async (authNum, email) => {
    try {
      const createCode = await Code.create({
        code: authNum,
        email,
        createdAt: time,
        updatedAt: time,
      });
      return createCode;
    } catch (err) {
      throw "레포지토리 파트에서 에러 발생. 태환이에게 문의하세요.";
    }
  };
  mailcodedestroy = async (authNum) => {
    try {
      const deleteCode = await Code.destroy({
        where: {
          code: authNum,
        },
      });
      return deleteCode;
    } catch (err) {
      throw "레포지토리 파트에서 에러 발생. 태환이에게 문의하세요.";
    }
  };

  codefind = async (code) => {
    try {
      const findCode = await Code.findOne({
        where: {
          code: code,
        },
      });
      return findCode;
    } catch (err) {
      throw "레포지토리 파트에서 에러 발생. 태환이에게 문의하세요.";
    }
  };
}
module.exports = Questionsrepository;
