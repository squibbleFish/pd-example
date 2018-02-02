import React from 'react';
import { shallow, mount } from 'enzyme';

import { SearchBar } from '../containers/search-bar';

describe('Renders a search bar', () => {
  it('should render', function () {
    const wrapper = shallow(<SearchBar search={ { search: '' } } />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle onchange', function () {
    const jestFunction = (value) => {
      return value;
    };
    const wrapper = mount(<SearchBar search={ { search: '' } } searchThemes={ jestFunction }/>);
    wrapper.find('input').simulate('change', { target: {
      value: 'Change this'
      }
    });
    expect(wrapper).toMatchSnapshot();
  });
});