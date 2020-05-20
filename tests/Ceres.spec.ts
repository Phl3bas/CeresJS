import Ceres from '../src/index';

describe('Ceres', () => {
  const el: HTMLCanvasElement = document.createElement('canvas');
  const app = new Ceres(el, { framerate: 60 });

  test('Ceres has a canvas element passed to it', () => {
    expect(app.el).toBeInstanceOf(HTMLCanvasElement);
  });

  test('Ceres creates a 2d context from element', () => {
    let newEl = el.getContext('2d');
    expect(app.ctx).toEqual(newEl);
  });

  test('Ceres has options passed to it', () => {
    expect(app.options).toBeTruthy();
  });

  test('Ceres options have value', () => {
    const fr = 60;
    expect(app.options.framerate).toEqual(fr);
  });
});
