var hw = "Hello, world";
var nameq = " student";
console.log(hw, nameq);
var arr = [];
arr.push(1);
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Blue"] = 6] = "Blue";
    Color[Color["Green"] = 7] = "Green";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c);
console.log(typeof c);
var Customer = /** @class */ (function () {
    function Customer() {
        this.name = "aaaaaaaa";
    }
    Object.defineProperty(Customer.prototype, "namew", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
var ccc = new Customer();
var nnn = ccc.namew;
console.log(nnn);
