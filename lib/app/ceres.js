"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ceres = /** @class */ (function () {
    function Ceres(el, options) {
        if (options === void 0) { options = { framerate: 60 }; }
        this.el = el;
        this.options = options;
        this.el = el;
        this.width = el.getBoundingClientRect().width;
        this.height = el.getBoundingClientRect().height;
        this.ctx = el.getContext('2d');
        this.options = options;
    }
    Ceres.prototype.loadScene = function (scene) {
        this.scene = scene;
    };
    Ceres.prototype.render = function () {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.scene.draw(this.ctx);
        this.scene.update();
        requestAnimationFrame(this.render);
    };
    return Ceres;
}());
exports.default = Ceres;
//# sourceMappingURL=ceres.js.map