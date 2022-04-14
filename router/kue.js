const express = require("express");
const routerKue = express.Router();

const controllerKue = require("../controller/kue");

routerKue.route("/kue").get(controllerKue.getKue).post(controllerKue.insert);

routerKue.route("/kue/:kode").put(controllerKue.update).delete(controllerKue.delete).get(controllerKue.getKueByKode);

module.exports = routerKue;
