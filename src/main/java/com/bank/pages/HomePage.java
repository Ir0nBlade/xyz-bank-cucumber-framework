package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//button[contains(text(),'Bank Manager Login')]")
    WebElement bankManagerLoginBtn;

    @FindBy(xpath = "//button[contains(text(),'Customer Login')]")
    WebElement customerLoginBtn;

    @FindBy(xpath = "//button[contains(text(),'Home')]")
    WebElement homeButton;


    public void clickOnBankManagerLogin() {
        log.info("Clicking on Bank Manager Login Button " + bankManagerLoginBtn.toString());
        clickOnElement(bankManagerLoginBtn);
    }

    public void clickOnCustomerLoginButton(){
        log.info("Clicking on Customer Login button  " + customerLoginBtn.toString());
        clickOnElement(customerLoginBtn);
    }

    public void clickOnHomeButton(){
        log.info("Clicking on Home button " + homeButton.toString());
        clickOnElement(homeButton);
    }

}
