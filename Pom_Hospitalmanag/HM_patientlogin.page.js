class PatientLoginPage
{
    get createAnAccount()
    {
        return $(`//a[contains(text(),'Create an account')]`)
    }


async cliclon_createAcc()
{
    await this.createAnAccount.click()
}
}
export default new PatientLoginPage()
