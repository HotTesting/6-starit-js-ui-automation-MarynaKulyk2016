import { BasePage } from './base';

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

    public typeName(name: string) {
        $(this.contactName).waitForVisible();
        $(this.contactName).setValue(name);
    }

    public typeEmail(email: string) {
        $(this.contactEmail).setValue(email);
    }

    public typeSubject(subject: string) {
        $(this.contactSubject).setValue(subject);
    }

    public typeMessage(message: string) {
        $(this.contactMessage).setValue(message);
    }

    public clickSendButton() {
        $(this.sendBtn).click();
    }
}

export const customer = new Customer();