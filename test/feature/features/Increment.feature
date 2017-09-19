Feature: Increment Feature
  To verify whether the increment feature is working or not

  Scenario: Clicking Increment only one time
    Given I open the home page
    And the Value has 1
    Then I click the "Increment" button
    Then the value becomes 2