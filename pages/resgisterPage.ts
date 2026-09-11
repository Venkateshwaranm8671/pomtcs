import { Page } from "@playwright/test";

import RegisterLocator from "../locators/registerLocator";
import { ScreenshotUtil } from "../utils/screenShot";

const registerLocator = new RegisterLocator()
export default class RegisterPage extends ScreenshotUtil {
    

    //constructor(public page: Page) {}

    
    
    async enterFirstName(firstname: string) {
        await this.takeScreenshot("register-page.png")
        //await this.page.locator("//div[@class='col-sm-10']//input[@name='firstname']").fill(firstname);
        await this.page.locator(registerLocator.firstName).fill(firstname);
    }

    async lastName(lastname: string) {
        await this.takeScreenshot("lastname-page.png")
        await this.page.locator(registerLocator.lastName).fill(lastname);
    }

    async enterEmail(email: string) {
        await this.page.locator(registerLocator.email).fill(email);
    }

    async enterTelephone(phonenum: string) {
        await this.page.locator(registerLocator.telephone).fill(phonenum);
    }

    async enterPassword(password: string) {
        await this.takeScreenshot("password-page.png")
        await this.page.locator(registerLocator.password).fill(password);
    }

    async enterConfirmPassword(confirmpass: string) {
        await this.page.locator(registerLocator.confirm).fill(confirmpass);
    }

    async subscribeBtn() {
        const subscribeCheckbox = this.page.locator(registerLocator.subscribeButton).isChecked();
        // await subscribeCheckbox.scrollIntoViewIfNeeded();
        // await subscribeCheckbox.check({ force: true });


    }

    async agreeTerm() {
        await this.page.locator(registerLocator.termandCond).check({ force: true });
    }

    async continueBtn() {

        await Promise.all([
            this.page.waitForNavigation({waitUntil: "networkidle"}),
            this.page.click(registerLocator.continueButton)

                  ])
        
        await this.page.waitForTimeout(5000)
 
    }

    async clickContAgain(){
        await this.takeScreenshot("continue-again.png")
            
           await this.page.click(registerLocator.secondContBtn)
           await this.page.waitForTimeout(5000)
        
    }

//     async myAcc(){
//         await this.page.hover("//i[@class='icon fas fa-user']")
//         // await this.page.selectOption("//i[@class='icon fas fa-user']", {label: "Logout"})
//         await this.page.waitForTimeout(2000)
//         await this.page.locator("(//a[@class='icon-left both dropdown-item'])[8]").click()

  
// }
}