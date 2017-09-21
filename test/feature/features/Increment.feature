Feature: Increment Feature
  To verify whether the increment feature is working or not

  Scenario: Clicking Increment only one time
    Given I click the "Increment" button
    Then the value becomes 2

  Scenario: Clicking Increment twice
    Given I click the "Increment" button
    Then I click the "Increment" button
    Then the value becomes 4

  Scenario: Clicking Increment only thrice
    Given I click the "Increment" button
    Then I click the "Increment" button
    Then I click the "Increment" button
    Then the value becomes 7