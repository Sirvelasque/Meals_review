/**
 * @jest-environment jsdom
 */
import { itemCounter } from './modules/ui.js';

describe('Items counter tests', () => {
  document.body.innerHTML = '<section id="app">'
  + '<div class="box"></div>'
  + '<div class="box"></div>'
  + '<div class="box"></div>'
  + '</section>';
  it('First count', () => {
    const count = itemCounter();
    expect(count).toBe(3);
  });

  it('second count', () => {
    document.body.innerHTML = '<section id="app">'
    + '<div class="box"></div>'
    + '<div class="box"></div>'
    + '</section>';
    const count = itemCounter();
    expect(count).toBe(2);
  });

  it('third count', () => {
    document.querySelector('section').innerHTML += '<div class="box"></div>'
    + '<div class="box"></div>';
    const count = itemCounter();
    expect(count).toBe(4);
  });
});