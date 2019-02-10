import { BasePage } from './base';

class Registration extends BasePage{
    private createAccountLink = 'a[href*="create_account"]';
    private firstNameField = 'input[name="firstname"]';
    private lastNameField = 'input[name="lastname"]';
    private emailField = '.col-md-6 .form-control[name="email"]';
    private passwordField = '.col-md-6 .form-control[name="password"]';
    private confirmPasswordField = 'input[name="confirmed_password"]';
    private createAccountBtn = 'button[name="create_account"]';


    public followCreateAccountLink() {
        $(this.createAccountLink).click();
    }

    public typeFirstName() {
        browser.pause(2000);
        $(this.firstNameField).waitForVisible();
        $(this.firstNameField).setValue('First name');
    }

    public typeLastName() {
        browser.pause(2000);
        $(this.lastNameField).waitForVisible();
        $(this.lastNameField).setValue('Last name');
    }

    public typeEmail() {
        browser.pause(2000);
        $(this.emailField).waitForVisible();
        $(this.emailField).setValue(Math.random() + '@gmail.com');
    }

    public typePassword() {
        browser.pause(2000);
        $(this.passwordField).waitForVisible();
        $(this.passwordField).setValue('123321');
    }

    public typeConfirmPassword() {
        browser.pause(2000);
        $(this.confirmPasswordField).waitForVisible();
        $(this.confirmPasswordField).setValue('123321');
    }

    public createAccount() {
        browser.pause(2000);
        $(this.createAccountBtn).waitForVisible();
        $(this.createAccountBtn).click();
    }
}

export const registration = new Registration();