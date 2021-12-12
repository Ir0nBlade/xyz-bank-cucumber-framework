package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class OpenAccountPage extends Utility {

    private static final Logger log = LogManager.getLogger(OpenAccountPage.class.getName());

    public OpenAccountPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//select[@id='userSelect']")
    WebElement customerName;

    @FindBy(xpath = "//select[@id='currency']")
    WebElement selectCurrency;

    @FindBy(xpath = "//button[contains(text(),'Process')]")
    WebElement processBtn;


    public void selectCustomerName(String name) throws InterruptedException {
        Thread.sleep(1000);
        selectByVisibleTextFromDropDown(customerName, name);
        log.info("Selecting Customer Name " + customerName.toString());
    }

    public void selectCurrency(String currency) {
        selectByVisibleTextFromDropDown(selectCurrency, currency);
        log.info("Selecting Currency " + selectCurrency.toString());
    }

    public void clickOnProcessButton() {
        log.info("Clicking on Process Button " + processBtn.toString());
        clickOnElement(processBtn);
    }


    public void alertTextVerify(String expectedMessage) throws InterruptedException {
        Thread.sleep(2000);
        String Message = getTextFromAlert();
        verifyMessage(expectedMessage, Message, "Error, Message not displayed as expected");
    }
}
