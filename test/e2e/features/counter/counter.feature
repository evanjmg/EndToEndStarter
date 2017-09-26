
Feature: Counter
  Scenario: Button should exist
    Given I am on the homepage
    Then There should be an element called "button"
  Scenario: Button should increment
    Given Click element with css, "button"
    Then I should see the message: "1"
