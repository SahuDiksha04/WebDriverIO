class AddRestaurant
{
    get restaurantName()
    {
        return $(`[name="res_name"]`)
    }

    get email()
    {
        return $(`[name="email"]`)
    }

    get phoneNo()
    {
        return $(`[name="phone"]`)
    }

    get websiteUrl()
    {
        return $(`[name="url"]`)
    }

    get openHours()
    {
        return $(`[name="o_hr"]`)
    }

    get closeHours()
    {
        return $(`[name="c_hr"]`)
    }

    get openDays()
    {
        return $(`[name="o_days"]`)
    }

    get chooseImage()
    {
        return $(`[name="file"]`)
    }
    
    get selectCategory()
    {
        return $(`[name="c_name"]`)
    }

    get restaurantAddress()
    {
        return $(`[name="address"]`)
    }

    get clickOnSave()
    {
        return $(`[name="submit"]`)
    }

    async addRestaurantDetails(r_name,r_email,r_phoneno,r_url,r_openhr,r_closehr,r_opendays,r_image,r_category,r_address)
    {
        await  this.restaurantName.setValue(r_name)
        await this.email.setValue(r_email)
        await  this.phoneNo.setValue(r_phoneno)
        await  this.websiteUrl.setValue(r_url)
        await this.openHours.selectByVisibleText("7am")
        await  this.closeHours.selectByVisibleText("11pm")
        await this.openDays.selectByVisibleText("Mon-Fri")
        await  this.chooseImage.setValue("C:/Users/CHINMAY/Desktop/webdriverIO/Sample_test/restua.jpg")
        await  this.selectCategory.selectByVisibleText("Chinese")
        await  this.restaurantAddress.setValue("JP nagar Bangalore")
        await  this.clickOnSave.click();
        await (await browser.$(`//div[contains(.,'New')][ contains(@class,'alert')]`)).waitForDisplayed()
       var rs=await (await browser.$(`//div[contains(.,'New')][ contains(@class,'alert')]`)).getText()
       
         expect(rs).toContain('New')
    }
}
export default new AddRestaurant()
