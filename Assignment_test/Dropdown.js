
describe('Navigate to the application',async()=>{
    it('MouseHover',async()=>{
        browser.maximizeWindow()
        await browser.url(`http://testingserver/domain/Online_Banking_System/`);
        await browser.$(`//li[text()='Open Account']`).click();
        let dd=await browser.$(`//select[@name="gender"]`)
        await dd.selectByVisibleText("Female")

    })
})
        