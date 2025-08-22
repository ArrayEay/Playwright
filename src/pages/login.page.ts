import { type Page, test as base } from "@playwright/test";

export class LoginPage {
    page: Page;
    baseUrl: string = 'https://www.saucedemo.com/';
    locatorUsername: string = "#user-name";
    locatorPassword: string = "#password";
    locatorButtonLogin: string = '#login-button';
    locatorErrorMessage: string = '//div[@class="error-message-container error"]';

    constructor(page: Page) {
        this.page = page;
    }

    async goto(): Promise<void> {
        await this.page.goto(this.baseUrl);
    }

    async fillUserPassword(username: string, password: string): Promise<void> {
        await this.page.locator(this.locatorUsername).fill(username);
        await this.page.locator(this.locatorPassword).fill(password);
    }

    async clickLogin(): Promise<void> {
        await this.page.click(this.locatorButtonLogin);
    }

    async getUsername(): Promise<string> {
        return await this.page.locator(this.locatorUsername).inputValue();
    }

    async getPassword(): Promise<string> {
        return await this.page.locator(this.locatorPassword).inputValue();
    }

    async getErrorMessage(): Promise<string> {
        try {
            return await this.page.locator(this.locatorErrorMessage).textContent() || "";
        } catch (e) {
            return "";
        }
    }

    async waitForUrl(newUrl: string | RegExp): Promise<void> {
        await this.page.waitForURL(newUrl, {timeout: 150000});
        // console.log(newUrl);
    }
}

