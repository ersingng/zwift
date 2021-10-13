Feature: QA Automation Engineer Technical Assessment 
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system

  Scenario: Home Page test 
    Given I navigate to home page
    And  I accept cookies
    #When Validate the page loads
    Then I validate content of my choice is present

Scenario: Events Page
    Given I navigate to home page
    And  I accept cookies
    When I navigate to events page
    #And Validate the page loads.
    And I select sports, intensities and start times fields and apply the filter
    Then I validate events have changed