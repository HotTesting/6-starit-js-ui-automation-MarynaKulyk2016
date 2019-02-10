import { BasePage } from './base';
import * as faker from "faker";

class Checkout extends BasePage {
    private saveDetailsBtn = 'button[name="save_customer_details"]';
    private cartLink = 'a[href$="/checkout"]';
    private firstNameField = 'input[name="firstname"]';
    private lastNameField = 'input[name="lastname"]';
    private emailField = 'input[name="email"]';
    private address1Field = 'input[name="address1"]';
    private address2Field = 'input[name="address2"]';
    private postcodeField = 'input[name="postcode"]';
    private cityField = 'input[name="city"]';
    private phoneField = 'input[name="phone"]';

    public confirmOrder(): any {
        browser.waitUntil(
            function() {
                return (
                    browser.getAttribute('button[name="confirm_order"]', "disabled") ==
                    null
                );
            },
            5000,
            "Confirm order button should become enabled to click, make sure that all required fields are filled"
        );
        $('button[name="confirm_order"]').click();
    }

    public openCart() {
        browser.pause(1000);
        $(this.cartLink).click();
    }

    public clickSaveDetails() {
        $(this.saveDetailsBtn).click();
    }

    public typeFirstName() {
        $(this.firstNameField).waitForVisible();
        $(this.firstNameField).setValue(faker.name.firstName());
    }

    public typeLastName() {
        $(this.lastNameField).setValue(faker.name.lastName());
    }

    public typeEmail() {
        $(this.emailField).setValue(faker.internet.email());
    }

    public typeAddress1() {
        $(this.address1Field).setValue(faker.address.streetAddress());
    }

    public typeAddress2() {
        $(this.address2Field).setValue(faker.address.streetAddress());
    }

    public typePhone() {
        $(this.phoneField).setValue(faker.phone.phoneNumberFormat());
    }

    public typeCity() {
        $(this.cityField).setValue(faker.address.city());
    }

    public typePostcode() {
        $(this.postcodeField).setValue(faker.address.zipCode());
    }

}

export const checkout = new Checkout();