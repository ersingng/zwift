const { I } = inject();

Given('I navigate to home page', () => {
  I.amOnPage('/');
  I.seeInCurrentUrl('zwift');
});

Given('I accept cookies', async () => {
  I.waitForElement("//*[@id='truste-consent-button']");
  I.click("//*[@id='truste-consent-button']");
});

When('I navigate to events page', () => {
  I.click('button.PrimaryNav-module__hamburger--1y_LN');
  I.wait(2);
  //I.click("//a[href=/events]");
  I.wait(2);
});

When('I select sports, intensities and start times fields and apply the filter', () => {
  I.click('button.filter-toggle');
  I.click("//button[@type='button'][contains(@value, 'CYCLING')]");
  I.click("//button[@type='button'][contains(@value, '1')]");
  I.click("//button[@type='button'][contains(@value, 'evening')]");
  I.wait(3);
  I.click('button.apply-button');
});

Then('I validate events have changed', () => {
  I.seeElement("div.events-column");
});
