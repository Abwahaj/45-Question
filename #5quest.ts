// Store the name with leading and trailing whitespace
const nameWithWhitespace: string = "\t\n  John Doe \t\n";

// Print the name with whitespace
console.log("Name with Whitespace:");
console.log(nameWithWhitespace);

// Strip the whitespace and print the name without it
const nameStripped: string = nameWithWhitespace.trim();
console.log("\nName Stripped of Whitespace:");
console.log(nameStripped);
