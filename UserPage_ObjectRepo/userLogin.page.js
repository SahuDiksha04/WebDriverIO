class UserLogin
{
    get userName()
    {
        return $(`[name="username"]`)
    }

    get password()
    {
        return $(`[name="password"]`)
    }
    
    get clickLogin()
    {
        return $(`[name="submit"]`)
    }

    async loginDetails(userName,password)
    {
        await  this.userName.setValue(userName)
        await  this.password.setValue(password)
        await  this.clickLogin.click()
        let text = await browser.getTitle()
        console.log(text);
        await expect(browser).toHaveTitleContaining("Home");
    }
}
export default new UserLogin()