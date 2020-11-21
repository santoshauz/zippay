import { defineSupportCode } from 'cucumber';
import {config} from "../config/config";
import {browser} from "protractor";
import {LoginPage} from "../pages/login";
import {EmployeesPage} from "../pages/employees";

defineSupportCode(function ({Given, When, Then}) {
    Given(/^I navigate to the Cafe TownSend website$/, async () => {
        await browser.get(config.baseUrl);
        await LoginPage.verifyPageTitle;
    });

    When(/^I Enter the Username as (.+?)$/, async(uname: string) => {
        await browser.sleep(1000);
        await LoginPage.enterUserName(uname);
    });

    When(/^I Enter the Password as (.+?)$/, async(pword: string) => {
        await LoginPage.enterPassWord(pword);
    });

    When(/^I Click on the Login Button$/, async() => {
        await LoginPage.clickLoginButton();
    });

    Then(/^I Login Successfully$/, async() => {
        await EmployeesPage.CheckEmployeesPageHasLoaded();
    });

    Then(/^I fail to Login Successfully$/, async() => {
        await LoginPage.verifyLoginErrorMessage();
    });
});