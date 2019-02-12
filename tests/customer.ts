import { expect } from "chai";
import { customer } from '../pages';
import * as faker from "faker";

describe('Customer', function () {
    it('Send email to support', function() {
        // Opens customer service page
        customer.clickCustomerServiceLink();
        expect($(customer.customerServiceBox).isVisible()).to.be.true;

        // Fills in the Contact form inputs and submit
        customer.typeName(faker.name.firstName());
        customer.typeEmail(faker.internet.email());
        customer.typeSubject(faker.lorem.sentence());
        customer.typeMessage(faker.lorem.paragraph());

        customer.clickSendButton();

        expect(customer.messageText()).to.includes(
            'Your email has successfully been sent'
        );
    });
});