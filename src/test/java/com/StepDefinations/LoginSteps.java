package com.StepDefinations;

import static org.junit.Assert.assertEquals;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
	static WebDriver  driver;

	@Given("^User Should Be On Home Page$")
	public void user_Should_Be_On_Home_Page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "Driver/chromedriver.exe" );
	  driver  = new ChromeDriver();
	  driver.get("http://practice.automationtesting.in/my-account/");
	  assertEquals("My Account – Automation Practice Site",driver.getTitle());
	}
	@When("^User Enter With Correct Credential \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_Enter_With_Correct_Credential_and(String arg1, String arg2) throws Throwable {
		    driver.findElement(By.id("username")).sendKeys(arg1);
		   driver.findElement(By.id("password")).sendKeys(arg2);   
	}

	@When("^User Click On Login Button$")
	public void user_Click_On_Login_Button() throws Throwable {
		driver.findElement(By.xpath("//input[@type='submit']")).click(); 
	}

 @Then("^User Should Navigate to next Page$")
	public void user_Should_Navigate_to_next_Page() throws Throwable {
	 System.out.println(driver.getTitle());
		 assertEquals("My Account – Automation Practice Site",driver.getTitle());
	}
	@When("^User Login With invalid  \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_Login_With_invalid_and(String arg1, String arg2) throws Throwable {
		 driver.findElement(By.id("username")).sendKeys(arg1);
		   driver.findElement(By.id("password")).sendKeys(arg2);   
		   driver.findElement(By.xpath("//input[@type='submit']")).click();  
	}
	
	@Then("^User Should Get Login Error$")
	public void user_Should_Get_Login_Error() throws Throwable {
		WebElement error = driver.findElement(By.className("woocommerce-error"));
		String Expected =error.getText();
		assertEquals(Expected, error.getText());

	}


}
