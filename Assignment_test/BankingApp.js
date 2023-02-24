
describe('Navigate to application', async()=>{
    let appno = ""
it("navigation to application",async ()=>{
    await browser.maximizeWindow()
    await browser.url("http://testingserver/domain/Online_Banking_System/")
    console.log(browser.getTitle())
    expect(browser).toHaveTitle('Online Banking System')
  })

  it('Open account', async()=>{
    await browser.$(`//li[text()='Open Account']`).click();
    await browser.$(`//input[@name="name"]`).setValue("diksha")
    let gender=await browser.$(`//select[@name="gender"]`)
    await gender.selectByVisibleText("Female");
    await browser.$(`//input[@name="mobile"]`).setValue("8936568926")
    await browser.$(`//input[@name='email']`).setValue("diksha@gmail.com")
    await browser.$(`//input[@name='landline']`).setValue("456996")
    await browser.$(`//input[@name="dob"]`).click();
    await browser.$(`//input[@name="dob"]`).setValue("2-24-2023")


    await browser.$(`//input[@name="pan_no"]`).setValue("FMNPS8596")
    await browser.$(`//input[@name="citizenship"]`).setValue("456878")
    await browser.$(`//input[@name="homeaddrs"]`).setValue("Btm stage2 chaitanya bangalore 560076")
    await browser.$(`//input[@name="officeaddrs"]`).setValue("Btm1 stage2 chaitanya bangalore 560076")
    //await browser.$(`//input[@name="country"]`).setValue("US")
    let state=browser.$(`//select[@name="state"]`)
    await state.selectByVisibleText("California")
    let city=await browser.$(`//select[@name="city"]`)
    await city.selectByVisibleText("Dallas")
    await browser.$(`//input[@name="pin"]`).setValue("560076")
    await browser.$(`//input[@name="arealoc"]`).setValue("vghhh")
    await browser.$(`//input[@name="nominee_name"]`).setValue("Suresh")
    await browser.$(`//input[@name="nominee_ac_no"]`).setValue("78968956897")
    await browser.$(`//select[@name="acctype"]`).selectByVisibleText("Saving")
    await browser.$(`//input[@name="submit"]`).click()
    expect(browser).toHaveTitleContaining("Confirm")
  })

it('Confirmation for submit', async()=>{
    await browser.$(`//input[@name="cnfrm-submit"]`).click()
    //await browser.isAlertOpen()
    const text=await browser.getAlertText()
    let text1=text.split('')
    let   a=text1.filter((text1)=>{ return  text1>=0 &&  text1<=9})
    appno=a.join('') 
    console.log(appno);
    browser.acceptAlert()
    expect(browser).toHaveTitleContaining("Online Banking System")
  })

  it("click on staffLogin",async ()=>{
    browser.$('=Staff Login').click()
    console.log(browser.getTitle());
    expect(browser).toHaveTitleContaining("Staff Page")
    
})

it("Login",async ()=>{
    await browser.$('//input[@name="staff_id"]').setValue(210001)
    await browser.$('//input[@name="password"]').setValue("password")
    const login = await $('//input[@name="staff_login-btn"]')
    await login.waitForDisplayed({ timeout: 10000 });
    await login.click()
    console.log(browser.getTitle());
    expect(browser).toHaveTitleContaining("Staff Home")
})

  it('Enter application number',async()=>{
    await browser.$(`//input[@value='Approve Pending Account']`).click()
    await browser.$(`//input[@name="application_no"]`).setValue(appno)
    await browser.$(`//input[@name="search_application"]`).click()
    await browser.$(`//input[@name="approve_cust"]`).click()
  })
})
