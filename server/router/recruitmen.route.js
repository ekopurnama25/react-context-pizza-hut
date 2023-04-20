const authorization = require("../middlaware/authorization");
const express = require("express");

const { SendRecruitmen } = require("../service/recruitmenService");

const router = express.Router();

router.post("/create", SendRecruitmen);

module.exports = router;
