import { test, expect } from "../src/pages/base";
import { invalidUsers, validUsers } from "../src/data/data";

test.describe("LOGIN FUNCTION", () => {

    test.beforeEach(async ({loginPage}) => {
        await loginPage.page.unrouteAll()
        await loginPage.goto();
    })

    validUsers.forEach(({ username, password }) => {
        test(`Should logged in successfully with valid credentials: ${username}`, async ({ loginPage }) => {

            await loginPage.fillUserPassword(username, password);
            await loginPage.clickLogin();
            await loginPage.waitForUrl(/.*\/inventory.html/);

            expect(loginPage.page.url().endsWith('/inventory.html')).toBe(true)
        });
    });

    invalidUsers.forEach(({ username, password }, index) => {
        test(`Should logged in fails with an error message when using invalid credentials: ${username} [case ${index + 1}]`, async ({ loginPage }) => {

            await loginPage.fillUserPassword(username, password);
            await loginPage.clickLogin();

            expect(await loginPage.getErrorMessage()).toContain(
                "Epic sadface"
            );
            expect(loginPage.page.url().endsWith('/inventory.html')).toBe(false)
        });
    });

});
