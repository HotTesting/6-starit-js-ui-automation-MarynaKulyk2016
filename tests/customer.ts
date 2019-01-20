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

    it('Fills in the Contact form inputs', function() {
        const formLocators = {
            name: 'form[name="contact_form"] [name="name"]',
            email: 'form[name="contact_form"] [name="email"]',
            subject: 'form[name="contact_form"] [name="subject"]',
            message: 'form[name="contact_form"] [name="message"]',
            sendBtn: 'form[name="contact_form"] [name="send"]'
        };
        const successMessage = $('.alert-success');

        $(formLocators.name).setValue('Name text');
        $(formLocators.email).setValue('address@mail.com');
        $(formLocators.subject).setValue('Subject text');
        $(formLocators.message).setValue('Message text');
        $(formLocators.sendBtn).click();
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