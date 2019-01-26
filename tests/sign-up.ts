import { expect } from "chai";

describe('Sign up', function () {
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

    it("Fills in the required fields in sign up form", function() {
        const customerForm = $('form[name="customer_form"]');
        const firstNameField = customerForm.$('input[name="firstname"]');
        const lastNameField = customerForm.$('input[name="lastname"]');
        const emailField = customerForm.$('input[name="email"]');
        const passwordField = customerForm.$('input[name="password"]');
        const confirmPasswordField = customerForm.$('input[name="confirmed_password"]');
        const createAccountBtn = customerForm.$('button[name="create_account"]');

        firstNameField.setValue('First name');
        lastNameField.setValue('Last name');
        emailField.setValue(Math.random() + '@gmail.com');
        passwordField.setValue('123456');
        confirmPasswordField.setValue('123456');
        createAccountBtn.click();

        const successMessage = $('.alert-success');
        expect(successMessage.isVisible()).to.be.true;
    });
});