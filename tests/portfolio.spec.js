import { test, expect } from "@playwright/test";

test("project filters, dialogs, and canvas work with real content", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await expect(page.getByRole("link", { name: "Skip to content" })).toHaveCSS("clip-path", "none");
  await expect(page).toHaveTitle(/Insha Mustafa/);
  await expect(page.locator(".project-card")).toHaveCount(4);
  await page
    .getByRole("button", { name: "Enterprise impact", exact: true })
    .click();
  await expect(page.locator(".project-card")).toHaveCount(1);
  await page
    .getByRole("button", { name: "Read project story: Enterprise, aligned." })
    .click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("dialog")).toContainText("estimated $57K");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(
    page.getByRole("button", {
      name: "Read project story: Enterprise, aligned.",
    }),
  ).toBeFocused();
  await page.getByRole("button", { name: "AI & product", exact: true }).click();
  await expect(page.locator(".project-card")).toHaveCount(3);
  await page.getByRole("button", { name: /All work/ }).click();
  await expect(page.locator(".project-card")).toHaveCount(4);
  await page.locator('[data-stage="1"]').click();
  await expect(page.locator("#canvas-caption")).toHaveText(
    "Find where user needs meet business value.",
  );
  const resume = await page.request.get("/Insha_Mustafa_Resume.pdf");
  expect(resume.ok()).toBeTruthy();
  expect(resume.headers()["content-type"]).toContain("application/pdf");
  expect(errors).toEqual([]);
});

for (const width of [360, 390, 768, 1440]) {
  test(`layout fits a ${width}px viewport`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBeTruthy();
    const portrait = page.locator(".about-photo img");
    await portrait.scrollIntoViewIfNeeded();
    await expect(portrait).toBeVisible();
    await expect
      .poll(() => portrait.evaluate((img) => img.complete && img.naturalWidth > 0))
      .toBeTruthy();
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await expect(page.getByRole("link", { name: "Say hello" })).toBeVisible();
    if (width === 390 || width === 1440) {
      await page.evaluate(() =>
        document
          .querySelectorAll(".reveal")
          .forEach((el) => el.classList.add("in-view")),
      );
      await page.screenshot({
        path: `test-results/portfolio-${width}.png`,
        fullPage: true,
        animations: "disabled",
      });
    }
  });
}

test("reduced motion leaves content visible", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".contact-section")).toHaveCSS("opacity", "1");
});
