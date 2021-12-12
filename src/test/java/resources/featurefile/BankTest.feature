Feature: Bank Test

  Background: I am on homepage

  @Smoke @Regression
  Scenario: Verify bank manager should add customer successfully
    When  I click on 'Bank Manager Login' tab
    And   I click on 'Add Customer' tab
    And   I enter 'First Name' in first name field
    And   I enter 'Last Name' in last name field
    And   I enter 'Post Code' in post code field
    And   I click on 'Add Custmer' button
    Then  I click on 'ok' button on popup


  @Sanity @Regression
  Scenario: Verify bank manager should open account successfully
    When  I click on 'Bank Manager Login' tab
    And   I click on 'Open Account' tab
    And   I select customer name from 'Customer' dropdown
    And   I select 'Currency' from currency dropdown
    And   I click on 'Process' button
    And   I verify 'Account created successfully' message
    Then  I click on 'ok' button on popup


  @Regression
  Scenario: Verify customer should login and logout successfully
    When  I click on 'Customer Login' button
    And   I select 'Customer Name' from dropdown
    And   I click on 'Login' button
    And   I verify 'Logout' tab is visible
    And   I click on 'Logout' button
    Then  I verify 'Your Name' is displayed

  @Regression
  Scenario: Verify customer should deposit money successfully
    When  I click on 'Customer Login' button
    And   I select 'Customer Name' from dropdown
    And   I click on 'Login' button
    And   I click on 'Deposit' tab
    And   I enter 'Deposit Amount' in Amount to be deposited field
    And   I click on 'Deposit' button
    Then  I can see deposit successful message

  @Regression
  Scenario: Verify customer should withdraw money successfully
    When  I click on 'Customer Login' button
    And   I select 'Customer Name' from dropdown
    And   I click on 'Login' button
    And   I click on 'Withdrawal' tab
    And   I enter withdrawal amount
    And   I click on withdrawal button
    Then  I verify transaction successful message




