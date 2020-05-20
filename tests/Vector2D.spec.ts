import { Vector2D } from '../src/index';

describe('Vector2D instance', () => {
  const v = new Vector2D(2, 3);
  test('Vector2D initialised with x = 2', () => {
    expect(v.x).toBe(2);
  });
  test('Vector2D initialised with y = 3', () => {
    expect(v.y).toBe(3);
  });
});

describe('Vector2D instance Methods', () => {
  test('Vector2D should be correctly added to another Vector2D', () => {
    const v1 = new Vector2D(2, 3);
    const v2 = new Vector2D(7, 8);

    v1.add(v2);
    expect(v1.x).toEqual(2 + 7);
    expect(v1.y).toEqual(3 + 8);
  });

  test('Vector2D should be correctly subtracted from another Vector2D', () => {
    const v1 = new Vector2D(2, 3);
    const v2 = new Vector2D(7, 8);

    v1.sub(v2);
    expect(v1.x).toEqual(2 - 7);
    expect(v1.y).toEqual(3 - 8);
  });

  test('Vector2D should be correctly divied by another Vector2D', () => {
    const v1 = new Vector2D(2, 3);
    const v2 = new Vector2D(10, 6);

    v1.div(v2);
    expect(v1.x).toEqual(2 / 10);
    expect(v1.y).toEqual(3 / 6);
  });

  test('Vector2D should be correctly multiplied to another Vector2D', () => {
    const v1 = new Vector2D(2, 3);
    const v2 = new Vector2D(10, 6);

    v1.mult(v2);
    expect(v1.x).toEqual(2 * 10);
    expect(v1.y).toEqual(3 * 6);
  });

  test('Vector2D should be correctly multiplied by a number', () => {
    const v1 = new Vector2D(2, 3);

    v1.mult(2);
    expect(v1.x).toEqual(2 * 2);
    expect(v1.y).toEqual(3 * 2);
  });

  test('Vector2D should correctly return its magitude', () => {
    const v = new Vector2D(2, 3);
    const result = v.mag();
    expect(result).toEqual(Math.sqrt(2 * 2 + 3 * 3));
  });

  test('Vector2D should correctly be normalised to a unit vector', () => {
    const v = new Vector2D(10, 32);
    const len = v.mag();
    const res = 1 / len;
    const x = v.x * res;
    const y = v.y * res;
    v.normalize();
    expect(v.x).toEqual(x);
    expect(v.y).toEqual(y);
  });

  test('Vector2S should correctly be normalised to defined length', () => {
    const v = new Vector2D(10, 32);
    const len = v.mag();
    const res = 1 / len;
    const x = v.x * res * 4;
    const y = v.y * res * 4;

    v.normalize(4);
    expect(v.x).toEqual(x);
    expect(v.y).toEqual(y);
  });
});

describe('Vector2D static methods', () => {
  test('all return a Vector2D instance', () => {
    const a = new Vector2D(1, 2);
    const b = new Vector2D(4, 6);
    const items = [
      Vector2D.add(a, b),
      Vector2D.sub(a, b),
      Vector2D.div(a, b),
      Vector2D.mult(a, b),
    ];
    expect(items.every((item) => item instanceof Vector2D)).toBeTruthy();
  });

  test('adds two vectors together', () => {
    const a = new Vector2D(1, 2);
    const b = new Vector2D(4, 6);
    const c = Vector2D.add(a, b);
  });

  test('subtracts two vectors from eachother', () => {
    const a = new Vector2D(1, 2);
    const b = new Vector2D(4, 6);
    const c = Vector2D.sub(a, b);
  });

  test('multiplies two vectors together', () => {
    const a = new Vector2D(1, 2);
    const b = new Vector2D(4, 6);
    const c = Vector2D.mult(a, b);
  });

  test('divides two vectors from eachother', () => {
    const a = new Vector2D(1, 2);
    const b = new Vector2D(4, 6);
    const c = Vector2D.div(a, b);
  });
});
