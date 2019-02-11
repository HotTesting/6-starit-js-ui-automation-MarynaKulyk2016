import { BasePage } from './base';

class Purchase extends BasePage {
    public popularProducts =  '#box-popular-products';

    private redDuck = 'a[title="Red Duck"]';
    private yellowDuck = 'a[title="Yellow Duck"]';
    private popularTab = 'a[href="#popular-products"]';
    private selectBox = 'select[name="options[Size]"]';

    public clickPopular() {
        $(this.popularTab).click();
    }

    public openRedDuckItem() {
        $(this.redDuck).click();
    }

    public openYellowDuckItem() {
        $(this.yellowDuck).click();
    }
}

export const purchase = new Purchase();