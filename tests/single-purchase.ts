import { expect } from "chai";

describe.skip('Sign up', function () {
    it("Opens sign in form", function() {
        const signInBlock = $('.account a.dropdown-toggle');
        signInBlock.click();
        expect($('form[name="login_form"]').isVisible()).to.be.true;
    });

    it("Opens create account form", function() {
        const createAccountLink = $('a[href*="create_account"]');
        createAccountLink.click();
        const createAccountTitle = browser.getTitle();
        expect(createAccountTitle).includes('Create Account');
        const createAccountText = $('h1').getText();
        expect(createAccountText).includes('Create Account');
    });
});