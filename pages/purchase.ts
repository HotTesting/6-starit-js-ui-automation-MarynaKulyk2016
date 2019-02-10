import { BasePage } from './base';

class Purchase extends BasePage {
    public popularProducts =  '#box-popular-products';

    private redDuck = 'a[title="Red Duck"]';
    private popularTab = 'a[href="#popular-products"]';

    public clickPopular() {
        $(this.popularTab).click();
    }

    public openRedDuckItem() {
        $(this.redDuck).click();
    }
}

export const purchase = new Purchase();