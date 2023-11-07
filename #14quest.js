// Create an array with the original guest list
var originalGuestList = ["Albert Einstein", "Maya Angelou", "Leonardo da Vinci"];
// Print the original guest list
console.log("Original Guest List:");
for (var _i = 0, originalGuestList_1 = originalGuestList; _i < originalGuestList_1.length; _i++) {
    var guest = originalGuestList_1[_i];
    console.log("- ".concat(guest));
}
// Replace the guest who can't make it with a new guest
var guestWhoCantMakeIt = "Maya Angelou";
var newGuest = "Nelson Mandela";
// Update the guest list
var updatedGuestList = originalGuestList.filter(function (guest) { return guest !== guestWhoCantMakeIt; });
updatedGuestList.push(newGuest);
// Print the updated guest list
console.log("\nUpdated Guest List:");
for (var _a = 0, updatedGuestList_1 = updatedGuestList; _a < updatedGuestList_1.length; _a++) {
    var guest = updatedGuestList_1[_a];
    console.log("- ".concat(guest));
}
// Send a new invitation to the new guest
console.log("\nDear ".concat(newGuest, ", we regret to inform you that ").concat(guestWhoCantMakeIt, " can't make it to the dinner. We'd be honored to invite you in their place. Please join us for an evening of great conversation and fine dining."));
