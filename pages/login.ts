///<reference path="../node_modules/@types/node/index.d.ts"/>
import {browser, by, element} from 'protractor';

const expect = require('chai').expect;

/***
 * Chai will be used as the assertion library
 */

export module LoginPage {
    let
        pageTitle = 'CafeTownsend-AngularJS-Rails';
    const
        userName = element(by.model("user.name")),
        passWord = element(by.model("user.password")),
        loginButton = element(by.buttonText("Login")),
        loginErrorMessage = element(by.xpath("//*[@id=\"login-form\"]/fieldset/p[1]"));
    var
        UserNameField = element(by.xpath("//*[@id=\"login-form\"]/fieldset/label[1]/span[1]")),
        LoginButtonVisibility = element(by.buttonText("submit"));

    /**
     * Function to Verify the Page Title
     * @returns {Promise<void>}
     */
    export async function verifyPageTitle() {
        expect(await browser.getTitle()).to.equal(pageTitle);
    }

    export async function verifyLoginErrorMessage() {
        var errorText = "Invalid username or password!";
        // expect(await loginErrorMessage.isDisplayed()).to.equal(true);
        await browser.sleep(1000);
        expect(await loginErrorMessage.getText()).to.equal(errorText);
    }

    /***
     * Function to check if UserName Field is visible
     * @returns {Promise<void>}
     */
    export async function checkUserNameFieldVisible() {
        await browser.wait(browser.isElementPresent(UserNameField));
    }

    export async function checkLoginButtonVisible() {
        await browser.wait(browser.isElementPresent(LoginButtonVisibility));
    }

    /***
     * Function to enter UserName
     * @param {string} uName
     * @returns {Promise<void>}
     */
    export async function enterUserName(uName: string) {
        await userName.sendKeys(uName);
    }

    /***
     * Function to enter PassWord
     * @param {string} pWord
     * @returns {Promise<void>}
     */
    export async function enterPassWord(pWord: string) {
        await passWord.sendKeys(pWord);
    }

    /***
     * Function to Click on Login Button
     * @returns {Promise<void>}
     */
    export async function clickLoginButton() {
        await loginButton.click();
    }
}