import { BasePage } from './base';
export class Confirmation extends BasePage {
    public printableCopyLink = 'a[href*="printable_order_copy"]';

    isLoaded() {
        return super.isLoaded(()=> browser.isVisible(this.printableCopyLink))
    }
}

export const confirmation = new Confirmation();