import { expect } from "chai";
import { checkout, confirmation, productPopup, purchase } from '../pages';

describe('Purchase', function () {
    it("Purchase product with size selection", function() {
        // search yellow duck product item
        purchase.openYellowDuckItem();
        expect(productPopup.isLoaded()).to.equal(
            true,
            "Expected that product box is displayed"
        );
        expect(purchase.confirmationTitle()).to.equal('Yellow Duck');

        // select Medium size from drop-down list
        // TODO: fix page object
        const selectBox = $('select[name="options[Size]"]');
        const value = selectBox.getValue();
        console.log(value);

        selectBox.selectByAttribute('value', 'Medium');
        console.log(selectBox.getValue()); // returns "Medium"

        let element = $('[value="Medium"]');
        console.log(element.isSelected()); // outputs: true

        // add product to cart
        productPopup.addToCart();
        productPopup.closePopup();
        expect($(productPopup.boxProduct).isVisible()).to.be.false;

        // proceed to cart page
        checkout.openCart();
        expect(checkout.pageTitle()).includes('Checkout');

        // fill required fields and confirm order
        checkout.typeFirstName();
        checkout.typeLastName();
        checkout.typeAddress1();
        checkout.typeAddress2();
        checkout.typeEmail();
        checkout.typePhone();
        checkout.typeCity();
        checkout.typePostcode();
        checkout.clickSaveDetails();

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

    it("Purchase product without size selection", function() {
        browser.url('http://ip-5236.sunline.net.ua:38015');
        // open popular products tab
        purchase.clickPopular();
        expect($(purchase.popularProducts).isVisible()).to.be.true;

        // search red duck product item
        purchase.openRedDuckItem();
        expect(productPopup.isLoaded()).to.equal(
            true,
            "Expected that product box is displayed"
        );
        expect(purchase.confirmationTitle()).to.equal('Red Duck');

        // add product to cart
        productPopup.addToCart();
        productPopup.closePopup();
        expect($(productPopup.boxProduct).isVisible()).to.be.false;

        // proceed to cart page
        checkout.openCart();
        expect(checkout.pageTitle()).includes('Checkout');

        // fill required fields and confirm order
        checkout.typeFirstName();
        checkout.typeLastName();
        checkout.typeAddress1();
        checkout.typeAddress2();
        checkout.typeEmail();
        checkout.typePhone();
        checkout.typeCity();
        checkout.typePostcode();
        checkout.clickSaveDetails();

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
