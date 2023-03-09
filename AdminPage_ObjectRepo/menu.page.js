class Menu
{
    get allMenues()
    {
        return $('*=All Menues')
    }

    get addMenu()
    {
        return $(`//a[contains(text(),'Add Menu')]`)
    }

    async clickon_allMenues()
    {
        await  this.allMenues.click();
    }
    async clickon_addMenu()
    {
        await this.addMenu.click();
        expect(browser.getTitle()).toHaveTitleContaining("Add menu");
    }
}
export default new Menu()