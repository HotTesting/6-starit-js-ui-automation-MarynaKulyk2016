import { expect } from "chai";
import { signIn } from '../pages';

describe('Sign in', function () {
    it("Opens sign in form", function() {
        signIn.openSignInDropDown();

        expect($(signIn.openedSignInDropdown).isExisting()).to.be.true;
    });

    it("Fills in the Sign in form with existing user", function() {
        signIn.login();

        expect(signIn.messageText()).to.includes(
            'You are now logged in'
        );
    });
});