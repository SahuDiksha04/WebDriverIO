
/*Enter user url.Enter valid username and password.
Choose restaurant , click on add to cart.
Compare the initial amount and final amonut.
Click on checkout.
Click on order now.
Order should be displayed.*/

describe('My Login application', async() => {
   it('Login to the application', async()=>{
   await browser.maximizeWindow();
   await browser.url("http://testingserver/domain/Online_Food_Ordering_System/index.php");
   let data = await browser.getTitle()
   console.log(data);
   await expect(browser).toHaveTitleContaining("Home");    //assert
   await browser.$(`//a[text()='Login']`).click();
   await  browser.$(`//input[@placeholder="Username"]`).setValue("abcd xyz");
   await  browser.$(`//input[@name="password"]`).setValue("123456");
   await  browser.$(`//input[@name="submit"]`).click();
   await browser.pause('5000');
  })

   it('Choose restaurant', async()=>{
   await browser.$('//a[.="Restaurants "]').click();
   //expect(browser).toHaveTitleContaining("Restaurants");
   await browser.$('//a[text()="North Street Tavern"]').click();
   expect(browser).toHaveTitleContaining("Dishes");
   await browser.$('//a[contains(text(),"Yorkshire Lamb Patties")]/../../../../..//input[@value="Add To Cart"]').click();
   await browser.$('//h3/strong').waitForDisplayed();
   })
   
   it('Compare the amount',async()=>{
   let txt=await  browser.$('//h3/strong').getText();
   let iamt=txt.split('');
   let ivalue=(Number(iamt[1]));
   await browser.$('//a[contains(text(),"Lobster Thermidor")]/../../../../..//input[@value="Add To Cart"]').click();
   await  browser.$('//h3/strong').waitForDisplayed();
   let txt1=await browser.$('//h3/strong').getText();
   let famt=txt1.split('');
   let fvalue=(Number(famt[1]));
   expect(fvalue).toBeGreaterThan(ivalue);
   })
   
   it('Checkout', async()=>{
   await browser.$(`//a[text()='Checkout']`).click();
   expect(browser).toHaveTitleContaining("Login");
   await browser.$(`//input[@value='Order Now']`).click();
   browser.acceptAlert();
   browser.acceptAlert();
   await browser.pause('5000');
   })
})
