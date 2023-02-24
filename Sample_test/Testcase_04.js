/*Enter admin url,enter username and password click on login button.
Click on restaurant.
Click on restaurant enter all the valid credentials, click on save.
Restaurant added successfully.*/

describe('Food ordering application', async()=>{
    let rm=Math.floor(Math.random()*(99-10)+10)
    let categoryName='chinese'+rm
    let reataurantName="YourOwnChoice"
      it('Login to the admin page', async()=>{
          await browser.maximizeWindow()
          await browser.url("http://testingserver/domain/Online_Food_Ordering_System/admin/");
          await  browser.$('//input[@name="username"]').setValue("admin");
          await  browser.$('//input[@name="password"]').setValue("codeastro");
          await  browser.$('//input[@value="Login"]').click();
          await browser.pause('5000');
  
          await  browser.$('span*=Restaurant').click();
          
          await browser.url("http://testingserver/domain/Online_Food_Ordering_System/admin/dashboard.php");
          expect(browser).toHaveTitleContaining("Admin Panel");
          await  (await browser.$('span*=Restaurant')).click();
          //await browser.pause('5000');
  
      })

      it('Add restaurant', async()=>{
        await  browser.$('//a[text()="Add Restaurant"]').click();
        expect(await browser.getTitle()).toHaveTitleContaining("Add Restaurant")
        await browser.$('//input[@name="res_name"]').setValue(reataurantName);
        await browser.$('//input[@name="email"]').setValue("yoc@gmail.com");
        await browser.$('//input[@name="phone"]').setValue("9586364589");
        await browser.$('//input[@name="url"]').setValue("www.yourownchoice.com");
        await browser.$('//select[@name="o_hr"]').selectByVisibleText("7am");
        await browser.$('//select[@name="c_hr"]').selectByVisibleText("10pm");
        await browser.$('//select[@name="o_days"]').selectByVisibleText("Mon-Sat");
        
        await browser.$('//input[@id="lastName"]').setValue("C:/Users/CHINMAY/Desktop/webdriverIO/Sample_test/restua.jpg");
        
        await browser.$('//select[@name="c_name"]').selectByVisibleText("Chinese");
        await browser.$('//textarea[@name="address"]').setValue("Btm stage 2 grand chaitanya,bangalore");

        await browser.$('//input[@value="Save"]').click();
        
       await (await browser.$(`//div[contains(.,'New')][ contains(@class,'alert')]`)).waitForDisplayed()
       var rs=await (await browser.$(`//div[contains(.,'New')][ contains(@class,'alert')]`)).getText()
       
         expect(rs).toContain('New')
})
 
it('Verify restuarant is created', async()=>{
  
    await (await browser.$('*=All Restaurant')).waitForClickable();
    await (await browser.$('*=All Restaurant')).click()
    let txt=await browser.$('//tbody/tr/td[.="YourOwnChoice"]').getText();
    console.log(txt);
    await expect(reataurantName).toContain(txt);

   // await browser.url("http://testingserver/domain/Online_Food_Ordering_System/admin/all_restaurant.php");
    //await expect(browser).toHaveTitleContaining("All Restaurants");
    })


})