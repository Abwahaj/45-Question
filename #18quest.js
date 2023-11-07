// Create an array with the updated guest list
var updatedGuestList = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie", "William Shakespeare", "Nelson Mandela"];
// Calculate the number of people you are inviting to dinner
var numberOfGuests = updatedGuestList.length;
// Print a message indicating the number of people invited to dinner
console.log("You are inviting ".concat(numberOfGuests, " people to dinner."));
// Print the final set of invitation messages for the guests
console.log("\nFinal Guest List and Invitations:");
for (var _i = 0, updatedGuestList_1 = updatedGuestList; _i < updatedGuestList_1.length; _i++) {
    var guest = updatedGuestList_1[_i];
    console.log("Dear ".concat(guest, ", we'd be honored to invite you to dinner. Please join us for an evening of great conversation and fine dining."));
}
