import { BasePage } from './base';

class Registration extends BasePage {
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

    public typeFirstName(firstName: string) {
        $(this.firstNameField).waitForVisible();
        $(this.firstNameField).setValue(firstName);
    }

    public typeLastName(lastName: string) {
        $(this.lastNameField).setValue(lastName);
    }

    public typeEmail(email: string) {
        $(this.emailField).setValue(email);
    }

    public typePassword(password: string) {
        $(this.passwordField).setValue(password);
    }

    public typeConfirmPassword(password: string) {
        $(this.confirmPasswordField).setValue(password);
    }

    public createAccount() {
        $(this.createAccountBtn).click();
    }
}

export const registration = new Registration();