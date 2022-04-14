const express = require("express");

const app = express();
const port = 7000;

const routerKue = require("./router/kue");

//untuk menerima req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/about", (req, res) => {
  res.send("about");
});

app.use(routerKue);

app.listen(port, () => {
  console.log("server berjalan pada port" + port);
});
