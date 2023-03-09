class Dashboard{
    get verifyusername()
    {
        return $(`//span[contains(text(),'Suresh Kumar ')]`)
    }
    async displayUsername()
    {
        await this.verifyusername.click();
    }
}
export default new Dashboard()