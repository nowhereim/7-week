const Questionservices = require("../services/questions");

class Questioncontroller {
  // 인스턴스 생성
  questionservice = new Questionservices();

  // Q&A 추가
  createQuestion = async (req, res, next) => {
    try {
      const { userId, productId, secret, title, content } = req.body;
      if (
        userId === undefined ||
        productId === undefined ||
        secret === undefined ||
        title === undefined ||
        content === undefined
      ) {
        throw "리퀘스트 정보에 필요한 값이 없습니다.";
      }
      const createqa = await this.questionservice.createQuestion(
        userId,
        productId,
        secret,
        title,
        content
      );
      res.status(200).json({ data: createqa });
    } catch (err) {
      res.status(400).json({ errormessage: err });
    }
  };

  // Q&A 수정
  updateQuestion = async (req, res, next) => {
    try {
      const { title, content, questionId, secret, userId } = req.body;
      if (
        title === undefined ||
        content === undefined ||
        questionId === undefined ||
        secret === undefined
      ) {
        throw "리퀘스트 정보에 필요한 값이 없습니다.";
      }
      const updateqa = await this.questionservice.updateQuestion(
        title,
        content,
        questionId,
        secret,
        userId
      );
      res.status(200).json({ data: "성공" });
    } catch (err) {
      res.status(400).json({ errormessage: err });
    }
  };

  // Q&A 전체 조회
  getQuestion = async (req, res, next) => {
    try {
      const readallqa = await this.questionservice.getQuestion();
      res.status(200).json({ data: readallqa });
    } catch (err) {
      res.status(400).json({ errormessage: err });
    }
  };

  // Q&A 단일 조회
  getQuestionOne = async (req, res, next) => {
    try {
      const questionId = req.params.questionId;
      if (questionId === undefined) {
        throw "리퀘스트 정보에 필요한 값이 없습니다.";
      }
      const readoneqa = await this.questionservice.getQuestionOne(questionId);
      res.status(200).json({ data: readoneqa });
    } catch (err) {
      res.status(400).json({ errormessage: err });
    }
  };

  // Q&A 삭제
  deleteQuestion = async (req, res, next) => {
    try {
      const { userId, questionId } = req.body;
      if (questionId === undefined || userId === undefined) {
        throw "리퀘스트 정보에 필요한 값이 없습니다.";
      }
      const deleteqa = await this.questionservice.deleteQuestion(
        userId,
        questionId
      );
      res.status(200).json({ data: "성공" });
    } catch (err) {
      res.status(400).json({ errormessage: err });
    }
  };

  // Q&A 답변 추가
  createAnswer = async (req, res, next) => {
    try {
      const { questionId, answer } = req.body;
      if (
        questionId === 0 ||
        questionId === undefined ||
        answer === undefined ||
        answer === ""
      ) {
        throw "리퀘스트 정보에 필요한 값이 없습니다.";
      }
      const createanswer = await this.questionservice.createAnswer(
        questionId,
        answer
      );
      res.status(200).json({ data: createanswer });
    } catch (err) {
      res.status(400).json({ errormessage: err });
    }
  };

  // Q&A 답변 수정
  updateAnswer = async (req, res, next) => {
    try {
      const { questionId, answer, answerId } = req.body;
      if (
        questionId === undefined ||
        answerId === undefined ||
        answer === undefined
      ) {
        throw "리퀘스트 정보에 필요한 값이 없습니다.";
      }
      const updateanswer = await this.questionservice.updateAnswer(
        questionId,
        answer,
        answerId
      );
      res.status(200).json({ data: "성공" });
    } catch (err) {
      res.status(400).json({ errormessage: err });
    }
  };

  // Q&A 답변 삭제
  deleteAnswer = async (req, res, next) => {
    try {
      const { questionId, answerId } = req.body;
      if (questionId === undefined || answerId === undefined) {
        throw "리퀘스트 정보에 필요한 값이 없습니다.";
      }
      const deleteanswer = await this.questionservice.deleteAnswer(
        questionId,
        answerId
      );
      res.status(200).json({ data: "성공" });
    } catch (err) {
      res.status(400).json({ errormessage: err });
    }
  };

  // Q&A 답변 조회
  getAnswer = async (req, res, next) => {
    try {
      const readanswer = await this.questionservice.getAnswer();
      res.status(200).json({ data: readanswer });
    } catch (err) {
      res.status(400).json({ errormessage: err });
    }
  };

  // Q&A 답변 단일 조회
  getAnswerOne = async (req, res, next) => {
    try {
      const answerId = req.params.answerId;
      if (answerId === undefined) {
        throw "리퀘스트 정보에 필요한 값이 없습니다.";
      }
      const readoneanswer = await this.questionservice.getAnswerOne(answerId);
      res.status(200).json({ data: readoneanswer });
    } catch (err) {
      res.status(400).json({ errormessage: err });
    }
  };

  //mail
  mail = async (req, res, next) => {
    try {
      const { email } = req.body;
      if (email === undefined) {
        throw "리퀘스트 정보에 필요한 값이 없습니다.";
      }
      const mail = await this.questionservice.maile(email);
      res.status(200).json({ data: mail });
    } catch (err) {
      res.status(400).json({ errormessage: err });
    }
  };

  codefind = async (req, res, next) => {
    try {
      const { code } = req.body;
      if (code === undefined) {
        throw "리퀘스트 정보에 필요한 값이 없습니다.";
      }
      const codefind = await this.questionservice.codefind(code);
      if (codefind === null) {
        return res.status(400).json({
          errormessage: "인증이 불가능 한 코드 이거나 만료된 코드 입니다.",
        });
      }
      res.status(200).json({ data: "인증성공" });
    } catch (err) {
      res.status(400).json({ errormessage: err });
    }
  };
}

module.exports = Questioncontroller;
