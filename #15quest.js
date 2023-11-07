// Create an array with the original guest list
var originalGuestList = ["Albert Einstein", "Maya Angelou", "Leonardo da Vinci"];
// Store the name of the guest who can't make it
var guestWhoCantMakeIt = "Maya Angelou";
// Print a message about the guest who can't make it
console.log("".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
// Replace the guest who can't make it with a new guest
var newGuest = "Nelson Mandela";
// Update the guest list
var updatedGuestList = originalGuestList.filter(function (guest) { return guest !== guestWhoCantMakeIt; });
updatedGuestList.push(newGuest);
// Print a second set of invitation messages for the updated guest list
console.log("\nUpdated Guest List and Invitations:");
for (var _i = 0, updatedGuestList_1 = updatedGuestList; _i < updatedGuestList_1.length; _i++) {
    var guest = updatedGuestList_1[_i];
    console.log("Dear ".concat(guest, ", we'd be honored to invite you to dinner. Please join us for an evening of great conversation and fine dining."));
}
// Extend the guest list with three more guests
var additionalGuests = ["Marie Curie", "William Shakespeare", "Nelson Mandela"];
updatedGuestList.push.apply(updatedGuestList, additionalGuests);
// Print invitation messages for the additional guests
console.log("\nExtended Guest List and Invitations:");
for (var _a = 0, additionalGuests_1 = additionalGuests; _a < additionalGuests_1.length; _a++) {
    var guest = additionalGuests_1[_a];
    console.log("Dear ".concat(guest, ", we'd be honored to invite you to dinner. Please join us for an evening of great conversation and fine dining."));
}
