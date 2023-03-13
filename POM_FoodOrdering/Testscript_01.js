


//Enter the user url. Homepage should be displayed.
// Click on register.Enter username, firstname, lastname, email, phoneno, password, confirm password, delivery address and click on register.
//User registered successfully.

//const getFile = require("../UserPage_ObjectRepo/register.page")
import UserLogin from "../UserPage_ObjectRepo/userLogin.page.js"
import registerPage from "../UserPage_ObjectRepo/register.page.js"
import userHomePage from "../UserPage_ObjectRepo/userHome.page.js"
import userLoginPage from "../UserPage_ObjectRepo/userLogin.page.js"
import { expect } from "chai"
describe('My Login application', async() => {
    let rm=Math.floor(Math.random()*(99-10)+10)
    let userName="abcd xyz"
    let email="ajax1@gmail.com"+rm
    let phoneNo="8676540558"+rm
    let password="123456"
     
    it('should login with valid credentials', async () => {
     await browser.maximizeWindow()
     await browser.url("http://testingserver/domain/Online_Food_Ordering_System/index.php");
     let data = await browser.getTitle()
     console.log(data);
     expect(await browser.getTitle()).to.contains("Home");
     //await expect(browser).toHaveTitleContaining("Home");
     await userHomePage.clickOnRegister();
     await registerPage.registerDetails(userName,"abc","xyz",email,phoneNo,password,password,"btm stage2 bangalore")

    })
    
    it('login to the page', async()=>{
     await userHomePage.clickOnLogin()
    await UserLogin.loginDetails(userName,password)
    })
 
    
    it('logout from the application', async()=>{
    await userHomePage.cliclOnLogout()
    })
 
 })
 
 
 