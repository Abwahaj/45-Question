// Create a list of current usernames
var current_users = ["John", "Alice", "Bob", "Eve", "Mallory"];
// Create a list of new usernames
var new_users = ["eric", "ALICE", "john", "dave", "Eve"];
var _loop_1 = function (newUsername) {
    // Check for case-insensitive matches
    var isUsernameTaken = current_users.some(function (existingUsername) {
        return existingUsername.toLowerCase() === newUsername.toLowerCase();
    });
    if (isUsernameTaken) {
        console.log("Username \"".concat(newUsername, "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("Username \"".concat(newUsername, "\" is available."));
    }
};
// Loop through the new_users list and check for unique usernames
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var newUsername = new_users_1[_i];
    _loop_1(newUsername);
}
