class AdminHomePage
{
    get users()
    {
        return $(`//span[text()="Users"]`)
    }

    get restaurant()
    {
        return $(`//span[contains(.,"Restaurant")]/..`)
    }

    get menu()
    {
        return $(`span*=Menu`)
    }

    get orders()
    {
        return $(`span*=Orders`)
    }

    async clickon_Users()
    {
        await this.users.click();
    }
    async clickon_Restaurant(){
        //await  this.restaurant.waitForDisplayed();
        await this.restaurant.click();
        
    }
    async clickon_Menu()
    {
        await this.menu.click();
    }
    async click0n_Orders()
    {
        await this.orders.click();
    }
}
export default new AdminHomePage()