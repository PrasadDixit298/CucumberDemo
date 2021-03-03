package com.TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		 plugin = { "pretty",
	        "html:target/cucumber","json:target/cucumber.json"},
 features = "src/test/java/features",
		 dryRun= false,
 glue={"com.StepDefinations"})
	
public class LoginRunner {

}
