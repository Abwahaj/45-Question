// Create a list of current usernames
const current_users: string[] = ["John", "Alice", "Bob", "Eve", "Mallory"];

// Create a list of new usernames
const new_users: string[] = ["eric", "ALICE", "john", "dave", "Eve"];

// Loop through the new_users list and check for unique usernames
for (const newUsername of new_users) {
  // Check for case-insensitive matches
  const isUsernameTaken = current_users.some((existingUsername) =>
    existingUsername.toLowerCase() === newUsername.toLowerCase()
  );

  if (isUsernameTaken) {
    console.log(`Username "${newUsername}" is already taken. Please enter a new username.`);
  } else {
    console.log(`Username "${newUsername}" is available.`);
  }
}
