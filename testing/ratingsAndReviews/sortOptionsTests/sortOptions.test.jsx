import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import SortOptions from '../../../client/src/components/ratingsAndReviews/SortOptions/SortOptions.jsx';

describe('<SortOptions />', () => {
  it('should render a div', () => {
    const wrapper = shallow(<SortOptions />);
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});