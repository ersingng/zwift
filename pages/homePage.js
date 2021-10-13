const {I}= inject();

module.exports ={
    elements: {
        tryFreeFor7Days: {
            css:'[data-testid="button-primary-orange]'
        },
        hamburgerMenu:{
            css: 'button.PrimaryNav-module__hamburger--1y_LN'
        }
    },

    async acceptCookies(){
        I.waitForElement("//*[@id='truste-consent-button']");
        I.click("//*[@id='truste-consent-button']");
    },

    async navigateToEvents(){
        I.wait(2);
        I.waitForElement(this.elements.hamburgerMenu);
        I.click(this.elements.hamburgerMenu);
        I.wait(2);
        I.waitForClickable("//a[@href='/events']");
        I.click("//a[@href='/events']");
        I.wait(2);
    },
    async verifyFreeDemoButton(){
        I.wait(3);
        I.see('TRY FREE FOR 7 DAYS');
    }
}
