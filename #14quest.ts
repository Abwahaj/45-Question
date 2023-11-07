// Create an array with the original guest list
const originalGuestList: string[] = ["Albert Einstein", "Maya Angelou", "Leonardo da Vinci"];

// Store the name of the guest who can't make it
const guestWhoCantMakeIt: string = "Maya Angelou";

// Print a message about the guest who can't make it
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);

// Replace the guest who can't make it with a new guest
const newGuest: string = "Nelson Mandela";

// Update the guest list
const updatedGuestList: string[] = originalGuestList.filter((guest) => guest !== guestWhoCantMakeIt);
updatedGuestList.push(newGuest);

// Print a second set of invitation messages
console.log("\nUpdated Guest List and Invitations:");
for (const guest of updatedGuestList) {
  console.log(`Dear ${guest}, we'd be honored to invite you to dinner. Please join us for an evening of great conversation and fine dining.`);
}
