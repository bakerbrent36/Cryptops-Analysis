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

app.get("/get-foursomes", (req, res, next) => {
  request(
    {
      url: "https://golfgenius.com/api/rounds/7195606752899937736/foursomes",
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

app.post("/authenticate", (req, res, next) => {
  console.log(req.body);
  request.get(
    `https://golfgenius.com/api/user?source=ios&password=${req.body.password}&product=golfgenius&api_version=2&email=${req.body.email}&version=2`,
    function (err, response, body) {
      var rawcookies = response.headers["set-cookie"];
      for (var i in rawcookies) {
        var cookie = new Cookie(rawcookies[i]);
        if (cookie.key == "_gg_production_session") {
          res.cookie(cookie.key, cookie.value);
          res.send(body);
        }
        console.log(cookie.key, cookie.value, cookie.expires);
      }

      console.log(body);
    }
  );
});

app.listen(process.env.PORT || 8080, function () {
  console.log("Server listening");
});
