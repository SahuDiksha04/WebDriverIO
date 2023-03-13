
/*Enter user url.Enter valid username and password.
Choose restaurant , click on add to cart.
Compare the initial amount and final amonut.
Click on checkout.
Click on order now.
Order should be displayed.*/


import userHomePage from "../UserPage_ObjectRepo/userHome.page.js";
import userLoginPage from "../UserPage_ObjectRepo/userLogin.page.js";
import dishesPage from "../UserPage_ObjectRepo/dishes.page.js";
import { expect } from "chai";



describe('Navigate to the application', async() => {
    //let rm=Math.floor(Math.random()*(99-10)+10)
    let userName="abcd xyz"
    let password="123456"
    let fvalue
    let ivalue

    it('Login to the application', async()=>{
    await browser.maximizeWindow();
    await browser.url("http://testingserver/domain/Online_Food_Ordering_System/index.php");
    let data = await browser.getTitle()
    console.log(data);
    expect(await browser.getTitle()).to.contain('Home')
    //await expect(browser).toHaveTitleContaining("Home");    //assert
    await userHomePage.clickOnLogin();
    await userLoginPage.loginDetails(userName,password)
    
   })
 
    it('Choose restaurant', async()=>{
    await userHomePage.clickOnRestaurants()
    await dishesPage.selectRestaurant()
    })

    it('Select the Dishes', async ()=>{
        dishesPage.selectDishes()
    })
    
    it('Compare the amount',async()=>{
    ivalue=await dishesPage.clickOn_PriceText1()
    
    
    fvalue=await dishesPage.cliclOn_PriceText2()
    expect(fvalue).toBeGreaterThan(ivalue);
    })
    
    it('Checkout', async()=>{
    await dishesPage.clickOn_Checkout()
    await dishesPage.clickOn_OrderNow()
    browser.acceptAlert();
    browser.acceptAlert();
    }) 
 })
 