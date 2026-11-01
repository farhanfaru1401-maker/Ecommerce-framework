class Product{
    constructor(page){
        this.page=page;
        this.menubar=page.locator("#react-burger-menu-btn")
        this.cartIcon=page.locator(".shopping_cart_link")
        this.cartBatch=page.locator(".shopping_cart_badge")
        this.logoutBtn=page.locator("#logout_sidebar_link")
        this.title=page.locator(".title")
        this.sortDropdown=page.locator(".product_sort_container")
        this.addtocart=page.getByRole('button',{name:"Add to cart"})
        this.remove=page.getByRole('button',{name:"Remove"})
        this.ProductItem=page.locator(".inventory_item")
        this.ProductItemName=page.locator(".inventory_item_name ")
        this.ProductItemPrice=page.locator(".inventory_item_price")
    }
    async AddToCart(){
        await this.ProductItem.locator("#add-to-cart-sauce-labs-backpack").click()
    }
    async RemoveCart(){
        await this.ProductItem.locator("#remove-sauce-labs-backpack").click()
    }

}
export default Product;