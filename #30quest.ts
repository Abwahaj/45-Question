// Create an array of usernames
const usernames: string[] = ["admin", "Eric", "Alice", "John", "Sarah", "admin123"];

if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  // Loop through the array and print greetings
  for (const username of usernames) {
    if (username === 'admin') {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}

// Remove all usernames to demonstrate the "empty list" message
usernames.length = 0;
if (usernames.length === 0) {
  console.log("We need to find some users!");
}
