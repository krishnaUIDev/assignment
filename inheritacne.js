var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.helo = function () {
        console.log(this.name + "is dancing");
    };
    return Person;
}());
var ben = new Person("krisna");
ben.helo();
var Awsome = /** @class */ (function (_super) {
    __extends(Awsome, _super);
    function Awsome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Awsome.prototype.helo = function () {
        console.log("awsome dance");
    };
    return Awsome;
}(Person));
var chandu = new Person("munni");
chandu.helo();
