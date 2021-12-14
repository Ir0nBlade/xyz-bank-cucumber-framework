$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BankTest.feature");
formatter.feature({
  "line": 1,
  "name": "Bank Test",
  "description": "",
  "id": "bank-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4475293200,
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
  "name": "I click on \u0027Deposit\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I enter \u0027Deposit Amount\u0027 in Amount to be deposited field",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click on \u0027Deposit\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click on \u0027Withdrawal\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I enter withdrawal amount",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click on withdrawal button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I verify transaction successful message",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTest.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 635670600,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iSelectCustomerNameFromDropdown()"
});
formatter.result({
  "duration": 323821200,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 34325000,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnDepositTab()"
});
formatter.result({
  "duration": 408833500,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iEnterDepositAmountInAmountToBeDepositedField()"
});
formatter.result({
  "duration": 356516300,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnDepositButton()"
});
formatter.result({
  "duration": 37581000,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnWithdrawalTab()"
});
formatter.result({
  "duration": 31349200,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iEnterWithdrawalAmount()"
});
formatter.result({
  "duration": 1048406100,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnWithdrawalButton()"
});
formatter.result({
  "duration": 32414700,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iVerifyTransactionSuccessfulMessage()"
});
formatter.result({
  "duration": 17101700,
  "status": "passed"
});
formatter.after({
  "duration": 590643100,
  "status": "passed"
});
});