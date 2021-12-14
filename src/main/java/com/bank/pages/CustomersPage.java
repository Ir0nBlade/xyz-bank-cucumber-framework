package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CustomersPage extends Utility {

    private static final Logger log = LogManager.getLogger(CustomersPage.class.getName());

    public CustomersPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//select[@id='userSelect']")
    WebElement customerName;


    public void selectCustomerName(String name){
        selectByVisibleTextFromDropDown(customerName, name);
        log.info("Selecting Customer Name  " + customerName.toString());
    }
}
