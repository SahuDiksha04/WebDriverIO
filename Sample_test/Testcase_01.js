

//Enter the user url. Homepage should be displayed.
// Click on register.Enter username, firstname, lastname, email, phoneno, password, confirm password, delivery address and click on register.
//User registered successfully.


describe('My Login application', async() => {
   let rm=Math.floor(Math.random()*(99-10)+10)
   let userName="ajax1"+rm
   let email="ajax1@gmail.com"+rm
   let phoneNo="8676540558"+rm
   let password="abc123"
    
   it('should login with valid credentials', async () => {
    await browser.maximizeWindow()
    await browser.url("http://testingserver/domain/Online_Food_Ordering_System/index.php");

   await browser.$('//a[text()="Register"]').click();
   await expect(browser).toHaveTitleContaining("Registration");
   await browser.$('//input[@name="username"]').setValue(userName);
   await browser.$('//input[@name="firstname"]').setValue("ajax1");
   await browser.$('//input[@name="lastname"]').setValue("lpu");
   

   await browser.$('//input[@name="email"]').setValue(email)
   await browser.$('//input[@name="phone"]').setValue(phoneNo);
   await browser.$('//input[@name="password"]').setValue(password);
   await browser.$('//input[@name="cpassword"]').setValue(password)
   await browser.$('//textarea[@id="exampleTextarea"]').setValue("btm stage 2 bangalore");
   await browser.$('//input[@name="submit"]').click();
   await expect(browser).toHaveTitleContaining("Login");
   await browser.$('//input[@name="username"]').waitForDisplayed()
    })
   
   it('login to the page', async()=>{
   await  browser.$('//input[@name="username"]').setValue(userName);
   await  browser.$('//input[@name="password"]').setValue(password);
   await  browser.$('//input[@name="submit"]').click();
   await expect(browser).toHaveTitleContaining("Home");
   })

   
   it('logout from the application', async()=>{
   await browser.$('//a[text()="Logout"]').click();
   })

})


