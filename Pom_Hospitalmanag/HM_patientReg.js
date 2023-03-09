class PatientRegistration
{
    get fullName()
    {
        return $(`//input[@name="full_name"]`)
    }

    get address()
    {
        return $(`[name="address"]`)
    }

    get city()
    {
        return $(`[name="city"]`)
    }

    get gender()
    {
        return $(`//label[@for="rg-female"]`)

    }

    get mail()
    {
        return $(`[name="email"]`)
    }

    get password()
    {
        return $(`[name="password"]`)
    }

    get password_again()
    {
        return $(`[id="password_again"]`)
    }

    get submit()
    {
        return $(`//button[@type="submit"]`)
    }
    
    get login()
    {
        return $(`//a[contains(text(),'Log-in')]`)
    }

    async pateientREg_details(fullName,mail,password,password_again)
    {
        await (await this.fullName).waitForDisplayed({timeout:3000})
        await  this.fullName.setValue(fullName);
        await  this.address.setValue("Jayanagar");
        await  this.city.setValue("Bangalore");
        await this.gender.waitForClickable();
        await this.gender.click();
        await this.mail.setValue(mail);
        await  this.password.setValue(password);
        await  this.password_again.setValue(password_again);
        await  this.submit.click();

    }
     async log_in()
        {
          await (await this.login).waitForDisplayed({timeout:3000})
          await this.login.click();

        }

}
export default new PatientRegistration()