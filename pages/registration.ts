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
        $(this.firstNameField).waitForVisible();
        $(this.firstNameField).setValue('First name');
    }

    public typeLastName() {
        $(this.lastNameField).setValue('Last name');
    }

    public typeEmail() {
        $(this.emailField).setValue(Math.random() + '@gmail.com');
    }

    public typePassword() {
        $(this.passwordField).setValue('123321');
    }

    public typeConfirmPassword() {
        $(this.confirmPasswordField).setValue('123321');
    }

    public createAccount() {
        $(this.createAccountBtn).click();
    }
}

export const registration = new Registration();