import { expect } from "chai";

describe.skip('Sign in', function () {
    it("Opens sign in form", function() {
        const defaultMenu = $('#default-menu');
        const signInBlock = defaultMenu.$('.account a.dropdown-toggle');
        signInBlock.click();
        expect($('form[name="login_form"]').isVisible()).to.be.true;
    });

    it("Fills in the Sign in form with existing user", function() {
        const signInForm = $('form[name="login_form"]');
        const userEmail = signInForm.$('input[name="email"]');
        const userPassword = signInForm.$('input[name="password"]');
        const signInBtn = signInForm.$('button[name="login"]');

        userEmail.setValue('wuxox@utoo.email');
        userPassword.setValue('123321');
        signInBtn.click();

        const successMessage = $('.alert-success');
        expect(successMessage.isVisible()).to.be.true;
    });
});