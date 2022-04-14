const modelKue = require("../model/kue");
module.exports = {
  getKue: (req, res) => {
    Kue = modelKue.getKue;

    res.json(Kue);
  },

  insert: (req, res) => {
    newItem = modelKue.insert(req);
    res.status(201).json(newItem);
  },

  getKueByKode: (req, res) => {
    dataKue = modelKue.getKueByKode(req);
    if (dataKue != -1) {
      res.json(dataKue);
    } else {
      res.send("kue dengan kode :" + req.params.kode + "tidak ditemukan");
    }
  },

  update: (req, res) => {
    Kue = modelKue.update(req);
    if (Kue != -1) {
      res.json(Kue);
    }
    res.send("data kue tidak ditemukan");
  },

  delete: (req, res) => {
    ket = modelKue.delete(req);
    res.send(ket);
  },
};
