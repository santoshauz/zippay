import {browser, by, element} from "protractor";

const expect = require('chai').expect;

export module EditEmployeePage {
    const
        firstName = element(by.model("selectedEmployee.firstName")),
        lastName = element(by.model("selectedEmployee.lastName")),
        startDate = element(by.model('selectedEmployee.startDate')),
        emailId = element(by.model("selectedEmployee.email")),
        updateButton = element(by.buttonText("Update"));

    export async function enterFirstName(fName: string) {
        await firstName.sendKeys(fName);
    }

    export async function clearFirstNameTextField() {
        await firstName.clear();
    }

    export async function enterLastName(lName: string) {
        await lastName.sendKeys(lName);
    }

    export async function clearLastNameTextField() {
        await lastName.clear();
    }

    export async function enterStartDate(sDate: string) {
        await startDate.sendKeys(sDate);
    }

    export async function clearStartDateTextField() {
        await startDate.clear();
    }

    export async function enterEmailId(mailId: string) {
        await emailId.sendKeys(mailId);
    }

    export async function clearEmailIdTextField() {
        await emailId.clear();
    }

    export async function clickUpdateButton() {
        await browser.sleep(1000);
        await updateButton.click();
    }
}