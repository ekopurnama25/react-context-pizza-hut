const { Foods } = require("../models");
const fs = require("fs");

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
    res.status(200).json({
      status: "true",
      data: foods,
    });
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

exports.getFoodsPublic = async (req, res) => {
  try {
    await Foods.findAll().then((foods) =>
      res.status(200).json({ message: "true", data: foods })
    );
  } catch (error) {
    console.log(error);
  }
};

exports.DeleteFoods = async (req, res) => {
  try {
    const id = req.params.id;
    const checkImg = await Foods.findOne({
      where: { id_foods: id },
    });
    if (checkImg) {
      filepath = `./file/${checkImg.images}`;
      fs.unlinkSync(filepath);
      const deleteFoods = await Foods.destroy({
        where: { id_foods: checkImg.id_foods },
      });
      res.status(200).json({
        status: true,
        message: "delete successfully data foods",
        id: id,
      });
    } else {
      res.status(400).json({
        status: true,
        id: "Failed Delete",
      });
    }

    //console.log(id);
  } catch (error) {
    console.log(error);
  }
};
