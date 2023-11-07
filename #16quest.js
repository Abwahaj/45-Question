// Create an array with the original guest list
var originalGuestList = ["Albert Einstein", "Maya Angelou", "Leonardo da Vinci", "Marie Curie", "William Shakespeare", "Nelson Mandela"];
// Print the original guest list
console.log("Original Guest List:");
for (var _i = 0, originalGuestList_1 = originalGuestList; _i < originalGuestList_1.length; _i++) {
    var guest = originalGuestList_1[_i];
    console.log("- ".concat(guest));
}
// Determine the number of guests to accommodate
var maxGuests = 2;
// If the guest list is larger than the maximum allowed guests, shrink it
if (originalGuestList.length > maxGuests) {
    var excessGuests = originalGuestList.splice(maxGuests); // Remove excess guests
    console.log("\nSorry, we can only accommodate two guests. The following guests have been uninvited:");
    for (var _a = 0, excessGuests_1 = excessGuests; _a < excessGuests_1.length; _a++) {
        var guest = excessGuests_1[_a];
        console.log("- ".concat(guest));
    }
}
// Print a final set of invitation messages for the remaining guests
console.log("\nFinal Guest List and Invitations:");
for (var _b = 0, originalGuestList_2 = originalGuestList; _b < originalGuestList_2.length; _b++) {
    var guest = originalGuestList_2[_b];
    console.log("Dear ".concat(guest, ", we'd be honored to invite you to dinner. Please join us for an evening of great conversation and fine dining."));
}
