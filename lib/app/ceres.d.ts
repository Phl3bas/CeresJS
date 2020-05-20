import { Options } from '../interfaces/options.interface';
import { Component } from '../interfaces/component.interface';
export default class Ceres {
    el: HTMLCanvasElement;
    readonly options: Options;
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;
    private scene;
    constructor(el: HTMLCanvasElement, options?: Options);
    loadScene(scene: Component): void;
    render(): void;
}
//# sourceMappingURL=ceres.d.ts.map