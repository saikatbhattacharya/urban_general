import { client } from 'nightwatch-cucumber';
import { defineSupportCode } from 'cucumber';

defineSupportCode(({ Given, Then }) => {
  Given(/^I click the "Increment" button$/, () => client.click('#increment_button'));

  Then(/^the value becomes 2$/, () => client.assert.containsText('#value', 'Value: 2'));

  Then(/^the value becomes 4$/, () => client.assert.containsText('#value', 'Value: 4'));

  Then(/^the value becomes 7$/, () => client.assert.containsText('#value', 'Value: 7'));
});
