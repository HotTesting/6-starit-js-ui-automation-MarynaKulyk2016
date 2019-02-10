export class Purchase {

    private popularTab = $('a[href*="popular-products"]');
    // private popularProducts =  $('#box-popular-products');


    clickPopular() {
        this.popularTab.click()
    }

}