var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Store the locations in an array
var placesToVisit = ["Paris", "Tokyo", "New York", "Santorini", "Bora Bora"];
// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying the original list
console.log("\nAlphabetical Order (without modifying the original list):");
console.log(__spreadArray([], placesToVisit, true).sort());
// Show that the original array is still in its original order
console.log("\nOriginal Order (original array is still intact):");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without modifying the original list
console.log("\nReverse Alphabetical Order (without modifying the original list):");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
// Show that the original array is still in its original order
console.log("\nOriginal Order (original array is still intact):");
console.log(placesToVisit);
// Reverse the order of the original list
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);
// Reverse the order of the original list again to restore the original order
placesToVisit.reverse();
console.log("\nOriginal Order (after reversing again):");
console.log(placesToVisit);
// Sort the array in alphabetical order and print it
placesToVisit.sort();
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit);
// Sort the array in reverse alphabetical order and print it
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);
