var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great ".concat(magicians[i]));
    }
    return greatMagicians;
}
// Array of magician's names
var magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call make_great to create a new array with "the Great" added to names
var greatMagicianNames = make_great(__spreadArray([], magicianNames, true));
// Call show_magicians to display the original and modified magician names
console.log("Original Magician Names:");
show_magicians(magicianNames);
console.log("\nModified Magician Names (the Great added):");
show_magicians(greatMagicianNames);
