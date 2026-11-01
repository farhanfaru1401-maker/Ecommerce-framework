import{test} from '@playwright/test'
import Login from '../POM/Login.page.js'

test("Login to SauceDemo",async({page})=>{
    let login=new Login(page)
    await login.goto()
    await login.LoginToSauceDemo()
    await page.plac
}
)
