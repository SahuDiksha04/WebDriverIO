

//Enter the user url. Homepage should be displayed.
// Click on register.Enter username, firstname, lastname, email, phoneno, password, confirm password, delivery address and click on register.
//User registered successfully.


describe('My Login application', async() => {
    it('should login with valid credentials', async () => {
    await browser.maximizeWindow()
    await browser.url("http://testingserver/domain/Online_Food_Ordering_System/index.php");

   await browser.$('//a[text()="Register"]').click();
   await browser.$('//input[@name="username"]').setValue("ajax1");
   await browser.$('//input[@name="firstname"]').setValue("ajax1");
   await browser.$('//input[@name="lastname"]').setValue("lpu");
   

   await browser.$('//input[@name="email"]').setValue("ajax1@gmail.com")
   await browser.$('//input[@name="phone"]').setValue("8676540558");
   await browser.$('//input[@name="password"]').setValue("2245678");
   await browser.$('//input[@name="cpassword"]').setValue("2245678")
   await browser.$('//textarea[@id="exampleTextarea"]').setValue("btm stage 2 bangalore");
   await browser.$('//input[@name="submit"]').click();
   await browser.pause('2000');
    })

  
   //It is to freeze the page
   //await browser.debug()

   //login
   it('login to the page', async()=>{
   await  browser.$('//input[@name="username"]').setValue("ajax1");
   await  browser.$('//input[@name="password"]').setValue("2245678");
   await  browser.$('//input[@name="submit"]').click();
   //await browser.debug();
    let data = await browser.getTitle()
   //console.log(data);
      await expect(browser).toHaveTitleContaining("Login")
   })

   //logout
   it('logout from the application', async()=>{
   await browser.$('//a[text()="Logout"]').click();
   await browser.pause('5000');
   })

})


