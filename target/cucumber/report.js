$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Validate Login Functionality",
  "description": "",
  "id": "validate-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "To validate Login With Correct Credential",
  "description": "",
  "id": "validate-login-functionality;to-validate-login-with-correct-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User Enter With Correct Credential \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Click On Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Should Navigate to next Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "validate-login-functionality;to-validate-login-with-correct-credential;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 12,
      "id": "validate-login-functionality;to-validate-login-with-correct-credential;;1"
    },
    {
      "cells": [
        "qwerty@asd.com",
        "Qwerty@124!??12e"
      ],
      "line": 13,
      "id": "validate-login-functionality;to-validate-login-with-correct-credential;;2"
    },
    {
      "cells": [
        "xyz123456@abc.com",
        "Qwerty@124!??12e"
      ],
      "line": 14,
      "id": "validate-login-functionality;to-validate-login-with-correct-credential;;3"
    },
    {
      "cells": [
        "qwerty1234@asd.com",
        "Qwerty@124!??12e"
      ],
      "line": 15,
      "id": "validate-login-functionality;to-validate-login-with-correct-credential;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Validate Login Functionality with Credential",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Should Be On Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_Should_Be_On_Home_Page()"
});
formatter.result({
  "duration": 20775472600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "To validate Login With Correct Credential",
  "description": "",
  "id": "validate-login-functionality;to-validate-login-with-correct-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User Enter With Correct Credential \"qwerty@asd.com\" and \"Qwerty@124!??12e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Click On Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Should Navigate to next Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty@asd.com",
      "offset": 36
    },
    {
      "val": "Qwerty@124!??12e",
      "offset": 57
    }
  ],
  "location": "LoginSteps.user_Enter_With_Correct_Credential_and(String,String)"
});
formatter.result({
  "duration": 2571009900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Click_On_Login_Button()"
});
formatter.result({
  "duration": 7215473000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Should_Navigate_to_next_Page()"
});
formatter.result({
  "duration": 315573200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Validate Login Functionality with Credential",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Should Be On Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_Should_Be_On_Home_Page()"
});
formatter.result({
  "duration": 15756857500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "To validate Login With Correct Credential",
  "description": "",
  "id": "validate-login-functionality;to-validate-login-with-correct-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User Enter With Correct Credential \"xyz123456@abc.com\" and \"Qwerty@124!??12e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Click On Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Should Navigate to next Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123456@abc.com",
      "offset": 36
    },
    {
      "val": "Qwerty@124!??12e",
      "offset": 60
    }
  ],
  "location": "LoginSteps.user_Enter_With_Correct_Credential_and(String,String)"
});
formatter.result({
  "duration": 2785763700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Click_On_Login_Button()"
});
formatter.result({
  "duration": 8287181300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Should_Navigate_to_next_Page()"
});
formatter.result({
  "duration": 204717000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Validate Login Functionality with Credential",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Should Be On Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_Should_Be_On_Home_Page()"
});
formatter.result({
  "duration": 17145677400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "To validate Login With Correct Credential",
  "description": "",
  "id": "validate-login-functionality;to-validate-login-with-correct-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User Enter With Correct Credential \"qwerty1234@asd.com\" and \"Qwerty@124!??12e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Click On Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Should Navigate to next Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty1234@asd.com",
      "offset": 36
    },
    {
      "val": "Qwerty@124!??12e",
      "offset": 61
    }
  ],
  "location": "LoginSteps.user_Enter_With_Correct_Credential_and(String,String)"
});
formatter.result({
  "duration": 2848480900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Click_On_Login_Button()"
});
formatter.result({
  "duration": 10534568600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Should_Navigate_to_next_Page()"
});
formatter.result({
  "duration": 179669000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "To validate Login With Incorrect Credential",
  "description": "",
  "id": "validate-login-functionality;to-validate-login-with-incorrect-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User Login With invalid  \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User Should Get Login Error",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "validate-login-functionality;to-validate-login-with-incorrect-credential;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 22,
      "id": "validate-login-functionality;to-validate-login-with-incorrect-credential;;1"
    },
    {
      "cells": [
        "qwert1y@asd.com",
        "Qwerty@124!??12e"
      ],
      "line": 23,
      "id": "validate-login-functionality;to-validate-login-with-incorrect-credential;;2"
    },
    {
      "cells": [
        "qwerty@asd.com",
        "Qwerty@124!??12eff"
      ],
      "line": 24,
      "id": "validate-login-functionality;to-validate-login-with-incorrect-credential;;3"
    },
    {
      "cells": [
        "",
        "Qwerty@124!??12e"
      ],
      "line": 25,
      "id": "validate-login-functionality;to-validate-login-with-incorrect-credential;;4"
    },
    {
      "cells": [
        "",
        ""
      ],
      "line": 26,
      "id": "validate-login-functionality;to-validate-login-with-incorrect-credential;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Validate Login Functionality with Credential",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Should Be On Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_Should_Be_On_Home_Page()"
});
formatter.result({
  "duration": 21610845300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "To validate Login With Incorrect Credential",
  "description": "",
  "id": "validate-login-functionality;to-validate-login-with-incorrect-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User Login With invalid  \"qwert1y@asd.com\" and \"Qwerty@124!??12e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User Should Get Login Error",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "qwert1y@asd.com",
      "offset": 26
    },
    {
      "val": "Qwerty@124!??12e",
      "offset": 48
    }
  ],
  "location": "LoginSteps.user_Login_With_invalid_and(String,String)"
});
formatter.result({
  "duration": 10120007400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Should_Get_Login_Error()"
});
formatter.result({
  "duration": 414246600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Validate Login Functionality with Credential",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Should Be On Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_Should_Be_On_Home_Page()"
});
formatter.result({
  "duration": 20510258600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "To validate Login With Incorrect Credential",
  "description": "",
  "id": "validate-login-functionality;to-validate-login-with-incorrect-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User Login With invalid  \"qwerty@asd.com\" and \"Qwerty@124!??12eff\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User Should Get Login Error",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty@asd.com",
      "offset": 26
    },
    {
      "val": "Qwerty@124!??12eff",
      "offset": 47
    }
  ],
  "location": "LoginSteps.user_Login_With_invalid_and(String,String)"
});
formatter.result({
  "duration": 15859220100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Should_Get_Login_Error()"
});
formatter.result({
  "duration": 1297526100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Validate Login Functionality with Credential",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Should Be On Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_Should_Be_On_Home_Page()"
});
formatter.result({
  "duration": 29645654200,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "To validate Login With Incorrect Credential",
  "description": "",
  "id": "validate-login-functionality;to-validate-login-with-incorrect-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User Login With invalid  \"\" and \"Qwerty@124!??12e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User Should Get Login Error",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    },
    {
      "val": "Qwerty@124!??12e",
      "offset": 33
    }
  ],
  "location": "LoginSteps.user_Login_With_invalid_and(String,String)"
});
formatter.result({
  "duration": 18054973400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Should_Get_Login_Error()"
});
formatter.result({
  "duration": 1112688700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Validate Login Functionality with Credential",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Should Be On Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_Should_Be_On_Home_Page()"
});
formatter.result({
  "duration": 40224705300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "To validate Login With Incorrect Credential",
  "description": "",
  "id": "validate-login-functionality;to-validate-login-with-incorrect-credential;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User Login With invalid  \"\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User Should Get Login Error",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    },
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "LoginSteps.user_Login_With_invalid_and(String,String)"
});
formatter.result({
  "duration": 16847328800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Should_Get_Login_Error()"
});
formatter.result({
  "duration": 344932700,
  "status": "passed"
});
formatter.uri("Registration.feature");
formatter.feature({
  "line": 1,
  "name": "Validate Registration Functionality",
  "description": "",
  "id": "validate-registration-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "To validate Registration With Correct Credential",
  "description": "",
  "id": "validate-registration-functionality;to-validate-registration-with-correct-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User Enter input  \"\u003cEmail\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Click On Registration",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Should  Be on Dashboard",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "validate-registration-functionality;to-validate-registration-with-correct-credential;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 12,
      "id": "validate-registration-functionality;to-validate-registration-with-correct-credential;;1"
    },
    {
      "cells": [
        "qwerty123455556@asd.com",
        "Qwerty@124!??12e"
      ],
      "line": 13,
      "id": "validate-registration-functionality;to-validate-registration-with-correct-credential;;2"
    },
    {
      "cells": [
        "jkAbcdef112212223456@abc.com",
        "Qwerty@124!??12e"
      ],
      "line": 14,
      "id": "validate-registration-functionality;to-validate-registration-with-correct-credential;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "To Validate  Registration Functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Should Be On Application Home",
  "keyword": "Given "
});
formatter.match({
  "location": "Registrationstep.user_Should_Be_On_Application_Home()"
});
formatter.result({
  "duration": 23728148800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "To validate Registration With Correct Credential",
  "description": "",
  "id": "validate-registration-functionality;to-validate-registration-with-correct-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User Enter input  \"qwerty123455556@asd.com\" and \"Qwerty@124!??12e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Click On Registration",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Should  Be on Dashboard",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty123455556@asd.com",
      "offset": 19
    },
    {
      "val": "Qwerty@124!??12e",
      "offset": 49
    }
  ],
  "location": "Registrationstep.user_Enter_input_and(String,String)"
});
formatter.result({
  "duration": 8647300400,
  "status": "passed"
});
formatter.match({
  "location": "Registrationstep.user_Click_On_Registration()"
});
formatter.result({
  "duration": 14331967800,
  "status": "passed"
});
formatter.match({
  "location": "Registrationstep.user_Should_Be_on_Dashboard()"
});
formatter.result({
  "duration": 38867300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "To Validate  Registration Functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Should Be On Application Home",
  "keyword": "Given "
});
formatter.match({
  "location": "Registrationstep.user_Should_Be_On_Application_Home()"
});
formatter.result({
  "duration": 26779125900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "To validate Registration With Correct Credential",
  "description": "",
  "id": "validate-registration-functionality;to-validate-registration-with-correct-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User Enter input  \"jkAbcdef112212223456@abc.com\" and \"Qwerty@124!??12e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Click On Registration",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Should  Be on Dashboard",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "jkAbcdef112212223456@abc.com",
      "offset": 19
    },
    {
      "val": "Qwerty@124!??12e",
      "offset": 54
    }
  ],
  "location": "Registrationstep.user_Enter_input_and(String,String)"
});
formatter.result({
  "duration": 29352136200,
  "status": "passed"
});
formatter.match({
  "location": "Registrationstep.user_Click_On_Registration()"
});
formatter.result({
  "duration": 17532842700,
  "status": "passed"
});
formatter.match({
  "location": "Registrationstep.user_Should_Be_on_Dashboard()"
});
formatter.result({
  "duration": 1117863500,
  "status": "passed"
});
formatter.uri("Shop.feature");
formatter.feature({
  "line": 1,
  "name": "Validate Shop Feature",
  "description": "",
  "id": "validate-shop-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login To Application",
  "description": "",
  "id": "validate-shop-feature;login-to-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User open Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Login Application",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click On  Shop",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Should be on shopping page",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingSteps.user_open_Application()"
});
formatter.result({
  "duration": 23017241800,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.user_Login_Application()"
});
formatter.result({
  "duration": 58010416800,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.click_On_Shop()"
});
formatter.result({
  "duration": 16250970300,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.user_Should_be_on_shopping_page()"
});
formatter.result({
  "duration": 355146800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Valid Shoping functionality",
  "description": "",
  "id": "validate-shop-feature;valid-shoping-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Test"
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
        "abcdef",
        "rock",
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
formatter.scenario({
  "line": 21,
  "name": "Valid Shoping functionality",
  "description": "",
  "id": "validate-shop-feature;valid-shoping-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Test"
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
  "name": "User Enter Details \"abcdef\" and \"rock\" and \"0132456789\" and\"abc\" and \"Nagpur\" and\"440022\"",
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
  "duration": 1481131400,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.click_On_View_Basket()"
});
formatter.result({
  "duration": 18414655700,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.user_Shoulb_be_Cart_Page()"
});
formatter.result({
  "duration": 318894400,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.user_click_On_Proceed()"
});
formatter.result({
  "duration": 7873308200,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.user_Should_be_On_Payment_Page()"
});
formatter.result({
  "duration": 96409700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdef",
      "offset": 20
    },
    {
      "val": "rock",
      "offset": 33
    },
    {
      "val": "0132456789",
      "offset": 44
    },
    {
      "val": "abc",
      "offset": 60
    },
    {
      "val": "Nagpur",
      "offset": 70
    },
    {
      "val": "440022",
      "offset": 82
    }
  ],
  "location": "ShoppingSteps.user_Enter_Details_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 7603081200,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d88.0.4324.190)\n  (Driver info: chromedriver\u003d87.0.4280.88 (89e2380a3e36c3464b5dd1302349b1382549290d-refs/branch-heads/4280@{#1761}),platform\u003dWindows NT 10.0.19042 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 253 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027IVL-LP80\u0027, ip: \u0027192.168.29.98\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:63381}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d87.0.4280.88 (89e2380a3e36c3464b5dd1302349b1382549290d-refs/branch-heads/4280@{#1761}), userDataDir\u003dC:\\Users\\PRASAD~1.DIX\\AppData\\Local\\Temp\\scoped_dir30496_827240805}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d88.0.4324.190, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 526a9c67ad0aede28085b70851cd68e9\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:273)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.StepDefinations.ShoppingSteps.user_Enter_Details_and_and_and_and_and(ShoppingSteps.java:85)\r\n\tat ✽.And User Enter Details \"abcdef\" and \"rock\" and \"0132456789\" and\"abc\" and \"Nagpur\" and\"440022\"(Shop.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShoppingSteps.user_select_Payment_and_click_on_Pay()"
});
formatter.result({
  "status": "skipped"
});
});