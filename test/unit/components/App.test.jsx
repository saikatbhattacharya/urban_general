import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from 'components/App';

const initiator = () => {
  const props = {
    value: 1,
    increment: () => ({}),
    decrement: () => ({}),
  };

  const wrapper = shallow(<App {...props} />);

  return { wrapper, props };
};

describe('Testing App Component', () => {
  describe('Rendering Tests', () => {
    const { wrapper } = initiator();

    it('must render component', () => {
      expect(wrapper.exists()).to.be.true;
    });

    it('Must render the p element', () => {
      expect(wrapper.find('p').exists()).to.be.true;
      expect(wrapper.find('p').text()).to.be.eql('Value: 1');
    });

    it('Must render the increment button', () => {
      expect(wrapper.find('#increment_button').exists()).to.be.true;
    });

    it('Must render the decrement button', () => {
      expect(wrapper.find('#decrement_button').exists()).to.be.true;
    });
  });
});
