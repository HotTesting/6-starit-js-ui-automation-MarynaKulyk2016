import { expect } from "chai";
import { registration, signIn } from '../pages';

describe('Sign in', function () {
    it("Opens sign in form", function() {
        signIn.openSignInDropDown();

        expect($(signIn.openedSignInDropdown).isExisting()).to.be.true;
    });

    it("Follow create account link", function() {
        registration.followCreateAccountLink();

        expect(registration.pageTitle()).includes('Create Account');
    });

    it("Fills in the required fields in sign up form", function() {
        registration.typeFirstName();
        registration.typeLastName();
        registration.typeEmail();
        registration.typePassword();
        registration.typeConfirmPassword();
        registration.createAccount();

        expect(registration.messageText()).to.include(
            'Your customer account has been created'
        );
    });
});