export class BasePage {
    public successMessage = '.alert-success';
    private titleText: string = "h1.title";

    public messageText(): string {
        $(this.successMessage).waitForVisible();
        return $(this.successMessage).getText();
    }

    public pageTitle(): any {
        return browser.getTitle();
    }

    confirmationTitle(): string {
        $(this.titleText).waitForVisible();
        return $(this.titleText).getText();
    }

    isLoaded(condition) {
        try {
            browser.waitUntil(condition, 10000);
            return true;
        } catch (err) {
            return false;
        }
    }
}


