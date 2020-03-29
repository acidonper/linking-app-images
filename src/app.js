require("dotenv").config();
const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const cors = require("cors");
const path = require("path");

var corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));

app.use("/", indexRouter);

app.use("/public", express.static(path.join(process.cwd(), "/public")));

const SERVER_PORT = process.env.SERVER_PORT || 5001;

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT} `);
});
