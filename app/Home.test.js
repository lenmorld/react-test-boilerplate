import React from 'react';
import { expect } from 'chai';
// import {  shallow, mount, render  } from 'enzyme';

// import Enzyme instance configured to adpater
import {  shallow, mount, render  } from './enzyme';

import Home from './Home';
import Header from './Header';

describe('<Home />', () => {
    it('renders haha', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find(Header)).to.exist;
    });
});
