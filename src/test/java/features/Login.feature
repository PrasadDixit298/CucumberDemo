Feature: Validate Login Functionality

  Background: Validate Login Functionality with Credential
    Given User Should Be On Home Page

  Scenario Outline: To validate Login With Correct Credential
    When User Enter With Correct Credential "<Username>" and "<Password>"
    And User Click On Login Button
    Then User Should Navigate to next Page

    Examples: 
      | Username           | Password         |
      | qwerty@asd.com     | Qwerty@124!??12e |
      | xyz123456@abc.com  | Qwerty@124!??12e |
      | qwerty1234@asd.com | Qwerty@124!??12e |

  Scenario Outline: To validate Login With Incorrect Credential
    When User Login With invalid  "<Username>" and "<Password>"
    Then User Should Get Login Error

    Examples: 
      | Username        | Password           |
      | qwert1y@asd.com | Qwerty@124!??12e   |
      | qwerty@asd.com  | Qwerty@124!??12eff |
      |                 | Qwerty@124!??12e   |
      |                 |                    |
