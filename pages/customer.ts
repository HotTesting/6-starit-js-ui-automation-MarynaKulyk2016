import { BasePage } from './base';
import * as faker from "faker";

class Customer extends BasePage {
    public customerServiceBox = '#box-customer-service';

    private customerServiceLink = 'a[href*="customer-service"]';
    private sendBtn = 'button[name="send"]';

    private contactEmail = 'form[name="contact_form"] input[name="email"]';
    private contactName = 'input[name="name"]';
    private contactSubject = 'input[name="subject"]';
    private contactMessage = 'textarea[name="message"]';

    public clickCustomerServiceLink() {
        $(this.customerServiceLink).click();
    }

    public typeName() {
        $(this.contactName).waitForVisible();
        $(this.contactName).setValue(faker.name.firstName());
    }

    public typeEmail() {
        $(this.contactEmail).setValue(faker.internet.email());
    }

    public typeSubject() {
        $(this.contactSubject).setValue(faker.lorem.sentence());
    }

    public typeMessage() {
        $(this.contactMessage).setValue(faker.lorem.paragraph());
    }

    public clickSendButton() {
        $(this.sendBtn).click();
    }
}

export const customer = new Customer();