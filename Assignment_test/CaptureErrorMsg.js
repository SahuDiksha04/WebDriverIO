

describe('My Login application', async() => {
    it('should login with valid credentials', async () => {
    await browser.maximizeWindow()
    await browser.url("http://testingserver/domain/Online_Food_Ordering_System/index.php");
    let data = await browser.getTitle()
   console.log(data);
   await expect(browser).toHaveTitleContaining("Home");    //assert
   await browser.$(`//a[text()='Login']`).click();
   await  browser.$(`//input[@placeholder="Username"]`).setValue("abc");
   await  browser.$(`//input[@name="password"]`).setValue("123");
   await  browser.$(`//input[@name="submit"]`).click();

   await browser.$(`//span[.='Invalid Username or Password!']`).waitForDisplayed();
   let txt=await (await browser.$(`//span[.='Invalid Username or Password!']`)).getText();
   console.log(txt);
   expect(txt).toContain(`Invalid Username or Password!`);
    })
})

     