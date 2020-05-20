import { Options } from '../interfaces/options.interface';
import { Component } from '../interfaces/component.interface';

export default class Ceres {
  public ctx: CanvasRenderingContext2D;
  public width: number;
  public height: number;

  private scene: any;

  constructor(
    public el: HTMLCanvasElement,
    readonly options: Options = { framerate: 60 }
  ) {
    this.el = el;
    this.width = el.getBoundingClientRect().width;
    this.height = el.getBoundingClientRect().height;
    this.ctx = el.getContext('2d') as CanvasRenderingContext2D;
    this.options = options;
  }

  loadScene(scene: Component): void {
    this.scene = scene;
  }

  render(): void {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.scene.draw(this.ctx);
    this.scene.update();
    requestAnimationFrame(this.render);
  }
}
