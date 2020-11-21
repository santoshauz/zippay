import {by, element} from "protractor";

const expect = require('chai').expect;
export module CreateEmployeePage {
    const
        firstName = element(by.model("selectedEmployee.firstName")),
        lastName = element(by.model("selectedEmployee.lastName")),
        startDate = element(by.model('selectedEmployee.startDate')),
        emailId = element(by.model("selectedEmployee.email")),
        addButton = element(by.buttonText("Add"));

    export async function clickAddButton() {
        await addButton.click();
    }
    export async function enterFirstName(fName: string) {
        await firstName.sendKeys(fName);
    }

    export async function clickFirstNameTextField() {
        await firstName.click();
    }

    export async function enterLastName(lName: string) {
        await lastName.sendKeys(lName);
    }

    export async function clickLastNameTextField() {
        await lastName.click();
    }

    export async function enterStartDate(sDate: string) {
        await startDate.sendKeys(sDate);
    }

    export async function clickStartDateTextField() {
        await startDate.click();
    }

    export async function enterEmailId(mailId: string) {
        await emailId.sendKeys(mailId);
    }

    export async function clickEmailIdTextField() {
        await emailId.click();
    }
}