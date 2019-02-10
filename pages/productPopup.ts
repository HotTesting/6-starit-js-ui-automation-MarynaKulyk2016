import { BasePage } from './base';

class ProductPopup extends BasePage {
    public boxProduct = '#box-product';

    private addToCartButton =  'button.btn-success';
    private closeBtn =  '.featherlight-close';

    isLoaded() {
        return super.isLoaded(()=> browser.isVisible(this.boxProduct))
    }

    public addToCart() {
        $(this.addToCartButton).click();
    }

    public closePopup() {
        $(this.closeBtn).click();
    }
}

export const productPopup = new ProductPopup();