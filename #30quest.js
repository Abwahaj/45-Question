// Create an array of usernames
var usernames = ["admin", "Eric", "Alice", "John", "Sarah", "admin123"];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Loop through the array and print greetings
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
// Remove all usernames to demonstrate the "empty list" message
usernames.length = 0;
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
