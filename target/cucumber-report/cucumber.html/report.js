$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BankTest.feature");
formatter.feature({
  "line": 1,
  "name": "Bank Test",
  "description": "",
  "id": "bank-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5656235700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "Verify bank manager should add customer successfully",
  "description": "",
  "id": "bank-test;verify-bank-manager-should-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I click on \u0027Bank Manager Login\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \u0027Add Customer\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \u0027First Name\u0027 in first name field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \u0027Last Name\u0027 in last name field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \u0027Post Code\u0027 in post code field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on \u0027Add Custmer\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on \u0027ok\u0027 button on popup",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTest.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 455658100,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 392436600,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iEnterFirstNameInFirstNameField()"
});
formatter.result({
  "duration": 386747700,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iEnterLastNameInLastNameField()"
});
formatter.result({
  "duration": 64776100,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iEnterPostCodeInPostCodeField()"
});
formatter.result({
  "duration": 96692500,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnAddCustmerButton()"
});
formatter.result({
  "duration": 1059590200,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnOkButtonOnPopup()"
});
formatter.result({
  "duration": 8903900,
  "status": "passed"
});
formatter.after({
  "duration": 585961000,
  "status": "passed"
});
formatter.before({
  "duration": 3738867500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 17,
  "name": "Verify bank manager should open account successfully",
  "description": "",
  "id": "bank-test;verify-bank-manager-should-open-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Sanity"
    },
    {
      "line": 16,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I click on \u0027Bank Manager Login\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on \u0027Open Account\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select customer name from \u0027Customer\u0027 dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select \u0027Currency\u0027 from currency dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on \u0027Process\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify \u0027Account created successfully\u0027 message",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on \u0027ok\u0027 button on popup",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTest.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 654410600,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 1059542500,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iSelectCustomerNameFromCustomerDropdown()"
});
formatter.result({
  "duration": 1092393700,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iSelectCurrencyFromCurrencyDropdown()"
});
formatter.result({
  "duration": 106004500,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnProcessButton()"
});
formatter.result({
  "duration": 71497900,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iVerifyAccountCreatedSuccessfullyMessage()"
});
formatter.result({
  "duration": 26500,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnOkButtonOnPopup()"
});
formatter.result({
  "duration": 9540400,
  "status": "passed"
});
formatter.after({
  "duration": 619806800,
  "status": "passed"
});
formatter.before({
  "duration": 3620836600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 28,
  "name": "Verify customer should login and logout successfully",
  "description": "",
  "id": "bank-test;verify-customer-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I click on \u0027Customer Login\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I select \u0027Customer Name\u0027 from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on \u0027Login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify \u0027Logout\u0027 tab is visible",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on \u0027Logout\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I verify \u0027Your Name\u0027 is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTest.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 587596400,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iSelectCustomerNameFromDropdown()"
});
formatter.result({
  "duration": 457372700,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 58611900,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iVerifyLogoutTabIsVisible()"
});
formatter.result({
  "duration": 79094100,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 278122900,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iVerifyYourNameIsDisplayed()"
});
formatter.result({
  "duration": 45327100,
  "status": "passed"
});
formatter.after({
  "duration": 628246400,
  "status": "passed"
});
formatter.before({
  "duration": 4307159300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 37,
  "name": "Verify customer should deposit money successfully",
  "description": "",
  "id": "bank-test;verify-customer-should-deposit-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I click on \u0027Customer Login\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I select \u0027Customer Name\u0027 from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on \u0027Login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on \u0027Deposit\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter \u0027Deposit Amount\u0027 in Amount to be deposited field",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on \u0027Deposit\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I can see deposit successful message",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTest.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 138202000,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iSelectCustomerNameFromDropdown()"
});
formatter.result({
  "duration": 415325200,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 64049600,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnDepositTab()"
});
formatter.result({
  "duration": 364469000,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iEnterDepositAmountInAmountToBeDepositedField()"
});
formatter.result({
  "duration": 379262800,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnDepositButton()"
});
formatter.result({
  "duration": 76406200,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iCanSeeDepositSuccessfulMessage()"
});
formatter.result({
  "duration": 50948400,
  "status": "passed"
});
formatter.after({
  "duration": 639529800,
  "status": "passed"
});
formatter.before({
  "duration": 3855860600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 47,
  "name": "Verify customer should withdraw money successfully",
  "description": "",
  "id": "bank-test;verify-customer-should-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "I click on \u0027Customer Login\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I select \u0027Customer Name\u0027 from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on \u0027Login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on \u0027Withdrawal\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I enter withdrawal amount",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click on withdrawal button",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I verify transaction successful message",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTest.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 565106100,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iSelectCustomerNameFromDropdown()"
});
formatter.result({
  "duration": 397659800,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 77059900,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnWithdrawalTab()"
});
formatter.result({
  "duration": 330379900,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iEnterWithdrawalAmount()"
});
formatter.result({
  "duration": 366579400,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnWithdrawalButton()"
});
formatter.result({
  "duration": 55999100,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iVerifyTransactionSuccessfulMessage()"
});
formatter.result({
  "duration": 20066235100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(),\u0027Transaction successful\u0027)]\"}\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027VIMAL\u0027, ip: \u002710.10.10.105\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [5ce262c995ade30511160149b3e51fef, findElement {using\u003dxpath, value\u003d//span[contains(text(),\u0027Transaction successful\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\itsvi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:65252}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:65252/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5ce262c995ade30511160149b3e51fef\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.getText(Unknown Source)\r\n\tat com.bank.utility.Utility.verifyThatTextIsDisplayed(Utility.java:331)\r\n\tat com.bank.pages.AccountPage.verifyTransactionSuccessfulMessage(AccountPage.java:95)\r\n\tat com.bank.cucumber.stepdefs.BankTest.iVerifyTransactionSuccessfulMessage(BankTest.java:138)\r\n\tat ✽.Then I verify transaction successful message(BankTest.feature:54)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1000486700,
  "status": "passed"
});
});