// import {test as myTestObjs} from "@playwright/test";

// import RegisterPage from "../pages/resgisterPage"
// import loginPage from "../pages/loginPage"
// import HomePage from "../pages/homePage"

// type fixForObj = {

//     registerPage: RegisterPage,
//     loginPage: loginPage,
//     homePage: HomePage


// }


// const testObjFixtues = myTestObjs.extend<fixForObj>({

//     registerPage: async ({page}, use)=>{
//         await use(new RegisterPage(page ))

//     },

//     loginPage: async ({page}, use)=>{
//         await use(new loginPage(page ))

//     },

//     homePage: async ({page}, use)=>{
//         await use(new HomePage(page ))

//     }

// })

// export const test = testObjFixtues;

// export const expect = testObjFixtues.expect;


// This is fixture where i have created the objects of pages , to use it in test.ts file without creating a object 
// directly in that File, i have save all of them here and i call out just the obj names there by using 
// the fixture in import