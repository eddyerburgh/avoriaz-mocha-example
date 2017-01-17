import { expect } from 'chai';
import { mount } from 'avoriaz'

import Foo from '../src/components/Foo.vue';

describe('Foo', () => {
  it('toggles class active when clicked', () => {
    const wrapper = mount(Foo);

    expect(wrapper.hasClass('active')).to.equal(false);

    wrapper.simulate('click');

    expect(wrapper.hasClass('active')).to.equal(true);
  });

  it('renders a p tag with id text', () => {
    const wrapper = mount(Foo);
    const p = wrapper.find('p')[0];
    expect(p.is('#text')).to.equal(true);
  });

  it('renders a p tag that includes text "Some text"', () => {
    const wrapper = mount(Foo);
    const p = wrapper.find('p')[0];
    expect(p.text()).to.equal('Some text');
  })
});