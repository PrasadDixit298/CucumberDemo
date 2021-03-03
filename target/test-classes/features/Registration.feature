Feature: Validate Registration Functionality

  Background: To Validate  Registration Functionality
    Given User Should Be On Application Home

  Scenario Outline: To validate Registration With Correct Credential
    When User Enter input  "<Email>" and "<Password>"
    And User Click On Registration
    Then User Should  Be on Dashboard

    Examples: 
      | Email                        | Password         |
      | qwerty123455556@asd.com      | Qwerty@124!??12e |
      | jkAbcdef112212223456@abc.com | Qwerty@124!??12e |
