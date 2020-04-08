require("dotenv").config();
const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const path = require("path");

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));

app.use("/", indexRouter);

app.use("/public", express.static(path.join(process.cwd(), "/public")));

app.use((req, res) => res.status(404).json({ message: "route not found" }));

const SERVER_PORT = process.env.LINKING_APP_IMAGES_SERVICE_PORT || 5001;

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT} `);
});
