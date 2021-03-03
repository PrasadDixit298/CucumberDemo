Feature: Validate Shop Feature
@Test
  Scenario: Login To Application
    Given User open Application
    When User Login Application
    And Click On  Shop
    Then User Should be on shopping page

   @Test
  Scenario Outline: Valid Shoping functionality
   When User Select Book and click on Add to Basket
    And click On View Basket
    Then User Shoulb be Cart Page
    And User click On Proceed
    Then User Should be On Payment Page
    And User Enter Details "<Name>" and "<Surname>" and "<Phone>" and"<Address>" and "<City>" and"<Zip>"
    Then User select Payment and click on Pay

    Examples: 
      | Name   | Surname | Phone      | Address | City   | Zip    |
      | abcdef | rock    | 0132456789 | abc     | Nagpur | 440022 |
