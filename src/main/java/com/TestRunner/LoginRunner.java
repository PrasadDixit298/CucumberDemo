package com.TestRunner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		tags= {"@Test"},
		 plugin = { "pretty","com.cucumber.listener.ExtentCucumberFormatter:target/cucumber/report.html","json:target/cucumber.json","html:target/cucumber"},
 features = "src/test/java/features",
		 dryRun= false,
		 monochrome = true,
 glue={"com.StepDefinations"})
	
public class LoginRunner {
	
}
