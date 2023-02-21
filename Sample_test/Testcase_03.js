

describe('Food ordering application', async()=>{
    it('Add restaurant', async()=>{
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Online_Food_Ordering_System/admin/");
        await  browser.$('//input[@name="username"]').setValue("admin");
        await  browser.$('//input[@name="password"]').setValue("codeastro");
        await  browser.$('//input[@value="Login"]').click();
        await browser.pause('5000');

        await  browser.$('//span[.="Restaurant"]').click();
        await browser.pause('5000');

        await  browser.$('//a[.="Add Category"]').click();
       (await browser.$('//input[@name="c_nam"]')).setValue("North Indian");
        await  browser.$('//input[@value="Save"]').click();


        await  browser.$('//a[text()="Add Restaurant"]').click();
        (await browser.$('//input[@name="res_name"]')).setValue("YourOwnChoice");
        (await browser.$('//input[@name="email"]')).setValue("yoc@gmail.com");
        (await browser.$('//input[@name="phone"]')).setValue("9586364589");
        (await browser.$('//input[@name="url"]')).setValue("www.yourownchoice.com");
        (await browser.$('//select[@name="o_hr"]')).selectByVisibleText("7am");
        (await browser.$('//select[@name="c_hr"]')).selectByVisibleText("10pm");
        (await browser.$('//select[@name="o_days"]')).selectByVisibleText("Mon-Sat");
        (await browser.$('//input[@id="lastName"]')).setValue("C:\Users\CHINMAY\Desktop\restua.jpg");
        (await browser.$('//select[@name="c_name"]')).selectByVisibleText("Chinese");
        (await browser.$('//textarea[@name="address"]')).setValue("Btm stage 2 grand chaitanya,bangalore");
        (await browser.$('//input[@value="Save"]')).click();

        await browser.pause('5000')
        


















    })



















}





















)