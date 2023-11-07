// Store the person's name in a variable
var personName = "John Doe";
// Convert and print the name in lowercase
var lowercaseName = personName.toLowerCase();
console.log("Lowercase Name: " + lowercaseName);
// Convert and print the name in uppercase
var uppercaseName = personName.toUpperCase();
console.log("Uppercase Name: " + uppercaseName);
// Convert and print the name in title case
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}
var titleCaseName = toTitleCase(personName);
console.log("Title Case Name: " + titleCaseName);
