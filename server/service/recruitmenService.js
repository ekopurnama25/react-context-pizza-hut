const { Recruitmen } = require("../models");
exports.SendRecruitmen = async (req, res) => {
  try {
    const recruitmen = {
      nama_lengkap: req.body.nama_lengkap,
      jenis_kelamin: req.body.jenis_kelamin,
      pendidikan: req.body.pendidikan,
      usia: req.body.usia + " Tahun",
      no_wa: req.body.no_wa,
      hobi: req.body.hobi,
      tujuan_bergabung: req.body.tujuan_bergabung,
      alamat: req.body.alamat,
    };
    const CreateRecruitmen = await Recruitmen.create(recruitmen);
    res.status(200).json({
      status: "true",
      data: CreateRecruitmen,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "false",
      message: "data error users",
    });
  }
};
