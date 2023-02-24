
describe('Navigate to the application',async()=>{
    it('MouseHover',async()=>{
        browser.maximizeWindow()
        await browser.url(`http://testingserver/domain/Online_Banking_System/`);
        await browser.scroll(300,300)
        await browser.$(`//li[text()='Apply Debit Card']`).click()
        await browser.$(`//input[@placeholder="Account Holder Name"]`).setValue("diksha")
        await browser.$(`//input[@name="dbt_crd_submit"]`).click()

    })
})