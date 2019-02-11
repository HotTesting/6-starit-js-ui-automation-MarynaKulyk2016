import { expect } from "chai";
import { customer } from '../pages';

describe('Customer', function () {
    it("Opens customer service page", function() {
        customer.clickCustomerServiceLink();
        expect($(customer.customerServiceBox).isVisible()).to.be.true;
    });

    it('Fills in the Contact form inputs with valid data', function() {
        customer.typeName();
        customer.typeEmail();
        customer.typeSubject();
        customer.typeMessage();

        customer.clickSendButton();

        expect(customer.messageText()).to.includes(
            'Your email has successfully been sent'
        );
    });
});