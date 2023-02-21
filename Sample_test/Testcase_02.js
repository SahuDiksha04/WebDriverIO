

describe('My Login application', async() => {
    it('should login with valid credentials', async () => {
    await browser.url("http://testingserver/domain/Online_Food_Ordering_System/index.php");

   await $('//a[text()="Register"]').click();
   await $('//input[@name="username"]').setValue("ajax5");
   await $('//input[@name="firstname"]').setValue("ajax5");
   await $('//input[@name="lastname"]').setValue("lpu");

   await $('//input[@name="email"]').setValue("ajax5@gmail.com")
   await $('//input[@name="phone"]').setValue("9575440558");
   await $('//input[@name="password"]').setValue("1234567");
   await $('//input[@name="cpassword"]').setValue("1234567")
   await $('//textarea[@id="exampleTextarea"]').setValue("btm stage 2 bangalore");
   await (await $('//input[@name="submit"]')).click();
   
   await browser.pause('5000')

   //login
   await  $('//input[@name="username"]').setValue("ajax5");
   await  $('//input[@name="password"]').setValue("1234567");
   await  $('//input[@name="submit"]').click();
   await browser.pause('5000');
   await expect(browser).toHaveTitleContaining("Login")

   //choose restaurant
   await ('//a[.="Restaurants "]').click();
   


    })
})
