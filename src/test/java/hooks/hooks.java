package hooks;

import java.io.File;
import java.io.IOException;

import org.testng.annotations.Test;

import jxl.Cell;
import jxl.Sheet; 
import jxl.Workbook;
import jxl.read.biff.BiffException;
import cucumber.api.java.Before;

public class hooks {
	//@Before
	@Test
	public void exceldata()  throws BiffException, IOException {
		 File file = new File("d:\\CucumberDemo\\Login.xls");
	        Workbook workbook = Workbook.getWorkbook(file);
	        Sheet sheet = workbook.getSheet(0); // Zero is a Sheet Number. 
	        Cell cell = sheet.getCell(0, 0); // Column Row Index 
	        System.out.println(cell.getContents());
	}

}
