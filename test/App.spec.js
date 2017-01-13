import { expect } from 'chai';
import { mount } from 'avoriaz'

import App from '../src/App.vue';

describe('App', () => {
  it('renders a div', () => {
    const wrapper = mount(App);
    expect(wrapper.is('div')).to.equal(true);
  });
  it('has an id of app', () => {
    const wrapper = mount(App);
    expect(wrapper.is('#app')).to.equal(true);
  })
});