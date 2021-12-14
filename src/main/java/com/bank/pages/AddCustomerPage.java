package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddCustomerPage extends Utility {

    private static final Logger log = LogManager.getLogger(AddCustomerPage.class.getName());

    public AddCustomerPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='First Name']")
    WebElement getFirstName;

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='Last Name']")
    WebElement getLastName;

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='Post Code']")
    WebElement getPostCode;

    @CacheLookup
    @FindBy(xpath = "//button[@type='submit']")
    WebElement getAddCustomerBtn;

    public void inputFirstName(String fName) {
        sendTextToElement(getFirstName, fName);
        log.info("Entering first name " + getFirstName.toString());
    }

    public void inputLastName(String lName) {
        sendTextToElement(getLastName, lName);
        log.info("Entering last name " + getLastName.toString());
    }

    public void inputPostcode(String postcode) {
        sendTextToElement(getPostCode, postcode);
        log.info("Entering post code  " + getPostCode.toString());
    }

    public void clickOnAddCustomerButton() throws InterruptedException {
        Thread.sleep(1000);
        log.info("Clicking on add customer button " + getAddCustomerBtn.toString());
        clickOnElement(getAddCustomerBtn);
    }

    public void acceptPopUpMessage(){
        acceptAlert();
    }

    public void alertTextVerify(String expectedMessage) throws InterruptedException {
        Thread.sleep(2000);
        String message = getTextFromAlert();
        verifyMessage(expectedMessage, message, "Error, Message not displayed as expected");
    }



}
