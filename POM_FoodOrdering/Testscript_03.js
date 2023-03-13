/*Enter admin url,enter username and password click on login button.
Click on restaurant.
Click on restaurant enter all the valid credentials, click on save.
Restaurant added successfully.*/

import adminHomePage from "../AdminPage_ObjectRepo/adminHome.page.js"
import adminLoginPage from "../AdminPage_ObjectRepo/adminLogin.page.js"
import addRestaurantPage from "../AdminPage_ObjectRepo/addRestaurant.page.js"
import restaurantPage from "../AdminPage_ObjectRepo/restaurant.page.js"
describe('Food ordering application', async()=>{
    let rm=Math.floor(Math.random()*(99-10)+10)
    let categoryName='chinese'+rm
    let restaurantName="YourOwnChoice"
    let email="yoc@gmail.com"+rm
    let phoneNo="9586364589"+rm
    let url="www.yourownchoice.com"+rm
      
    it('Login to the admin page', async()=>{
          await browser.maximizeWindow()
          await browser.url("http://testingserver/domain/Online_Food_Ordering_System/admin/");
          await adminLoginPage.loginToAdminPage("admin","codeastro");
          expect(browser).toHaveTitleContaining("Admin Panel");
         // await adminHomePage.clickon_Restaurant();
          //await  (await browser.$('span*=Restaurant')).click();
          await (await adminHomePage.restaurant).click()
  
      })

      it.skip('Add restaurant', async()=>{
        await restaurantPage.clickon_addRestaurant();
        await addRestaurantPage.addRestaurantDetails();
})
 
it.skip('Verify restuarant is created', async()=>{
    await restaurantPage.clickon_allRestaurant();
    let txt=await browser.$('//tbody/tr/td[.="YourOwnChoice"]').getText();
    console.log(txt);
    expect(restaurantName).toContain(txt);

   // await browser.url("http://testingserver/domain/Online_Food_Ordering_System/admin/all_restaurant.php");
    //await expect(browser).toHaveTitleContaining("All Restaurants");
    })


})