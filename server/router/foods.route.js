const authorization = require("../middlaware/authorization");
const multer = require("multer");

const path = require("path");
const express = require("express");

const router = express.Router();

const foodService = require("../service/foodService");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../file"));
  },
  // konfigurasi penamaan file yang unik
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

router.post(
  "/",
  upload.single("images"),
  authorization.verify,
  foodService.addfoods
);

router.get("/", authorization.verify, foodService.getFoods);

module.exports = router;
