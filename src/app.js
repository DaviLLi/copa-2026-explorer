const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const viewsPath = path.join(__dirname, "views");

// Rotas das paginas HTML do projeto Copa 2026 Explorer.
app.get("/", (req, res) => {
  res.sendFile(path.join(viewsPath, "index.html"));
});

app.get("/selecoes", (req, res) => {
  res.sendFile(path.join(viewsPath, "selecoes.html"));
});

app.get("/countdown", (req, res) => {
  res.sendFile(path.join(viewsPath, "countdown.html"));
});

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(
      `A porta ${PORT} ja esta em uso. Feche o servidor antigo e rode: node src/app.js`,
    );
    return;
  }

  console.error("Erro ao iniciar o servidor:", error);
});
