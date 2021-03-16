const express = require("express");
const cookieParser = require("cookie-parser");
const request = require("request");
const path = require("path");
const Cookie = require("request-cookies").Cookie;
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));

app.post("/get-ghin", (req, res, next) => {
  request(
    {
      url: `${process.env.GHIN_API_LOGIN_URL}`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          email: process.env.GHIN_API_USER,
          password: process.env.GHIN_API_PASS,
          remember_me: "true",
        },
      }),
    },
    (error, response, body) => {
      let { token } = JSON.parse(body);

      console.log(token);

      let {
        first_name,
        last_name,
        gender,
        email,
        street_1,
        country,
        state,
        city,
        zip,
      } = req.body;
      console.log(first_name);

      if (token) {
        request(
          {
            url: `${process.env.GHIN_API_REGISTER_URL}`,
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              golfer: {
                first_name,
                last_name,
                gender,
                email,
              },
              primary_address: {
                street_1,
                country,
                state,
                city,
                zip,
              },
            }),
          },
          (error, response, body) => {
            console.log(body);
            res.send(body);
          }
        );
      }
    }
  );
});

app.get("/get-foursomes/:id", (req, res, next) => {
  console.log(req.params);
  console.log(req.params.id);
  request(
    {
      url: `https://golfgenius.com/api/rounds/${req.params.id}/foursomes`,
      method: "GET",
      headers: {
        Cookie: `_gg_production_session=${req.cookies["_gg_production_session"]}`,
      },
    },
    (error, response, body) => {
      res.send(body);
    }
  );
});

app.post("/submit-score", (req, res, next) => {
  request(
    {
      url: `https://golfgenius.com/api/scores`,
      method: "POST",
      headers: {
        Cookie: `_gg_production_session=${req.cookies["_gg_production_session"]}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        player_ids: [7227377422402893000],
        scores: ["1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18"],
      }),
    },
    (error, response, body) => {
      console.log(body);
      res.send(body);
    }
  );
});

app.post("/authenticate", (req, res, next) => {
  console.log(req.body);
  request.get(
    `https://golfgenius.com/api/user?source=ios&password=${req.body.password}&product=golfgenius&api_version=2&email=${req.body.email}&version=2`,
    function (err, response, body) {
      try {
        const rawcookies = response.headers["set-cookie"];

        const [ggCookie] = rawcookies.filter((rawCookie) => {
          const cookie = new Cookie(rawCookie);
          return cookie.key === "_gg_production_session";
        });

        if (ggCookie) {
          const newCookie = new Cookie(ggCookie);
          res.cookie(newCookie.key, newCookie.value);
        }

        res.send(body);
      } catch (e) {
        console.log(e);
      }
    }
  );
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080, function () {
  console.log("Server listening");
});
