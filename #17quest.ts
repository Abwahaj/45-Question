// Store the locations in an array
const placesToVisit: string[] = ["Paris", "Tokyo", "New York", "Santorini", "Bora Bora"];

// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the original list
console.log("\nAlphabetical Order (without modifying the original list):");
console.log([...placesToVisit].sort());

// Show that the original array is still in its original order
console.log("\nOriginal Order (original array is still intact):");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without modifying the original list
console.log("\nReverse Alphabetical Order (without modifying the original list):");
console.log([...placesToVisit].sort().reverse());

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
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);
