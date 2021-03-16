$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Validate Login Functionality",
  "description": "",
  "id": "validate-login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "To validate Login With Correct Credential",
  "description": "",
  "id": "validate-login-functionality;to-validate-login-with-correct-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User Enter With Correct Credential \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User Click On Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Should Navigate to next Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "validate-login-functionality;to-validate-login-with-correct-credential;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 13,
      "id": "validate-login-functionality;to-validate-login-with-correct-credential;;1"
    },
    {
      "cells": [
        "qwerty@asd.com",
        "Qwerty@124!??12e"
      ],
      "line": 14,
      "id": "validate-login-functionality;to-validate-login-with-correct-credential;;2"
    },
    {
      "cells": [
        "prasaddixit3@asd.com",
        "Qwerty@124!??12e"
      ],
      "line": 15,
      "id": "validate-login-functionality;to-validate-login-with-correct-credential;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "Validate Login Functionality with Credential",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User Should Be On Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_Should_Be_On_Home_Page()"
});
formatter.result({
  "duration": 5770178500,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 87\nCurrent browser version is 89.0.4389.90 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\n  (Driver info: chromedriver\u003d87.0.4280.88 (89e2380a3e36c3464b5dd1302349b1382549290d-refs/branch-heads/4280@{#1761}),platform\u003dWindows NT 10.0.19042 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.64 seconds\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027IVL-LP80\u0027, ip: \u0027192.168.29.98\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:242)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:128)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:170)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:159)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat com.StepDefinations.LoginSteps.user_Should_Be_On_Home_Page(LoginSteps.java:22)\r\n\tat ✽.Given User Should Be On Home Page(Login.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "To validate Login With Correct Credential",
  "description": "",
  "id": "validate-login-functionality;to-validate-login-with-correct-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User Enter With Correct Credential \"qwerty@asd.com\" and \"Qwerty@124!??12e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User Click On Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_Click_On_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_Should_Navigate_to_next_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "Validate Login Functionality with Credential",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User Should Be On Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_Should_Be_On_Home_Page()"
});
formatter.result({
  "duration": 4053458500,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 87\nCurrent browser version is 89.0.4389.90 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\n  (Driver info: chromedriver\u003d87.0.4280.88 (89e2380a3e36c3464b5dd1302349b1382549290d-refs/branch-heads/4280@{#1761}),platform\u003dWindows NT 10.0.19042 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.57 seconds\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027IVL-LP80\u0027, ip: \u0027192.168.29.98\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:242)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:128)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:170)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:159)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat com.StepDefinations.LoginSteps.user_Should_Be_On_Home_Page(LoginSteps.java:22)\r\n\tat ✽.Given User Should Be On Home Page(Login.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 15,
  "name": "To validate Login With Correct Credential",
  "description": "",
  "id": "validate-login-functionality;to-validate-login-with-correct-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User Enter With Correct Credential \"prasaddixit3@asd.com\" and \"Qwerty@124!??12e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User Click On Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Should Navigate to next Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "prasaddixit3@asd.com",
      "offset": 36
    },
    {
      "val": "Qwerty@124!??12e",
      "offset": 63
    }
  ],
  "location": "LoginSteps.user_Enter_With_Correct_Credential_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_Click_On_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_Should_Navigate_to_next_Page()"
});
formatter.result({
  "status": "skipped"
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
  "line": 4,
  "name": "Validate Login Functionality with Credential",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User Should Be On Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_Should_Be_On_Home_Page()"
});
formatter.result({
  "duration": 4151637800,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 87\nCurrent browser version is 89.0.4389.90 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\n  (Driver info: chromedriver\u003d87.0.4280.88 (89e2380a3e36c3464b5dd1302349b1382549290d-refs/branch-heads/4280@{#1761}),platform\u003dWindows NT 10.0.19042 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.67 seconds\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027IVL-LP80\u0027, ip: \u0027192.168.29.98\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:242)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:128)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:170)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:159)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat com.StepDefinations.LoginSteps.user_Should_Be_On_Home_Page(LoginSteps.java:22)\r\n\tat ✽.Given User Should Be On Home Page(Login.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 23,
  "name": "To validate Login With Incorrect Credential",
  "description": "",
  "id": "validate-login-functionality;to-validate-login-with-incorrect-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_Should_Get_Login_Error()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "Validate Login Functionality with Credential",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User Should Be On Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_Should_Be_On_Home_Page()"
});
formatter.result({
  "duration": 3743411100,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 87\nCurrent browser version is 89.0.4389.90 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\n  (Driver info: chromedriver\u003d87.0.4280.88 (89e2380a3e36c3464b5dd1302349b1382549290d-refs/branch-heads/4280@{#1761}),platform\u003dWindows NT 10.0.19042 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.39 seconds\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027IVL-LP80\u0027, ip: \u0027192.168.29.98\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:242)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:128)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:170)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:159)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat com.StepDefinations.LoginSteps.user_Should_Be_On_Home_Page(LoginSteps.java:22)\r\n\tat ✽.Given User Should Be On Home Page(Login.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 24,
  "name": "To validate Login With Incorrect Credential",
  "description": "",
  "id": "validate-login-functionality;to-validate-login-with-incorrect-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_Should_Get_Login_Error()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "Validate Login Functionality with Credential",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User Should Be On Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_Should_Be_On_Home_Page()"
});
formatter.result({
  "duration": 3603073100,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 87\nCurrent browser version is 89.0.4389.90 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\n  (Driver info: chromedriver\u003d87.0.4280.88 (89e2380a3e36c3464b5dd1302349b1382549290d-refs/branch-heads/4280@{#1761}),platform\u003dWindows NT 10.0.19042 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.06 seconds\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027IVL-LP80\u0027, ip: \u0027192.168.29.98\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:242)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:128)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:170)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:159)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat com.StepDefinations.LoginSteps.user_Should_Be_On_Home_Page(LoginSteps.java:22)\r\n\tat ✽.Given User Should Be On Home Page(Login.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 25,
  "name": "To validate Login With Incorrect Credential",
  "description": "",
  "id": "validate-login-functionality;to-validate-login-with-incorrect-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_Should_Get_Login_Error()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "Validate Login Functionality with Credential",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User Should Be On Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_Should_Be_On_Home_Page()"
});
formatter.result({
  "duration": 3943338200,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 87\nCurrent browser version is 89.0.4389.90 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\n  (Driver info: chromedriver\u003d87.0.4280.88 (89e2380a3e36c3464b5dd1302349b1382549290d-refs/branch-heads/4280@{#1761}),platform\u003dWindows NT 10.0.19042 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.59 seconds\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027IVL-LP80\u0027, ip: \u0027192.168.29.98\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:242)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:128)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:170)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:159)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat com.StepDefinations.LoginSteps.user_Should_Be_On_Home_Page(LoginSteps.java:22)\r\n\tat ✽.Given User Should Be On Home Page(Login.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 26,
  "name": "To validate Login With Incorrect Credential",
  "description": "",
  "id": "validate-login-functionality;to-validate-login-with-incorrect-credential;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_Should_Get_Login_Error()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "Validate Login Functionality with Credential",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User Should Be On Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_Should_Be_On_Home_Page()"
});
formatter.result({
  "duration": 3448881300,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 87\nCurrent browser version is 89.0.4389.90 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\n  (Driver info: chromedriver\u003d87.0.4280.88 (89e2380a3e36c3464b5dd1302349b1382549290d-refs/branch-heads/4280@{#1761}),platform\u003dWindows NT 10.0.19042 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.04 seconds\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027IVL-LP80\u0027, ip: \u0027192.168.29.98\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:242)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:128)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:170)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:159)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat com.StepDefinations.LoginSteps.user_Should_Be_On_Home_Page(LoginSteps.java:22)\r\n\tat ✽.Given User Should Be On Home Page(Login.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 28,
  "name": "Validate Login Functionality By Pressing Enter",
  "description": "",
  "id": "validate-login-functionality;validate-login-functionality-by-pressing-enter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "User Enters Id",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User Enters Password",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User Press Enter",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User Should Navigate to next Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_Enters_Id()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_Enters_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_Press_Enter()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_Should_Navigate_to_next_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Shop.feature");
formatter.feature({
  "line": 2,
  "name": "Validate Shop Feature",
  "description": "",
  "id": "validate-shop-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Login To Application",
  "description": "",
  "id": "validate-shop-feature;login-to-application",
  "type": "scenario",
  "keyword": "Scenario"
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
  "duration": 3896611800,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 87\nCurrent browser version is 89.0.4389.90 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\n  (Driver info: chromedriver\u003d87.0.4280.88 (89e2380a3e36c3464b5dd1302349b1382549290d-refs/branch-heads/4280@{#1761}),platform\u003dWindows NT 10.0.19042 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.48 seconds\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027IVL-LP80\u0027, ip: \u0027192.168.29.98\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:242)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:128)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:170)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:159)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat com.StepDefinations.ShoppingSteps.user_open_Application(ShoppingSteps.java:19)\r\n\tat ✽.Given User open Application(Shop.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShoppingSteps.user_Login_Application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingSteps.click_On_Shop()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingSteps.user_Should_be_on_shopping_page()"
});
formatter.result({
  "status": "skipped"
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
      "line": 1,
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
  "duration": 7193100,
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.findElement(org.openqa.selenium.By)\" because \"com.StepDefinations.ShoppingSteps.driver\" is null\r\n\tat com.StepDefinations.ShoppingSteps.user_Select_Book_and_click_on_Add_to_Basket(ShoppingSteps.java:46)\r\n\tat ✽.When User Select Book and click on Add to Basket(Shop.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShoppingSteps.click_On_View_Basket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingSteps.user_Shoulb_be_Cart_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingSteps.user_click_On_Proceed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingSteps.user_Should_be_On_Payment_Page()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingSteps.user_select_Payment_and_click_on_Pay()"
});
formatter.result({
  "status": "skipped"
});
});