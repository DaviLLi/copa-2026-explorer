const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile("views/index.html", { root: __dirname });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Servidor rodando na porta 3000");
});
