package com.TestRunner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		tags= {"@Test1"},
		 plugin = { "pretty","com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-extent-reports/cucumber-report.html","html:target/cucumber-reports/cucumber.html",
	                "json:target/cucumber-reports/cucumber.json"},
 features = "src/test/java/features",
		 dryRun= false,
		 monochrome = true,
 glue={"com.StepDefinations"})
	
public class LoginRunner {
	
}
