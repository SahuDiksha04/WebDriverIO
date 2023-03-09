
import { expect } from "chai";
import HM_homePage from "./HM_home.page.js";
import HM_patientloginPage from "./HM_patientlogin.page.js";
import HM_patientReg from "./HM_patientReg.js";
import HM_ploginPage from "./HM_plogin.page.js";
import HM_dashboardPage from "./HM_dashboard.page.js";
describe("Navigate to the application", async()=>
{
    let rm=Math.floor(Math.random()*(99-10)+10)
    let fullName="Suresh Kumar"+rm;
    let mail="suresh@gmail.com"+rm;
    let password="@12345"+rm;
    let password_again="@12345"+rm;
    

    it('click on patient',async()=>
    {
        await browser.maximizeWindow();
        await browser.url("http://testingserver/domain/Hospital_Management_System/");
         await HM_homePage.click_patient();
         expect(await browser.getTitle()).to.contains("User-Login");
    })

    it('click on create account',async()=>
    {
       await HM_patientloginPage.cliclon_createAcc();
       expect(await browser.getTitle()).to.contains("User Registration");

    })

    it('Fill patient details for registration', async()=>
    {
       await HM_patientReg.pateientREg_details(fullName,mail,password,password_again);
    })

    it('Patient login',async()=>
    {
        await HM_ploginPage.login_details(mail,password);

    })

    it('Verify user is created', async()=>
    {
      await HM_dashboardPage.displayUsername();
      //expect(await browser.getTitle()).to.true("User|Dashboard");
    })

})