Feature: QA Automation Engineer Technical Assessment 
  In Stay Up to Speed

  Scenario: Home Page test 
    Given I navigate to home page
    And  I accept cookies
    When I validate the page loads
    Then I validate content of my choice is present

Scenario: Events Page
    Given I navigate to home page
    And  I accept cookies
    When I navigate to events page
    And I validate the page loads
    And I select sports, intensities and start times fields and apply the filter
    Then I validate events have changed