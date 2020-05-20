"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2D = void 0;
var Vector2D = /** @class */ (function () {
    function Vector2D(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    Vector2D.prototype.mag = function () {
        var x = this.x;
        var y = this.y;
        return Math.sqrt(x * x + y * y);
    };
    Vector2D.prototype.normalize = function (n) {
        if (n === void 0) { n = 1; }
        var len = this.mag();
        if (len !== 0) {
            this.mult(1 / len).mult(n);
        }
    };
    Vector2D.add = function (v, z) {
        return new Vector2D(v.x + z.x, v.y + z.y);
    };
    Vector2D.prototype.add = function (v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    };
    Vector2D.sub = function (v, z) {
        return new Vector2D(v.x - z.x, v.y - z.y);
    };
    Vector2D.prototype.sub = function (v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    };
    Vector2D.div = function (v, z) {
        return new Vector2D(v.x / z.x, v.y / z.y);
    };
    Vector2D.prototype.div = function (v) {
        this.x /= v.x;
        this.y /= v.y;
        return this;
    };
    Vector2D.mult = function (v, z) {
        return new Vector2D(v.x * z.x, v.y * z.y);
    };
    Vector2D.prototype.mult = function (v) {
        if (v instanceof Vector2D) {
            this.x *= v.x;
            this.y *= v.y;
        }
        if (typeof v === 'number') {
            this.x *= v;
            this.y *= v;
        }
        return this;
    };
    return Vector2D;
}());
exports.Vector2D = Vector2D;
//# sourceMappingURL=vector2D.js.map