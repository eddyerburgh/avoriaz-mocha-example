import { expect } from 'chai';
import { mount } from 'avoriaz'

import Child from '../src/Child.vue';

describe('Child', () => {
  it('toggles class active when clicked', () => {
    const wrapper = mount(Child);

    expect(wrapper.hasClass('active')).to.equal(false);

    wrapper.simulate('click');

    expect(wrapper.hasClass('active')).to.equal(true);
  });

  it('renders a p tag with id text', () => {
    const wrapper = mount(Child);
    const p = wrapper.find('p')[0];
    expect(p.is('#text')).to.equal(true);
  });

  it('renders a p tag that includes text "Some text"', () => {
    const wrapper = mount(Child);
    const p = wrapper.find('p')[0];
    console.log(p);
    console.log(p.element.innerText());
    expect(p.text()).to.equal('Some text');
  })
});