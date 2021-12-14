package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AccountPage extends Utility {

    private static final Logger log = LogManager.getLogger(AccountPage.class.getName());

    public AccountPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Logout')]")
    WebElement logoutBtn;

    @CacheLookup
    @FindBy(xpath = "//label[contains(text(),'Your Name :')]")
    WebElement yourNameText;

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Deposit']")
    WebElement depositTab;

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='amount']")
    WebElement depositAmount;

    @CacheLookup
    @FindBy(xpath = "//button[@type='submit']")
    WebElement submitBtn;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Deposit Successful')]")
    WebElement depositMessage;

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Withdrawl']")
    WebElement withdrawlTab;

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='amount']")
    WebElement withdrawAmount;

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Withdraw']")
    WebElement withdrawButton;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Transaction successful')]")
    WebElement transactionSuccessText;

    public void clickOnLogoutButton(){
        clickOnElement(logoutBtn);
        log.info("Clicking on logout button " + logoutBtn.toString());
    }

    public void verifyYourNameTextVisible(String text){
        verifyThatTextIsDisplayed(yourNameText, text);
        log.info("Verifying your name text " + yourNameText.toString());
    }

    public void clickOnDepositTab(){
        clickOnElement(depositTab);
        log.info("clicking on Deposit tab " + depositTab.toString());
    }

    public void inputDepositAmount(String amount){
        sendTextToElement(depositAmount, amount);
        log.info("Entering deposit amount " + depositAmount.toString());
    }

    public void clickOnSubmitButton(){
        clickOnElement(submitBtn);
        log.info("Clicking on deposit button " + submitBtn.toString());
    }

    public void verifyDepositSuccessfulMessage(String message){
        verifyThatTextIsDisplayed(depositMessage, message);
        log.info("Accepting cookies " + depositMessage.toString());
    }

    public void clickOnWithdrawlTab(){
        clickOnElement(withdrawlTab);
        log.info("Clicking on withdrawl tab " + withdrawlTab.toString());
    }

    public void inputWithdrawAmount(String amount) throws InterruptedException {
        Thread.sleep(1000);
        sendTextToElement(withdrawAmount, amount);
        log.info("Entering withdrawal amount " + withdrawAmount.toString());

    }

    public void clickOnWithdrawButton(){
        clickOnElement(withdrawButton);
        log.info("Clicking on withdraw button " + withdrawButton.toString());
    }

    public void verifyTransactionSuccessfulMessage(String message){
        verifyThatTextIsDisplayed(transactionSuccessText, message);
        log.info("Verifying transaction successful message " + transactionSuccessText.toString());
    }

    public void verifyLogoutTabVisible(){
        verifyThatElementIsDisplayed(logoutBtn);
        log.info("Verifying logout button is displayed " + logoutBtn.toString());
    }

}
