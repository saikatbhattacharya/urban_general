const basicRender = (browser) => {
  browser
    .url(browser.launchUrl)
    .waitForElementVisible('#value', 5000)
    .waitForElementVisible('#increment_button', 5000)
    .waitForElementVisible('#decrement_button', 5000);
};

const incrementAction = (browser) => {
  browser.expect.element('#value').text.to.equal('Value: 1');
  browser.click('#increment_button');
  browser.expect.element('#value').text.to.equal('Value: 2');
  browser.click('#increment_button');
  browser.expect.element('#value').text.to.equal('Value: 3');
  browser.click('#increment_button');
  browser.expect.element('#value').text.to.equal('Value: 4');
  browser.click('#increment_button');
  browser.expect.element('#value').text.to.equal('Value: 5');
};

const decrementAction = (browser) => {
  browser.expect.element('#value').text.to.equal('Value: 5');
  browser.click('#decrement_button');
  browser.expect.element('#value').text.to.equal('Value: 4');
  browser.click('#decrement_button');
  browser.expect.element('#value').text.to.equal('Value: 3');
  browser.click('#decrement_button');
  browser.expect.element('#value').text.to.equal('Value: 2');
  browser.click('#decrement_button');
  browser.expect.element('#value').text.to.equal('Value: 1');
  browser.end();
};

export default {
  'Basic Renders': basicRender,
  'Increment Actions': incrementAction,
  'Decrement Actions': decrementAction,
};
