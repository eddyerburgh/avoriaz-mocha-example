import { mount } from 'avoriaz';
import { expect } from 'chai'
import Bar from '../src/components/Bar.vue';

describe('Bar.vue', () => {
  it('renders a div with class bar', () => {
    const wrapper = mount(Bar);
    expect(wrapper.is('div')).to.equal(true);
    expect(wrapper.hasClass('bar')).to.equal(true);
  });
});
