import { BasePage } from './base';

class SignIn extends BasePage{
    private signInDropdown = '.account.dropdown';
    private emailField = '.form-control[name="email"]';
    private passwordField = '.form-control[name="password"]';
    private signInBtn = 'button[name="login"]';

    public openedSignInDropdown = '.account.dropdown.open';


    public openSignInDropDown() {
        $(this.signInDropdown).waitForVisible();
        $(this.signInDropdown).click();
    }

    public login() {
        $(this.emailField).waitForVisible();
        $(this.emailField).setValue('wuxox@utoo.email');
        $(this.passwordField).setValue('123456');
        $(this.signInBtn).click();
    }
}

export const signIn = new SignIn();