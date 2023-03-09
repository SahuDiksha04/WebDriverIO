class addMenu
{
    get dishName()
    {
        return $(`[name="d_name"]`)
    }

    get description()
    {
        return $(`[name="about"]`)
    }

    get price()
    {
        return $(`[name="price"]`)
    }

    get image()
    {
        return $(`[name="file"]`)
    }

     get selectRestauarant()
     {
        return $(`[name="res_name"]`)
     }

     get clickOnSave()
     {
        return $(`[name="submit"]`)
     }

     async addMenuDetails(m_dishName,m_description,m_price,m_restaurant)
     {
        await this.dishName.setValue(m_dishName)
        await this.description.setValue(m_description)
        await this.price.setValue(m_price)
        await this.image.setValue("C:/Users/CHINMAY/Desktop/webdriverIO/Sample_test/restua.jpg")
        await this.selectRestauarant.selectByVisibleText("North Street Tavern")
        await this.clickOnSave.click();
        expect(browser.getTitle()).toHaveTitleContaining("Add Menu");
        let txt=await browser.$(`//div[@ class="alert alert-success alert-dismissible fade show"]`).getText();
        console.log(txt);
        await expect(txt).toContain('New Dish Added Successfully.');
     }
}
export default new addMenu()

