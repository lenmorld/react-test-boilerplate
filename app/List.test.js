import React from 'react';
import { shallow } from './enzyme';

import List from './List';

describe('<List />', () => {
    it('renders items', () => {
        const items = [{ id: 1, name: "eggs" }, { id: 2, name: "spam"}];

        const wrapper = shallow(<List items={items} />);

        // expect wrapper to be defined
        expect(wrapper.find(".list")).toBeDefined();
        expect(wrapper.find(".item")).toHaveLength(items.length);
        // console.log(wrapper);
    });
});