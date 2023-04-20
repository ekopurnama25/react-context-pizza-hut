const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
const app = express();
const port = 8000;
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
app.use(bodyParser.json());

app.use(cors());

const usersRoute = require("./router/users.route");
const authRoute = require("./router/auth.route");
const recruitmenRoute = require("./router/recruitmen.route");

app.use("/v2/users", usersRoute);
app.use("/v2/auth", authRoute);
app.use("/v2/recruit", recruitmenRoute);

app.use("/static", express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  db.sequelize.sync();
});
