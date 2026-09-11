import {Page} from "@playwright/test";

import homePageLocator from "../locators/homePageLocator";

const homePageLoc = new homePageLocator()

export default class HomePage {
    constructor(public page:Page){}

   async specialHotHyperlink(){
    await this.page.click(homePageLoc.specialHot)
    const urlprint = this.page.url()
    console.log("The current URL is: " + urlprint) 
    
   } 






}