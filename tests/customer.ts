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

    it('Fills in the Contact form inputs with valid data', function() {
        const contactForm = $('form[name="contact_form"]');

        const contactEmail = contactForm.$('input[name="email"]');
        const contactName = contactForm.$('input[name="name"]');
        const contactSubject = contactForm.$('input[name="subject"]');
        const contactMessage = contactForm.$('textarea[name="message"]');

        const sendBtn = $('button[name="send"]');
        const successMessage = $('.alert-success');

        contactEmail.setValue('wuxox@utoo.email');
        contactName.setValue('Test name');
        contactSubject.setValue('Test subject');
        contactMessage.setValue('Test message');

        sendBtn.click();

        expect(successMessage.isVisible()).to.be.true;
    });

    // it("Shows error messages with bad credentials", function() {
    //     const errorMessage = $('.alert-danger');
    //
    //     $(formLocators.name).setValue('Name text');
    //     $(formLocators.sendBtn).click();
    //     expect(errorMessage.isVisible()).to.be.true();
    // });
});