$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Shop.feature");
formatter.feature({
  "line": 2,
  "name": "Validate Shop Feature",
  "description": "",
  "id": "validate-shop-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test1"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Valid Shoping functionality",
  "description": "",
  "id": "validate-shop-feature;valid-shoping-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "User Select Book and click on Add to Basket",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "click On View Basket",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User Shoulb be Cart Page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click On Proceed",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Should be On Payment Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User Enter Details \"\u003cName\u003e\" and \"\u003cSurname\u003e\" and \"\u003cPhone\u003e\" and\"\u003cAddress\u003e\" and \"\u003cCity\u003e\" and\"\u003cZip\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User select Payment and click on Pay",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "validate-shop-feature;valid-shoping-functionality;",
  "rows": [
    {
      "cells": [
        "Name",
        "Surname",
        "Phone",
        "Address",
        "City",
        "Zip"
      ],
      "line": 20,
      "id": "validate-shop-feature;valid-shoping-functionality;;1"
    },
    {
      "cells": [
        "pratik",
        "zambre",
        "0132456789",
        "abc",
        "Nagpur",
        "440022"
      ],
      "line": 21,
      "id": "validate-shop-feature;valid-shoping-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "Login To Application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User open Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Login Application",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click On  Shop",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Should be on shopping page",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingSteps.user_open_Application()"
});
formatter.result({
  "duration": 33401628100,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.user_Login_Application()"
});
formatter.result({
  "duration": 6030456800,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.click_On_Shop()"
});
formatter.result({
  "duration": 7841733700,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.user_Should_be_on_shopping_page()"
});
formatter.result({
  "duration": 215767700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Valid Shoping functionality",
  "description": "",
  "id": "validate-shop-feature;valid-shoping-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User Select Book and click on Add to Basket",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "click On View Basket",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User Shoulb be Cart Page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click On Proceed",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Should be On Payment Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User Enter Details \"pratik\" and \"zambre\" and \"0132456789\" and\"abc\" and \"Nagpur\" and\"440022\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User select Payment and click on Pay",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingSteps.user_Select_Book_and_click_on_Add_to_Basket()"
});
formatter.result({
  "duration": 734847400,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.click_On_View_Basket()"
});
formatter.result({
  "duration": 7990713500,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.user_Shoulb_be_Cart_Page()"
});
formatter.result({
  "duration": 11637900,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.user_click_On_Proceed()"
});
formatter.result({
  "duration": 2604070300,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.user_Should_be_On_Payment_Page()"
});
formatter.result({
  "duration": 11696600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pratik",
      "offset": 20
    },
    {
      "val": "zambre",
      "offset": 33
    },
    {
      "val": "0132456789",
      "offset": 46
    },
    {
      "val": "abc",
      "offset": 62
    },
    {
      "val": "Nagpur",
      "offset": 72
    },
    {
      "val": "440022",
      "offset": 84
    }
  ],
  "location": "ShoppingSteps.user_Enter_Details_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2170847200,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.user_select_Payment_and_click_on_Pay()"
});
formatter.result({
  "duration": 199403300,
  "status": "passed"
});
});