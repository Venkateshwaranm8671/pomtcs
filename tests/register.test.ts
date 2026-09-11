import {expect, test} from "@playwright/test"

import * as data from "../dataForTcs/testData.json"

import RegisterPage from "../pages/resgisterPage"
import loginPage from "../pages/loginPage"
import HomePage from "../pages/homePage"


// const email="Voooam@gmail.com"
// const password="vo00liiop123"

// const email = `Viiopen${Math.floor(Math.random() * 1000)}@gmail.com`
// const password = `Password${Math.floor(Math.random() * 1000)}`

test.describe("Pom automation", async()=>{

test("TC01 Register", async({page, baseURL})=>{
  const register = new RegisterPage(page);
  await page.goto(`${baseURL}route=account/register`);
  //await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register");
  // await register.enterFirstName("Venkat")
  // await register.lastName("Moss")
  await register.enterFirstName(data.firstName)
  await register.lastName(data.lastName)
  await register.enterEmail(data.email)
  await register.enterTelephone(data.mobileNumber)

  //await register.enterTelephone("9281908899")
  //await register.enterPassword(password)
  await register.enterPassword(data.password)
  await register.enterConfirmPassword(data.password)
  await register.subscribeBtn()
  await register.agreeTerm()
  await register.continueBtn()
  await register.clickContAgain()
  //await register.myAcc()
})

test("Tc02 Login", async ({page, baseURL})=>{

  const login = new loginPage(page)
  await page.goto(`${baseURL}route=account/login`)
  await login.enterMail(data.email)
  await login.enterPassword(data.password)
  await login.clickLoginBtn()
  
})

test("TC03 HomePage", async ({page, baseURL})=>{


  const home = new HomePage(page)
  await page.goto(`${baseURL}route=common/home`)
  await home.specialHotHyperlink()

   

})



})