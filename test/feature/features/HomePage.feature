Feature: Home Page Feature
  To establish that the website has home page

  Scenario: Verify default values in the home page
    Given I open the home page
    And the title is "React Boilerplate"
    Then the Value has 1
    And there is an increment button
    And there is an decrement button