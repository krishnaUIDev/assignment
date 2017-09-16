var start = /** @class */ (function () {
    function start() {
        this.saying = start.cast;
    }
    start.prototype.helo = function (person) {
        console.log("helo" + person);
    };
    start.cast = "winter fell";
    return start;
}());
var ned = new start();
ned.saying = "iwnter i socm";
console.log(start.cast);
ned.helo("fucker");
