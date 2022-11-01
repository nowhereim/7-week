const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const port = process.env.EXPRESS_PORT;

const corsoption = {
  origin: true,
  credentials: true,
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsoption));
app.use("/", routes);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

const getHtml = async () => {
  try {
    return await axios.get("https://www.kurly.com/goods/5116401");
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then((html) => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("div.headline-list ul").children("li.section02");
    // console.log($bodyList);
    $bodyList.each(function (i, elem) {
      ulList[i] = {
        // ulList 배열에 i번째 객체를 넣는다.
        title: $(this).find("title").text(), // 제목
        url: $(this).find("strong.news-tl a").attr("href"), // 링크
        image_url: $(this).find("p.poto a img").attr("src"), // 이미지
        image_alt: $(this).find("p.poto a img").attr("alt"), // 이미지 설명
        summary: $(this).find("p.lead").text().slice(0, -11), // 요약
        date: $(this).find("span.p-time").text(), // 날짜
      };
    });

    const data = ulList.filter((n) => n.title);
    console.log(data);
    return data;
  })
  .then((res) => log(res));

app.listen(port, () => {
  console.log("서버 온 앙~");
});
