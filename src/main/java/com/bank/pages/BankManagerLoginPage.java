package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BankManagerLoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(BankManagerLoginPage.class.getName());

    public BankManagerLoginPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Add Customer']")
    WebElement addCustomerTab;

    @CacheLookup
    @FindBy(xpath = "//button[@ng-click='openAccount()']")
    WebElement openAccount;

    public void clickOnAddCustomerTab(){
        log.info("Clicking on Add Customer tab  " + addCustomerTab.toString());
        clickOnElement(addCustomerTab);
    }

    public void clickOnOpenAccountTab() throws InterruptedException {
        Thread.sleep(1000);
        log.info("Clicking on Open Account tab  " + openAccount.toString());
        clickOnElement(openAccount);
    }

}
