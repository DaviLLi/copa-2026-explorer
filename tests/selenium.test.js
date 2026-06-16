const { Builder, By, until } = require("selenium-webdriver");

jest.setTimeout(30000);

test("Navegação Home -> Seleções", async () => {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:3000");

    await driver.wait(until.elementLocated(By.tagName("body")), 5000);

    const homePage = await driver.getPageSource();

    expect(homePage).toContain("Copa 2026 Explorer");

    const linkSelecoes = await driver.findElement(
      By.css('a[href="/selecoes"]'),
    );

    await linkSelecoes.click();

    await driver.wait(until.urlContains("/selecoes"), 5000);

    const selecoesPage = await driver.getPageSource();

    expect(selecoesPage).toContain("Favoritas da");
  } finally {
    await driver.quit();
  }
});
