import { expect } from "chai";
import { checkout, productPopup, purchase, registration } from '../pages';
import { confirmation } from '../pages/confirmatiom';

describe('Single purchase', function () {
    it('Clicks the Popular tab', function () {
        purchase.clickPopular();
        expect($(purchase.popularProducts).isVisible()).to.be.true;
    });

    it("Search red duck on the page", function() {
        purchase.openRedDuckItem();
        expect(productPopup.isLoaded()).to.equal(
            true,
            "Expected that product box is displayed"
        );
        expect(purchase.confirmationTitle()).to.equal('Red Duck');
    });

    it("Clicks the Buy button and close popup", function() {
        productPopup.addToCart();
        productPopup.closePopup();
        expect($(productPopup.boxProduct).isVisible()).to.be.false;
    });

    it("Opens cart page", function() {
        checkout.openCart();
        expect(checkout.pageTitle()).includes('Checkout');
    });

    it("Fills required fields and save customer data", function() {
        checkout.typeFirstName();
        checkout.typeLastName();
        checkout.typeAddress1();
        checkout.typeAddress2();
        checkout.typeEmail();
        checkout.typePhone();
        checkout.typeCity();
        checkout.typePostcode();
        checkout.clickSaveDetails();
    });

    it("Confirm order and proceed", function() {

        checkout.confirmOrder();
        expect(confirmation.isLoaded()).to.equal(
            true,
            "Expected that confirmation page appears"
        );
        expect(confirmation.pageTitle()).includes('Order Success');
        expect(confirmation.confirmationTitle()).to.match(
            /Your order #.* is successfully completed!/
        );
    });
});
