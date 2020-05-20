import { Coord2D } from '../interfaces/coord.interface';
export declare class Vector2D implements Coord2D {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    mag(): number;
    normalize(n?: number): void;
    static add(v: Vector2D, z: Vector2D): Vector2D;
    add(v: Vector2D): Vector2D;
    static sub(v: Vector2D, z: Vector2D): Vector2D;
    sub(v: Vector2D): Vector2D;
    static div(v: Vector2D, z: Vector2D): Vector2D;
    div(v: Vector2D): Vector2D;
    static mult(v: Vector2D, z: Vector2D): Vector2D;
    mult(v: Vector2D | number): Vector2D;
}
//# sourceMappingURL=vector2D.d.ts.map