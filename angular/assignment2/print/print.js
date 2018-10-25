"use strict";
exports.__esModule = true;
var Friend_1 = require("../friend/Friend");
var friennds = [new Friend_1.Friend("bob", 30, "abc@sss.com", false),
    new Friend_1.Friend("john", 20, "john@sss.com", false),
    new Friend_1.Friend("mary", 40, "mary@sss.com", false),
    new Friend_1.Friend("doe", 32, "doe@sss.com", false),
    new Friend_1.Friend("kevin", 30, "kevin@sss.com", true)];
friennds.sort(compareFn).forEach(function (element) {
    console.log(element.name + " " + element.age + " " + element.email + " " + element.bestFriend);
});
console.log('Done...');
function compareFn(a, b) {
    if (a === b)
        return 0;
    return (a['age'] > b['age']) ? 1 : -1;
}
