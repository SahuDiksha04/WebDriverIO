class UserHomePage
{
    get restaurants()
    {
        return $(`//a[.='Restaurants ']`)
    }

    get login()
    {
        return $(`//a[text()='Login']`)
    }

    get register()
    {
        return $(`//a[text()='Register']`)
    }

    get logout()
    {
        return $(`//a[text()='Logout']`)
    }

    async clickOnRestaurants()
    {
        await this.restaurants.waitForDisplayed()
        await this.restaurants.click()
        let data = await browser.getTitle()
        console.log(data);
        expect(browser).toHaveTitleContaining("Restaurants");

    }
        
    async clickOnLogin()
    {
        await  this.login.click()
        let data1 = await browser.getTitle()
        console.log(data1);
        await expect(browser).toHaveTitleContaining("Login");
        
    }

    async clickOnRegister()
    {
        await  this.register.click()
        let data2 = await browser.getTitle()
        console.log(data2);
        await expect(browser).toHaveTitleContaining("Registration");
    }

    async cliclOnLogout()
    {
        await  this.logout.click()
        let data3 = await browser.getTitle()
        console.log(data3);
        await expect(browser).toHaveTitleContaining("Login");
    }
        
    
}
export default new UserHomePage()