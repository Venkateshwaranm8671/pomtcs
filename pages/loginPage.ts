import { expect, Page } from "@playwright/test";
import LoginLocator from "../locators/loginLocator";

const loginloc = new LoginLocator()
export default class LoginPage {

    constructor(public page:Page){}

    async enterMail(email: string) {

       this.page.locator(loginloc.emailForLogin).type(email);
}

    async enterPassword(password: string) {
        await this.page.locator(loginloc.passwordForLogin).type(password);


}

    async clickLoginBtn() {


       await Promise.all([
            this.page.waitForNavigation(),
            this.page.click(loginloc.loginBtn)
       ])

    //    expect(this.page.url()).toContain("route=account/account")

    //    const urlAccount  = this.page.url()
    //    console.log("The current URL is: " + urlAccount)

       

}

}