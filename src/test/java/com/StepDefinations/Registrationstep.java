package com.StepDefinations;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Registrationstep {
	 WebDriver driver;
	@Given("^User Should Be On Application Home$")
	public void user_Should_Be_On_Application_Home() throws Throwable {
		  System.setProperty("webdriver.chrome.driver", "Driver/chromedriver.exe" );
		  driver  = new ChromeDriver();
		  driver.manage().window().maximize();
		  driver.get("http://practice.automationtesting.in/my-account/");
		  assertEquals("My Account – Automation Practice Site",driver.getTitle());
	}

	
	@When("^User Enter input  \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_Enter_input_and(String arg1, String arg2) throws Throwable {
	   driver.findElement(By.id("reg_email")).sendKeys(arg1);
	   driver.findElement(By.id("reg_password")).sendKeys(arg2);
	}

	@When("^User Click On Registration$")
	public void user_Click_On_Registration() throws Throwable {
		Thread.sleep(5000);
		Actions actions = new Actions(driver);
		actions.click().build().perform();
		driver.findElement(By.xpath("//*[@id=\"customer_login\"]/div[2]/form/p[3]/input[3]")).click(); 
	}
	@Then("^User Should  Be on Dashboard$")
	public void user_Should_Be_on_Dashboard() throws Throwable {
		 assertEquals("My Account – Automation Practice Site",driver.getTitle());	
		 driver.close();
		 }
	@When("^User Enter  Email and Password$")
	public void user_Enter_Email_and_Password() throws Throwable {
		driver.findElement(By.id("reg_email")).sendKeys("prasad123@asd.com");
		driver.findElement(By.id("reg_password")).sendKeys("Qwerty@124!??12e");
	}

	@Then("^User Should  Get Registration error$")
	public void user_Should_Get_Registration_error() throws Throwable {
		WebElement error = driver.findElement(By.className("woocommerce-error"));
		String Expected =error.getText();
		System.out.println(Expected);
		assertEquals(Expected, error.getText());
		driver.close();
	  
	}
}
