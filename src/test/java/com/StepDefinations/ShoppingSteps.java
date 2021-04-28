package com.StepDefinations;

import static org.junit.Assert.assertEquals;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ShoppingSteps {
	static WebDriver driver;
	WebElement element;
	 @Given("^User open Application$")
	  public void user_open_Application() throws Throwable {
			System.setProperty("webdriver.chrome.driver", "Driver/chromedriver.exe" );
			  driver  = new ChromeDriver();
			  driver.manage().window().maximize();
			  driver.get("http://practice.automationtesting.in/my-account/");
			  assertEquals("My Account – Automation Practice Site",driver.getTitle());
	  }

	  @When("^User Login Application$")
	  public void user_Login_Application() throws Throwable {
		  driver.findElement(By.id("username")).sendKeys("dixit298456@abc.com");
		   driver.findElement(By.id("password")).sendKeys("Qwerty@124!??12e");
		   driver.findElement(By.xpath("//input[@type='submit']")).click();
		   assertEquals("My Account – Automation Practice Site",driver.getTitle());
	  }

	  @When("^Click On  Shop$")
	  public void click_On_Shop() throws Throwable {
	    driver.findElement(By.linkText("Shop")).click();
	  }

	  @Then("^User Should be on shopping page$")
	  public void user_Should_be_on_shopping_page() throws Throwable {
		  System.out.println(driver.getTitle());
		  assertEquals("Products – Automation Practice Site",driver.getTitle());
	  }

	  @When("^User Select Book and click on Add to Basket$")
	  public void user_Select_Book_and_click_on_Add_to_Basket() throws Throwable {
	     driver.findElement(By.xpath("//a[@href='/shop/?add-to-cart=160']")).click();
	     }

	  @When("^click On View Basket$")
	  public void click_On_View_Basket() throws Throwable {
		//*  driver.findElement(By.xpath("//*[@id=\"wpmenucartli\"]/a")).click(); 
		//*  driver.findElement(By.className("wpmenucart-contents")).click();
		  Thread.sleep(5000);
		  driver.findElement(By.xpath("//*[@id=\"wpmenucartli\"]")).click();
	  }

	  @Then("^User Shoulb be Cart Page$")
	  public void user_Shoulb_be_Cart_Page() throws Throwable {
	    // System.out.println(driver.getTitle());
	     assertEquals("Basket – Automation Practice Site",driver.getTitle());
	  }

	  @Then("^User click On Proceed$")
	  public void user_click_On_Proceed() throws Throwable {
	    driver.findElement(By.xpath("//a[@href='http://practice.automationtesting.in/checkout/']")).click();
	  }
	  
	  @Then("^User Should be On Payment Page$")
	  public void user_Should_be_On_Payment_Page() throws Throwable {
	  // System.out.println(driver.getTitle());
	   assertEquals("Checkout – Automation Practice Site",driver.getTitle());
	  }

	@Then("^User Enter Details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and\"([^\"]*)\" and \"([^\"]*)\" and\"([^\"]*)\"$")
	public void user_Enter_Details_and_and_and_and_and(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6) throws Throwable {
     element= driver.findElement(By.id("billing_first_name"));
     element.clear();
     element.sendKeys(arg1);
     element=driver.findElement(By.id("billing_last_name"));
     element.clear();
     element.sendKeys(arg2);
     element= driver.findElement(By.id("billing_phone"));
     element.clear();
     element.sendKeys(arg3);
     element=driver.findElement(By.id("billing_address_1"));
     element.clear();
     element.sendKeys(arg4);
     element=driver.findElement(By.id("billing_city"));
     element.clear();
     element.sendKeys(arg5);
     element= driver.findElement(By.id("billing_postcode"));
     element.clear();
     element.sendKeys(arg6);
      element= driver.findElement(By.id("select2-chosen-2"));
      element.click();
      driver.findElement(By.id("s2id_autogen2_search")).sendKeys("Maharashtra");
      driver.findElement(By.id("select2-results-2")).click();
      driver.findElement(By.xpath("//*[@id=\"payment_method_cod\"]")).click();
	}
	  @Then("^User select Payment and click on Pay$")
	  public void user_select_Payment_and_click_on_Pay() throws Throwable {
	 driver.findElement(By.id("place_order")).click();
	 System.out.println(driver.getTitle());
	
	  }
}
