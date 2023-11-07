// Create a list of people to invite to dinner
var guestList = ["Albert Einstein", "Maya Angelou", "Leonardo da Vinci"];
// Print invitation messages to each person
console.log("Dinner Invitations:");
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", I would be honored to invite you to dinner. Please join me for an evening of great conversation and fine dining."));
}
