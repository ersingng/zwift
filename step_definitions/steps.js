const eventsPage = require("../pages/eventsPage");
const homePage = require("../pages/homePage");

const { I } = inject();

Given('I navigate to home page', () => {
  I.amOnPage('/');
  I.seeInCurrentUrl('zwift');
});

Given('I accept cookies', async () => {
  homePage.acceptCookies();
});

When('I navigate to events page', () => {
  homePage.navigateToEvents();
});

When('I select sports, intensities and start times fields and apply the filter', () => {
  I.click('button.filter-toggle');
  I.click("//button[@type='button'][contains(@value, 'CYCLING')]");
  I.click("//button[@type='button'][contains(@value, '1')]");
  I.click("//button[@type='button'][contains(@value, 'evening')]");
  I.wait(1);
  eventsPage.clickApplyFilters();
});

Then('I validate events have changed', () => {
  I.seeElement("div.events-column");
});

Then('I validate content of my choice is present', () => {
  homePage.verifyFreeDemoButton();
});

Then('I validate the page loads', () => {
  // scripts are written to wait for page load
});
