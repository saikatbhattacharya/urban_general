import { client } from 'nightwatch-cucumber';
import { defineSupportCode } from 'cucumber';

defineSupportCode(({ Then }) => {
  Then(/^I click the "Increment" button$/, () => {
    return client.click('#increment_button');
  });

  Then(/^the value becomes 2$/, () => {
    return client.assert.containsText('#value', 'Value: 2');
  });
});
