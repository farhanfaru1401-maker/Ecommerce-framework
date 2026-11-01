class Login{
    constructor(page){
        this.page=page;
        this.username=page.getByPlaceholder("Username")
        this.password=page.getByPlaceholder("Password")
        this.Loginbtn=page.getByRole('button',{name:'Login'})
        this.errorMsg=page.locator(".error-button")
    }
    async goto(){
        await this.page.goto("https://www.saucedemo.com/")
    }
    async LoginToSauceDemo(){
        await this.page.goto("https://www.saucedemo.com/")
        await this.username.fill("standard_user")
        await this.password.fill("secret_sauce")
        await this.Loginbtn.click()
    }
    async ClickOnLoginBtn(){
        await this.Loginbtn.click()
    }
    async getErrorMsg(){
        await this.errorMsg.textContent()
    }
}
export default Login;
