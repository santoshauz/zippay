import {defineSupportCode} from "cucumber";
import {EmployeesPage} from "../pages/employees";
import {CreateEmployeePage} from "../pages/employees/new";
import {browser, by, element} from "protractor";
import {EditEmployeePage} from "../pages/employees/edit";

const expect = require('chai').expect;

defineSupportCode(function ({Given, When, Then}) {

    let
        searchString = "Larry Diamond",
        repeaterString = "employee in employees",
        updateString = "Severus Snape";

    When(/^I Enter the FirstName as (.+?)$/, async (fName: string) => {
        await browser.sleep(1000);
        await CreateEmployeePage.clickFirstNameTextField();
        await CreateEmployeePage.enterFirstName(fName);
    });

    When(/^I Enter the LastName as (.+?)$/, async (lName: string) => {
        await CreateEmployeePage.clickLastNameTextField();
        await CreateEmployeePage.enterLastName(lName);
    });

    When(/^I Enter the StartDate as (.+?)$/, async (startDate: string) => {
        await CreateEmployeePage.clickStartDateTextField();
        await CreateEmployeePage.enterStartDate(startDate);
    });

    When(/^I Enter the EmailId as (.+?)$/, async (emailId: string) => {
        await CreateEmployeePage.clickEmailIdTextField();
        await CreateEmployeePage.enterEmailId(emailId);
    });

    When(/^I Click on Create Button$/, async () => {
        await EmployeesPage.ClickCreateButton();
    });

    When(/^I Click on Add Button$/, async () => {
        await CreateEmployeePage.clickAddButton();
    });

    When(/^I Select the User to Edit as (.+?)$/, async (uName: string) => {
        await browser.sleep(1000);
        let list = element.all(by.xpath("//*[@id=\"employee-list\"]"));
        list.get(0).click();
    });

    When(/^I Click on Edit Button$/, async () => {
        await browser.sleep(1000);
        await EmployeesPage.ClickEditButton();
        await browser.sleep(1000);
    });

    When(/^I Enter the FirstName to Update as (.+?)$/, async (updatedFirName: string) => {
        await browser.sleep(1000);
        await EditEmployeePage.clearFirstNameTextField();
        await EditEmployeePage.enterFirstName(updatedFirName);
    });

    When(/^I Enter the LastName to Update as (.+?)$/, async (updatedLastName: string) => {
        await EditEmployeePage.clearLastNameTextField();
        await EditEmployeePage.enterLastName(updatedLastName);
    });

    When(/^I Enter the StartDate to Update as (.+?)$/, async (updatedStartDate: string) => {
        await EditEmployeePage.clearStartDateTextField()
        await EditEmployeePage.enterStartDate(updatedStartDate);
    });

    When(/^I Enter the EmailId to Update as (.+?)$/, async (updatedEmailId: string) => {
        await EditEmployeePage.clearEmailIdTextField();
        await EditEmployeePage.enterEmailId(updatedEmailId);
    });

    When(/^I Click on Update Button$/, async () => {
        await EditEmployeePage.clickUpdateButton();
    });

    When(/^I Select the User to Delete$/, async() => {
        await browser.sleep(1000);
        let list = element.all(by.xpath("//*[@id=\"employee-list\"]"));
        await list.get(0).click();
    });

    When(/^I Click on Delete Button$/, async () => {
        await EmployeesPage.ClickDeleteButton();
    });

    Then(/^I find the Employee Added$/, async () => {
        await browser.sleep(10000);
        expect(await element.all(by.repeater(repeaterString)).getText()).to.contain(searchString);
    });

    Then(/^I find the Employee Edited$/, async () => {
        await browser.sleep(10000);
        expect(await element.all(by.repeater(repeaterString)).getText()).to.contain(updateString);
    })
});