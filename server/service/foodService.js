const { Foods } = require("../models");
exports.addfoods = async (req, res, next) => {
  try {
    const url = req.protocol + "://" + req.get("host");
    const fileimg = req.file.filename;
    const foods = {
      jenis_pizza: req.body.jenis_pizza,
      qty: req.body.qty,
      harga_pizza: req.body.harga_pizza,
      desc_pizza: req.body.desc_pizza,
      images: fileimg,
      url: url + "/file/" + fileimg,
    };

    await Foods.create(foods);
    console.log(foods);
  } catch (error) {
    console.log(error);
  }
};

exports.getFoods = async (req, res) => {
  try {
    await Foods.findAll().then((foods) =>
      res.status(200).json({ message: "true", data: foods })
    );
  } catch (error) {
    console.log(error);
  }
};
