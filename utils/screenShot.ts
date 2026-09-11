import { Page } from "@playwright/test";

export class ScreenShotUtil{

   constructor(public page:Page){}

    async takeScreenshot(filename: string) {
        await this.page.screenshot({ path: `screenshots/${filename}`, 
            fullPage: true
    });
      }

    }
