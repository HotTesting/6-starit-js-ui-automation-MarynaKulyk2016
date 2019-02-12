import { expect } from "chai";
import { signIn } from '../pages';

describe('Sign in', function () {
    it("User should be able to login", function() {
        // Opens sign in form
        signIn.openSignInDropDown();
        expect($(signIn.openedSignInDropdown).isExisting()).to.be.true;

        // Fills in the Sign in form with existing user
        signIn.login('wuxox@utoo.email', '123456');
        expect(signIn.messageText()).to.includes(
            'You are now logged in'
        );
    });
});