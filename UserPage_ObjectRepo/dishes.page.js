class Dishes
{
    get restaurantName()
    {
        return $(`//a[contains(.,'North Street Tavern')]`)
    }

    get dish_1()
    {
        return $('//a[contains(text(),"Yorkshire Lamb Patties")]/../../../../..//input[@value="Add To Cart"]')
    }

    get dish_2()
    {
        return $('//a[contains(text(),"Lobster Thermidor")]/../../../../..//input[@value="Add To Cart"]')
    }

    get priceText()
    {
        return $('//h3/strong')
    }

    

    get checkout()
    {
        return $(`//a[text()='Checkout']`)
    }

    get orderNow()
    {
        return $(`//input[@value="Order Now"]`)
    }

    async selectRestaurant()
    {
        await this.restaurantName.waitForDisplayed()
        await this.restaurantName.click();
        expect(browser).toHaveTitleContaining("Dishes");
    }

    async selectDishes()
    {
        await this.dish_1.click()
        await this.dish_2.click()
       
        
    }

    async clickOn_PriceText1()
    {
        await this.priceText.waitForDisplayed()
        let txt = await this.priceText.getText()
        console.log(txt);
        let iamt=txt.split('');
        let ivalue=(Number(iamt[1]));
        return ivalue
    }

    async cliclOn_PriceText2()
    {
        let txt1=await this.priceText.getText()
        let famt=txt1.split('');
        let fvalue=(Number(famt[1]));
        return fvalue
    }

    async clickOn_Checkout()
    {
        await this.checkout.click()
        expect(browser).toHaveTitleContaining("Checkout");
    }

    async clickOn_OrderNow()
    {
        await this.orderNow.click()
        expect(browser).toHaveTitleContaining("My Orders");
    }
}
 export default new Dishes()