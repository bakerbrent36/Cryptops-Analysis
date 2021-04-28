const express = require("express");
const cookieParser = require("cookie-parser");
const request = require("request");
const path = require("path");
const Cookie = require("request-cookies").Cookie;
const nodemailer = require("nodemailer");
const AWS = require("aws-sdk");
const { GoogleSpreadsheet } = require("google-spreadsheet");
require("dotenv").config();

const doc = new GoogleSpreadsheet(
  "1OAiKSmyIB9ZsvpgtFSDvaMJIlDQeRtyVzTX-7Naurtg"
);

const app = express();

const SESConfig = {
  apiVersion: "2010-12-01",
  accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SES_SECRET_KEY,
  region: process.env.AWS_SES_REGION,
};

app.use(cookieParser());
app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));

app.post("/update-sheet", async (req, res, next) => {
  try {
    const { name, email, tee_time, golfers, round } = req.body;
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    sheet
      .addRow({
        Name: name,
        Email: email,
        "Tee Time": tee_time,
        "Number of Golfers": golfers,
        Round: round,
      })
      .then(() => {
        res.send("success");

        const params = {
          Source: "golf@workhorsebrewing.com",
          Destination: {
            ToAddresses: [`${email}`],
          },
          ReplyToAddresses: ["golf@workhorsebrewing.com"],
          Message: {
            Body: {
              Html: {
                Charset: "UTF-8",
                Data: `
                          <div style="margin: 0 auto">
                          <img style="width: 300px; height: 200px;" src="https://workhorsetour.com/images/Logos/Workhorse-Tour-logo-01.png"/>
                          <p>
                            You have confirmed your tee</strong>
                          </p>
                          <p>
                            Please return to the app and use your GHIN to complete registration for the Workhorse Tour.
                          </p>
                            <p>
                            If you have any questsions, please email us at golf@workhorsebrewing.com
                          </p>
                        
                        </div>
                            `,
              },
            },
            Subject: {
              Charset: "UTF-8",
              Data: "Your Tee Time has been confirmed!",
            },
          },
        };

        new AWS.SES(SESConfig)
          .sendEmail(params)
          .promise()
          .then((response) => console.log(response));
      });
  } catch (e) {
    next(e);
  }
});

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
      console.log(last_name);

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
              force: true,
            }),
          },
          (error, response, body) => {
            console.log(body);

            const parsedBody = JSON.parse(body);

            if (!parsedBody.errors) {
              const params = {
                Source: "golf@workhorsebrewing.com",
                Destination: {
                  ToAddresses: [`${email}`],
                },
                ReplyToAddresses: ["golf@workhorsebrewing.com"],
                Message: {
                  Body: {
                    Html: {
                      Charset: "UTF-8",
                      Data: `
                          <div style="margin: 0 auto">
                          <img style="width: 300px; height: 200px;" src="https://workhorsetour.com/images/Logos/Workhorse-Tour-logo-01.png"/>
                          <p>
                            Welcome to the Workhorse Tour! Your GHIN is <strong>${parsedBody.golfers.id}</strong>
                          </p>
                          <p>
                            Please return to the app and use your GHIN to complete registration for the Workhorse Tour.
                          </p>
                            <p>
                            If you have any questsions, please email us at golf@workhorsebrewing.com
                          </p>
                        
                        </div>
                            `,
                    },
                  },
                  Subject: {
                    Charset: "UTF-8",
                    Data: "Your GHIN is here!",
                  },
                },
              };

              new AWS.SES(SESConfig)
                .sendEmail(params)
                .promise()
                .then((response) => console.log(response));
            }

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
  console.log(
    `https://www.golfgenius.com/api/scores?id=1&player_ids[]=${req.body.player_id}&scores[]=${req.body.score}`
  );
  request(
    {
      url: `https://www.golfgenius.com/api/scores?id=1&player_ids[]=${req.body.player_id}&scores[]=${req.body.score}`,
      method: "POST",
      headers: {
        Cookie: `_gg_production_session=${req.cookies["_gg_production_session"]}`,
        "Content-Type": "application/json",
      },
    },
    (error, response, body) => {
      console.log(body);
      res.json(body);
    }
  );
});

app.post("/authenticate", (req, res, next) => {
  console.log(req.body);
  try {
    request.get(
      `https://golfgenius.com/api/user?source=ios&password=${req.body.password}&product=golfgenius&api_version=2&email=${req.body.email}&version=2`,
      function (err, response, body) {
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
      }
    );
  } catch (e) {
    next(e);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.use((err, req, res, next) => {
  res.status(500);
  res.json({ message: err.message });
});

app.listen(process.env.PORT || 8080, function () {
  console.log("Server listening");
});
