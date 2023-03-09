class Register
{
   get userName()
   {
    return $(`[name="username"]`)
   }

   get firstName()
   {
    return $(`[name="firstname"]`)
   }

   get lastName()
   {
    return $(`[name="lastname"]`)
   }

   get email()
   {
    return $(`[name="email"]`)
   }

   get phoneNo()
   {
    return $(`[name="phone"]`)
   }

   get password()
   {
    return $(`[name="password"]`)
   }

   get confirmPassword()
   {
    return $(`[name="cpassword"]`)
   }

   get deliveryAddress()
   {
    return $(`[name="address"]`)
   }

   get clickOnRegister()
   {
    return $(`[name="submit"]`)
   }

   async registerDetails(userName,firstName,lastName,email,phoneNo,password,confirmPassword,address)
   {
    await (await this.userName).setValue(userName)
    await (await this.firstName).setValue(firstName)
    await (await this.lastName).setValue(lastName)
    await this.email.setValue(email)
    await (await this.phoneNo).setValue(phoneNo)
    await (await this.password).setValue(password)
    await (await this.confirmPassword).setValue(confirmPassword)
    await (await this.clickOnRegister).click()
   }
}
export default new Register()