
let year="2023"
let month='March'
let date='10'
describe('Navigate to the application',async()=>{
    it('Calender Popup',async()=>{
        await browser.maximizeWindow();
        await browser.url(`https://demoqa.com/date-picker`);
        
        const calendar_poppup=await browser.$(`#datePickerMonthYearInput`)
        await calendar_poppup.click();
        

        const year_DD=await browser.$(`//select[@class='react-datepicker__year-select']`)
        await year_DD.selectByVisibleText(year)
        
        
        const month_DD= await browser.$(`//select[@class="react-datepicker__month-select"]`)
        await month_DD.selectByVisibleText(month)

         const date_DD=await browser.$(`//div[.='10']`)
        await date_DD.click()

        



    })
})