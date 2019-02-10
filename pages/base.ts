export class BasePage {
    public successMessage = '.alert-success';

    public messageText(): string {
        $(this.successMessage).waitForVisible();
        return $(this.successMessage).getText();
    }

    public pageTitle(): any {
        return browser.getTitle();
    }
}