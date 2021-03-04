const express = require("express");
const cookieParser = require("cookie-parser");
const https = require("https");
const request = require("request");
const path = require("path");
const Cookie = require("request-cookies").Cookie;

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));

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
  console.log(req.body);
  console.log(req);
  res.send(req.body);
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
