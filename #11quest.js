// Store the names of your friends in an array
var names = ["Alice", "Bob", "Charlie", "David", "Eve"];
// Print a personalized message to each person
console.log("Greetings to My Friends:");
for (var i = 0; i < names.length; i++) {
    var message = "Hello, ".concat(names[i], "! I hope you're having a great day.");
    console.log(message);
}
