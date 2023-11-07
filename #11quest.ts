// Store the names of your friends in an array
let names: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Print a personalized message to each person
console.log("Greetings to My Friends:");

for (let i = 0; i < names.length; i++) {
  const message = `Hello, ${names[i]}! I hope you're having a great day.`;
  console.log(message);
}
