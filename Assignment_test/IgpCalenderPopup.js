
describe('Navigate to application',async()=>{
    it('order cake',async()=>{
       await browser.maximizeWindow();
       await browser.url(`https://www.igp.com/`);
       //let txt =await browser.getUrl();
       //expect(browser).toContain("Cakes");
       
       await browser.pause(5000);
       await browser.$(`(//span[.='Cakes'])[1]`).click();
       await browser.$(`//span[.='Truffle']`).click();
       await browser.$(`//p[.='Chocolate Delight Cake (Half Kg)']`).click();
       await browser.$(`//input[@placeholder="Pincode/Location"]`).setValue("560076");
      
       await browser.scroll(500,0)
      const da=await browser.$(`//span[contains(.,'Select Date')]`);
       await da.waitForDisplayed(5000);
       await da.click();
       await browser.pause('5000')
       await browser.$(`//a[text()="25"]`).click();
       await browser.pause('5000')
       await browser.$(`//select[@id='timepicker']`).selectByIndex("1");
       await browser.$(`//option[text()='Select Flavour']`).selectByVisibleText("Chocolate");
       await browser.$(`//span[.='ADD TO CART']`).click();
       await browser.$(`//span[.='CONTINUE WITHOUT ADDONS']`).click();
       await browser.$(`//a[.=' Proceed To Checkout']`).click();
       


      
    })
})