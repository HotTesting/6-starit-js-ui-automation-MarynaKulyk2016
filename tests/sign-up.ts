import { expect } from "chai";
import { registration, signIn } from '../pages';
import * as faker from "faker";

describe('Sign in', function () {
    it("User should be able to register", function() {
        // Opens sign in form
        signIn.openSignInDropDown();
        expect($(signIn.openedSignInDropdown).isExisting()).to.be.true;

        // Follow create account link
        registration.followCreateAccountLink();
        expect(registration.pageTitle()).includes('Create Account');

        // Fills in the required fields in sign up form
        registration.typeFirstName(faker.name.firstName());
        registration.typeLastName(faker.name.lastName());
        registration.typeEmail(Math.random() + '@gmail.com');
        registration.typePassword('123321');
        registration.typeConfirmPassword('123321');
        registration.createAccount();

        expect(registration.messageText()).to.include(
            'Your customer account has been created'
        );
    });
});