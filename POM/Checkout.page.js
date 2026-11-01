class Checkout{
    constructor(page){
        this.page=page;
        this.first_name=page.getbyPlaceholder("First Name")
        this.last_name=page.getbyPlaceholder("Last Name")
        this.zipcode=page.getbyPlaceholder("Zip/Postal Code")
        this.cancel=page.getbyRole('button',{name:'Cancel'})
        this.continue=page.getbyRole('button',{name:'Contiue'})
        this.error=page.locator("")
    }
    async fillYourInfo(){
        await this.first_name.fill("Farhan")
        await this.last_name.fill("Khan")
        await this.zipcode.fill(641301)
    }
    async ClickonCancelButton(){
        await this.cancel.click()
    }
    async ClickonContinueButton(){
        await this.continue.click()
    }
    async fillAndContinue(){
        await this.fillYourInfo()
        await this.ClickonContinueButton()
    }
    async errorMessageonCheckout(){

    }
}
export default Checkout;
