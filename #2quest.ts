// Store the person's name in a variable
let personName: string = "John Doe";

// Convert and print the name in lowercase
let lowercaseName: string = personName.toLowerCase();
console.log("Lowercase Name: " + lowercaseName);

// Convert and print the name in uppercase
let uppercaseName: string = personName.toUpperCase();
console.log("Uppercase Name: " + uppercaseName);

// Convert and print the name in title case
function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

let titleCaseName: string = toTitleCase(personName);
console.log("Title Case Name: " + titleCaseName);
