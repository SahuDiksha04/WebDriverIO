class PatientLoginPage
{
   get userName()
   {
    return $(`[name="username"]`)
   }

   get password()
   {
    return $(`[name="password"]`)
   }

   get login()
   {
    return $(`[//button[contains(text(),'Login')]]`)
   }

   async login_details(userName,password)
   {
    await  this.userName.setValue(userName);
    await  this.password.setValue(password);
    await  this.login.click();
    expect(await browser.getTitle()).to.contains("User | Dashboard");

   }
}
export default new PatientLoginPage()