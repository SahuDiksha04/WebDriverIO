import { expect } from "chai";

class Homepage
{
    get patient()
    {
        return $(`//h3[text()='Patients']/..//a`)
    }

    async click_patient()
    {
        await  this.patient.click();
        
    }

}
export default new Homepage()