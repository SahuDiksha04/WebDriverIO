/*Enter admin url.Enter valid username and password.
Click on add menu.Enter all the details.
Verify menu is added.*/

describe('Food ordering application', async()=>{
    let rm=Math.floor(Math.random()*(99-10)+10)
    let dishName='Noodles'+rm
    let restaurantName="YourOwnChoice"
    let price ="10"
      it('Login to the admin page', async()=>{
          await browser.maximizeWindow()
          await browser.url("http://testingserver/domain/Online_Food_Ordering_System/admin/");
          await  browser.$('//input[@name="username"]').setValue("admin");
          await  browser.$('//input[@name="password"]').setValue("codeastro");
          await  browser.$('//input[@value="Login"]').click();
          expect(browser.getTitle()).toHaveTitleContaining("Admin Panel");
          await browser.pause('5000');
     })

     it('Add menu', async()=>{
        await  browser.$('span*=Menu').click();
        await browser.$(`//a[.='Add Menu']`).click();
        expect(browser.getTitle()).toHaveTitleContaining("Add menu");
        await browser.$(`//input[@name="d_name"]`).setValue(dishName);
        await browser.$(`//input[@name="about"]`).setValue("fgg");
        await browser.$(`//input[@name="price"]`).setValue(price);
        await browser.$(`//input[@id="lastName"]`).setValue("C:/Users/CHINMAY/Desktop/webdriverIO/Sample_test/restua.jpg");
        await browser.$(`//select[@name="res_name"]`).selectByVisibleText(restaurantName);
        await browser.$(`//input[@name="submit"]`).click();
        expect(browser.getTitle()).toHaveTitleContaining("Add Menu");
        //let vl = "New Dish Added Successfully."
        let txt=await browser.$(`//div[@ class="alert alert-success alert-dismissible fade show"]`).getText();
        console.log(txt);
        await expect(txt).toContain('New Dish Added Successfully.');

    })

    it('Verify menu is created', async()=>{

        await browser.$(`//a[.='All Menues']`).click();
        let rs=await (await browser.$(`//td[text()='${dishName}']`)).isDisplayed();
      //console.log(text);
      expect(rs).toBe(true);
    })
    
 })










