const { nomeProjeto, anoFinal, paisesSede } = require("../src/utils/copa");

test("Nome do projeto", () => {
  expect(nomeProjeto()).toBe("Copa 2026 Explorer");
});

test("Ano da final", () => {
  expect(anoFinal()).toBe(2026);
});

test("Quantidade de países sede", () => {
  expect(paisesSede().length).toBe(3);
});
