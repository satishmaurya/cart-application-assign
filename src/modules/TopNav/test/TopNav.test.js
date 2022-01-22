import React from 'react';
import { mount } from 'enzyme';
import TopNav from '../TopNav';

let wrapper;

describe('test cases for: Top Nav Bar component', () => {
  beforeAll(() => {
    wrapper = mount(<TopNav />);
  });
  it('Test to match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('Test Top Nav Bar find title text', () => {
    const titleTextFind = wrapper.find('#topNavTitleTest').at(0).props();
    expect(titleTextFind.children.props.children).toEqual('TEAMING');
  });
  it('Test Top Nav Bar find subtitle text', () => {
    const titleTextFind = wrapper.find('#subtitleTextTest').at(0).props();
    expect(titleTextFind.children.props.children).toEqual('People search');
  });
});
