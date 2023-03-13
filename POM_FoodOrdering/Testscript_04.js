/*Enter admin url.Enter valid username and password.
Click on add menu.Enter all the details.
Verify menu is added.*/

import adminLoginPage from "../AdminPage_ObjectRepo/adminLogin.page.js"
import adminHomePage from "../AdminPage_ObjectRepo/adminHome.page.js"
import menuPage from "../AdminPage_ObjectRepo/menu.page.js"
import addMenuPage from "../AdminPage_ObjectRepo/addMenu.page.js"
describe('Food ordering application', async()=>{
    let rm=Math.floor(Math.random()*(99-10)+10)
    let dishName='Noodles'+rm
    let restaurantName="YourOwnChoice"
    let price ="10"
      it('Login to the admin page', async()=>{
          await browser.maximizeWindow()
          await browser.url("http://testingserver/domain/Online_Food_Ordering_System/admin/");
          await adminLoginPage.loginToAdminPage("admin","codeastro");
     })

     it('Add menu', async()=>{
        await  adminHomePage.clickon_Menu();
        await menuPage.clickon_addMenu();
        await addMenuPage.addMenuDetails(dishName,"good",price,restaurantName)
        //let vl = "New Dish Added Successfully."
        

    })

    it('Verify menu is created', async()=>{

        await menuPage.clickon_allMenues();
        let rs=await (await browser.$(`//td[text()='${dishName}']`)).isDisplayed();
      //console.log(text);
      expect(rs).toBe(true);
    })
    
 })










