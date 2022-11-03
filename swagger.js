const swaggerAutogen = require("swagger-autogen")();
require("dotenv").config();

const doc = {
  info: {
    version: "1.0.0",
    title: "마켓 컬리커리커리",
    description: "",
  },
  host: "localhost:3000",
  schemes: ["http"], 
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Members",
      description: "회원정보API",
    },
    {
      name: "Goods",
      description: "상품API",
    },
    {
      name: "Cart",
      description: "장바구니API",
    },
    {
      name: "Reviews",
      description: "후기API",
    },
    {
      name: "QnA",
      description: "문의API",
    },
  ],
  securityDefinitions: {
    apiKeyAuth: {
      type: "apiKey",
      in: "header", // can be "header", "query" or "cookie"
      name: "Authorization", // name of the header, query parameter or cookie
      description: "any description...",
    },
  },
  definitions: {
    signup: {
      father: "Simon Doe",
      mother: "Marie Doe",
    },
    User: {
      userId: 1,
      $nickname: "aaa",
      $password: "1111",
    },
    AddUser: {
      $name: "Jhon Doe",
      $age: 29,
      about: "",
    },
  },
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./app.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
