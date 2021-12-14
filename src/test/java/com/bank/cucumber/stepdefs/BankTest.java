package com.bank.cucumber.stepdefs;

import com.bank.pages.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BankTest {

    @When("^I click on 'Bank Manager Login' tab$")
    public void iClickOnBankManagerLoginTab() {
        new HomePage().clickOnBankManagerLogin();
    }

    @And("^I click on 'Add Customer' tab$")
    public void iClickOnAddCustomerTab() {
        new BankManagerLoginPage().clickOnAddCustomerTab();
    }

    @And("^I enter 'First Name' in first name field$")
    public void iEnterFirstNameInFirstNameField() {
        new AddCustomerPage().inputFirstName("Harry");
    }

    @And("^I enter 'Last Name' in last name field$")
    public void iEnterLastNameInLastNameField() {
        new AddCustomerPage().inputLastName("Potter");
    }

    @And("^I enter 'Post Code' in post code field$")
    public void iEnterPostCodeInPostCodeField() {
        new AddCustomerPage().inputPostcode("364001");
    }

    @And("^I click on 'Add Custmer' button$")
    public void iClickOnAddCustmerButton() throws InterruptedException {
        new AddCustomerPage().clickOnAddCustomerButton();
    }

    @Then("^I click on 'ok' button on popup$")
    public void iClickOnOkButtonOnPopup() {
        new AddCustomerPage().acceptPopUpMessage();
    }


    @And("^I click on 'Open Account' tab$")
    public void iClickOnOpenAccountTab() throws InterruptedException {
        new BankManagerLoginPage().clickOnOpenAccountTab();
    }

    @And("^I select customer name from 'Customer' dropdown$")
    public void iSelectCustomerNameFromCustomerDropdown() throws InterruptedException {
        new OpenAccountPage().selectCustomerName("Harry Potter");
    }

    @And("^I select 'Currency' from currency dropdown$")
    public void iSelectCurrencyFromCurrencyDropdown() {
        new OpenAccountPage().selectCurrency("Pound");
    }

    @And("^I click on 'Process' button$")
    public void iClickOnProcessButton() {
        new OpenAccountPage().clickOnProcessButton();
    }

    @And("^I verify 'Account created successfully' message$")
    public void iVerifyAccountCreatedSuccessfullyMessage() {

    }

    @When("^I click on 'Customer Login' button$")
    public void iClickOnCustomerLoginButton() {
        new HomePage().clickOnCustomerLoginButton();
    }

    @And("^I select 'Customer Name' from dropdown$")
    public void iSelectCustomerNameFromDropdown() {
        new CustomersPage().selectCustomerName("Harry Potter");
    }

    @And("^I click on 'Login' button$")
    public void iClickOnLoginButton() {
        new CustomerLoginPage().clickOnLoginButton();
    }

    @And("^I verify 'Logout' tab is visible$")
    public void iVerifyLogoutTabIsVisible() {
        new AccountPage().verifyLogoutTabVisible();
    }

    @And("^I click on 'Logout' button$")
    public void iClickOnLogoutButton() {
        new AccountPage().clickOnLogoutButton();
    }

    @Then("^I verify 'Your Name' is displayed$")
    public void iVerifyYourNameIsDisplayed() {
        new AccountPage().verifyYourNameTextVisible("Your Name");
    }

    @And("^I click on 'Deposit' tab$")
    public void iClickOnDepositTab() {
        new AccountPage().clickOnDepositTab();
    }

    @And("^I enter 'Deposit Amount' in Amount to be deposited field$")
    public void iEnterDepositAmountInAmountToBeDepositedField() {
        new AccountPage().inputDepositAmount("100");
    }

    @And("^I click on 'Deposit' button$")
    public void iClickOnDepositButton() {
        new AccountPage().clickOnSubmitButton();
    }

    @Then("^I can see deposit successful message$")
    public void iCanSeeDepositSuccessfulMessage() {
        new AccountPage().verifyDepositSuccessfulMessage("Deposit Successful");
    }

    @And("^I click on 'Withdrawal' tab$")
    public void iClickOnWithdrawalTab() {
        new AccountPage().clickOnWithdrawlTab();
    }

    @And("^I enter withdrawal amount$")
    public void iEnterWithdrawalAmount() throws InterruptedException {
        new AccountPage().inputWithdrawAmount("50");
    }

    @And("^I click on withdrawal button$")
    public void iClickOnWithdrawalButton() {
        new AccountPage().clickOnWithdrawButton();
    }

    @Then("^I verify transaction successful message$")
    public void iVerifyTransactionSuccessfulMessage() {
        new AccountPage().verifyTransactionSuccessfulMessage("Transaction successful");
    }
}
