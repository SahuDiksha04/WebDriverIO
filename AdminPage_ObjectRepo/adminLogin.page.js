class AdminLoginPage
{
    get userName()
    {
        return $(`[name="username"]`)
    }

    get userPassword()
    {
        return $(`[name="password"]`)
    }

    get submitButton()
    {
        return $(`[name="submit"]`)
    }

    async loginToAdminPage(userName,password)
    {
       await (await this.userName).setValue(userName);
       await (await this.userPassword).setValue(password);
       await (await this.submitButton).click();
    }

        
}
export default new AdminLoginPage()