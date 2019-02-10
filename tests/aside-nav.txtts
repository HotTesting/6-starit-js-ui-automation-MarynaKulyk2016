import { expect } from "chai";

describe('Customer', function () {
    it("Opens customer service page", function() {
        const defaultMenu = $('#default-menu');
        const customerServiceLink = defaultMenu.$('.customer-service a');
        customerServiceLink.click();
        expect($('#box-customer-service').isVisible()).to.be.true;
    });

    it("Opens cookie policy page", function() {
        const cookiePolicy = $('#box-information-links a[href*="cookie-policy"]');
        cookiePolicy.click();
        const cookieTitle = browser.getTitle();
        const mainTitle = $('h1').getText();
        expect(cookieTitle).includes('Cookie Policy');
        expect(mainTitle).includes('Cookie Policy');
    });

    it("Opens delivery info page", function() {
        const deliveryInfo = $('#box-information-links a[href*="delivery-information"]');
        deliveryInfo.click();
        const deliveryTitle = browser.getTitle();
        expect(deliveryTitle).includes('Delivery Information');
    });

    it("Opens newsletter page", function() {
        const newsletterPage = $('#box-information-links a[href*="newsletter"]');
        newsletterPage.click();
        const newsletterTitle = browser.getTitle();
        expect(newsletterTitle).includes('Newsletter');
    });

    it("Opens privacy page", function() {
        const privacyPage = $('#box-information-links a[href*="privacy-policy"]');
        privacyPage.click();
        const privacyPolicy = browser.getTitle();
        expect(privacyPolicy).includes('Privacy Policy');
    });

    it("Opens terms page", function() {
        const termsPage = $('#box-information-links a[href*="terms-conditions"]');
        termsPage.click();
        const termsTitle = browser.getTitle();
        expect(termsTitle).includes('Terms & Conditions');
    });
});