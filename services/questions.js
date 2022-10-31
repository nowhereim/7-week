const Questionsrepository = require("../repositories/questions");

class Qaservice {
  // 새 인스턴스 생성
  questionsrepository = new Questionsrepository();

  // Q&A 추가
  createQuestion = async (userId, productId, secret, title, content) => {
    try {
      const createqa = await this.questionsrepository.createQuestion(
        userId,
        productId,
        secret,
        title,
        content
      );
      return createqa;
    } catch (err) {
      throw err;
    }
  };

  // Q&A 수정
  updateQuestion = async (title, content, questionId, secret, userId) => {
    try {
      const updateqa = await this.questionsrepository.updateQuestion(
        title,
        content,
        questionId,
        secret,
        userId
      );
      if (updateqa[0] === 0) {
        throw undefined;
      }
      return updateqa;
    } catch (err) {
      if (err === undefined) {
        throw "입력값에 일치하는 질문이 없습니다.";
      }
      throw "서비스 파트에서 에러 발생. 태환이에게 문의하세요.";
    }
  };

  // Q&A 전체 조회
  getQuestion = async () => {
    try {
      const readallqa = await this.questionsrepository.getQuestion();
      return readallqa;
    } catch (err) {
      throw "서비스 파트에서 에러 발생. 태환이에게 문의하세요.";
    }
  };

  // Q&A 단일 조회
  getQuestionOne = async (questionId) => {
    try {
      const readoneqa = await this.questionsrepository.getQuestionOne(
        questionId
      );
      if (readoneqa === null) {
        throw null;
      }
      return readoneqa;
    } catch (err) {
      if (err === null) {
        throw "전달값에 일치하는 질문이 존재하지 않습니다.";
      }
      throw "서비스 파트에서 에러 발생. 태환이에게 문의하세요.";
    }
  };

  // Q&A 삭제
  deleteQuestion = async (userId, questionId) => {
    try {
      const deleteqa = await this.questionsrepository.deleteQuestion(
        userId,
        questionId
      );
      if (deleteqa === 0) {
        throw undefined;
      }
      return deleteqa;
    } catch (err) {
      if (err === undefined) {
        throw "전달값에 일치하는 질문이 없습니다.";
      }
      throw "서비스 파트에서 에러 발생. 태환이에게 문의하세요.";
    }
  };

  // Q&A 답변 추가
  createAnswer = async (questionId, answer) => {
    try {
      const createanswer = await this.questionsrepository.createAnswer(
        questionId,
        answer
      );
      return createanswer;
    } catch (err) {
      throw "서비스 파트에서 에러 발생. 태환이에게 문의하세요.";
    }
  };

  // Q&A 답변 수정
  updateAnswer = async (questionId, answer, answerId) => {
    try {
      const updateanswer = await this.questionsrepository.updateAnswer(
        questionId,
        answer,
        answerId
      );
      if (updateanswer[0] === 0) {
        throw undefined;
      }
      return updateanswer;
    } catch (err) {
      if (err === undefined) {
        throw "전달값에 일치하는 답변이 없습니다.";
      }
      throw "서비스 파트에서 에러 발생. 태환이에게 문의하세요.";
    }
  };

  // Q&A 답변 삭제
  deleteAnswer = async (questionId, answerId) => {
    try {
      const deleteanswer = await this.questionsrepository.deleteAnswer(
        questionId,
        answerId
      );
      if (deleteanswer === 0) {
        throw undefined;
      }
      return deleteanswer;
    } catch (err) {
      if (err === undefined) {
        throw "전달값에 일치하는 답변이 없습니다.";
      }
      throw "서비스 파트에서 에러 발생. 태환이에게 문의하세요.";
    }
  };

  // Q&A 답변 전체 조회
  getAnswer = async () => {
    try {
      const readallanswer = await this.questionsrepository.getAnswer();
      return readallanswer;
    } catch (err) {
      throw "서비스 파트에서 에러 발생. 태환이에게 문의하세요.";
    }
  };

  // Q&A 답변 단일 조회
  getAnswerOne = async (answerId) => {
    try {
      const readoneanswer = await this.questionsrepository.getAnswerOne(
        answerId
      );
      if (readoneanswer === null) {
        throw null;
      }
      return readoneanswer;
    } catch (err) {
      if (err === null) {
        throw "전달값에 일치하는 답변이 존재하지 않습니다.";
      }
      throw "서비스 파트에서 에러 발생. 태환이에게 문의하세요.";
    }
  };
}

module.exports = Qaservice;
