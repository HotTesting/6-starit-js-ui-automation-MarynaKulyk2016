import { expect } from "chai";

describe('Single purchase', function () {
    it("Clicks the Popular tab", function() {
        const popularTab = $('a[href*="popular-products"]');
        popularTab.click();
        expect($('#box-popular-products').isVisible()).to.be.true;
    });

    it("Search red duck on the page", function() {
        const redDuck = $('a[title="Red Duck"]');
        redDuck.click();
        browser.waitUntil(() => {
            return $('#box-product').isVisible()
        }, 5000, 'Element is not displayed');
        expect($('#box-product').isVisible()).to.be.true;
        const redDuckText = $('h1.title').getText();
        expect(redDuckText).to.equal('Red Duck');
    });

    it("Clicks the Buy button and close popup", function() {
        $('button.btn-success').click();
        $('.featherlight-close').click();
        expect($('#box-product').isVisible()).to.be.false;
    });

    it("Shows 1 item in the cart", function() {
        //TODO: fix pause
        browser.pause(1000);
        const cartQuantity = $('#cart span.quantity').getText();
        expect(cartQuantity).to.equal('1');
    });
});
