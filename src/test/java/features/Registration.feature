
Feature: Validate Registration Functionality

  Background: To Validate  Registration Functionality
    Given User Should Be On Application Home

  Scenario Outline: To validate Registration With Correct Credential
    When User Enter input  "<Email>" and "<Password>"
    And User Click On Registration
    Then User Should  Be on Dashboard

    Examples: 
      | Email             | Password         |
      | prasaddixit3@asd.com | Qwerty@124!??12e |
      | dixitprasad456@abc.com  | Qwerty@124!??12e |

  Scenario: To validate Registration functionality with registerd Email-Id
    When User Enter  Email and Password
    And User Click On Registration
    Then User Should  Get Registration error
