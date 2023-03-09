class Restaurant
{
    get allRestaurant()
    {
        return $('a*=All Restaurant')
    }

    get addCategory()
    {
        return $('*=Add Category')
    }

    get addRestaurant()
    {
        return $('*=Add Restaurant')
    }

    async clickon_allRestaurant()
    {
        await  this.allRestaurant.click();
    }
    async clickon_addCategory()
    {
        await this.addCategory.click();
    }
    async clickon_addRestaurant()
    {
        await  this.addRestaurant.waitForDisplayed();
        await  this.addRestaurant.click();
        expect(await browser.getTitle()).toHaveTitleContaining("Add Restaurant");
    }
}
export default new Restaurant()