import { Coord2D } from '../interfaces/coord.interface';

export class Vector2D implements Coord2D {
  constructor(public x: number = 0, public y: number = 0) {
    this.x = x;
    this.y = y;
  }

  mag(): number {
    const x = this.x;
    const y = this.y;
    return Math.sqrt(x * x + y * y);
  }

  normalize(n: number = 1): void {
    const len = this.mag();
    if (len !== 0) {
      this.mult(1 / len).mult(n);
    }
  }

  static add(v: Vector2D, z: Vector2D): Vector2D {
    return new Vector2D(v.x + z.x, v.y + z.y);
  }

  add(v: Vector2D): Vector2D {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  static sub(v: Vector2D, z: Vector2D): Vector2D {
    return new Vector2D(v.x - z.x, v.y - z.y);
  }

  sub(v: Vector2D): Vector2D {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  static div(v: Vector2D, z: Vector2D): Vector2D {
    return new Vector2D(v.x / z.x, v.y / z.y);
  }

  div(v: Vector2D): Vector2D {
    this.x /= v.x;
    this.y /= v.y;
    return this;
  }

  static mult(v: Vector2D, z: Vector2D): Vector2D {
    return new Vector2D(v.x * z.x, v.y * z.y);
  }

  mult(v: Vector2D | number): Vector2D {
    if (v instanceof Vector2D) {
      this.x *= v.x;
      this.y *= v.y;
    }
    if (typeof v === 'number') {
      this.x *= v;
      this.y *= v;
    }

    return this;
  }
}
