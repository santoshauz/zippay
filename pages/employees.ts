import {browser, by, element} from 'protractor';

/***
 * Chai will be used as the assertion library
 */

const expect = require('chai').expect;

export module EmployeesPage {
    const
        createButton = element(by.id("bAdd")),
        editButton = element(by.id("bEdit")),
        deleteButton = element(by.id("bDelete"));

    export async function CheckEmployeesPageHasLoaded() {
        await browser.sleep(1000);
        expect(await createButton.isDisplayed()).to.be.true;
    }

    export async function ClickCreateButton() {
        // await browser.sleep(1000);
        await createButton.click();
        await browser.sleep(1000);
    }

    export async function ClickEditButton() {
        await editButton.click();
    }

    export async function ClickDeleteButton() {
        await deleteButton.click();
        await browser.sleep(1000);
        await browser.switchTo().alert().accept();
    }

}