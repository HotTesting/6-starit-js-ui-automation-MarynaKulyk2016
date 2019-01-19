import { expect } from "chai";

describe('Customer', function () {
    it('Should open homepage', function () {
        browser.url('/');
        const title = browser.getTitle();
        expect(title).to.be.equal('My Store | Online Store');
    });

    it("Opens customer service page", function() {
        const defaultMenu = $('#default-menu');
        const customerServiceLink = defaultMenu.$('.customer-service a');
        customerServiceLink.click();
        expect($('#box-customer-service').isVisible()).to.be.true;
    });

    const informationLinks = $('#box-information-links');

    it("Opens cookie policy page", function() {
        const cookiePolicy = informationLinks.$('.nav-pills li:first-of-type a');
        cookiePolicy.click();
        browser.pause(1000);
        const cookieTitle = browser.getTitle();
        expect(cookieTitle).includes('Cookie Policy');
    });

    it("Opens delivery info page", function() {
        const deliveryInfo = informationLinks.$('.nav-pills li:nth-of-type(2) a');
        deliveryInfo.click();
        browser.pause(1000);
        const deliveryTitle = browser.getTitle();
        expect(deliveryTitle).includes('Delivery Information');
    });

    it("Opens newsletter page", function() {
        const newsletterPage = informationLinks.$('.nav-pills li:nth-of-type(3) a');
        newsletterPage.click();
        browser.pause(1000);
        const newsletterTitle = browser.getTitle();
        expect(newsletterTitle).includes('Newsletter');
    });

    it("Opens privacy page", function() {
        const privacyPage = informationLinks.$('.nav-pills li:nth-of-type(4) a');
        privacyPage.click();
        browser.pause(1000);
        const privacyPolicy = browser.getTitle();
        expect(privacyPolicy).includes('Privacy Policy');
    });

    it("Opens terms page", function() {
        const termsPage = informationLinks.$('.nav-pills li:nth-of-type(5) a');
        termsPage.click();
        browser.pause(1000);
        const termsTitle = browser.getTitle();
        expect(termsTitle).includes('Terms & Conditions');
    });
});