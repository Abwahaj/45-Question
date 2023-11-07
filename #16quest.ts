// Create an array with the original guest list
const originalGuestList: string[] = ["Albert Einstein", "Maya Angelou", "Leonardo da Vinci", "Marie Curie", "William Shakespeare", "Nelson Mandela"];

// Print the original guest list
console.log("Original Guest List:");
for (const guest of originalGuestList) {
  console.log(`- ${guest}`);
}

// Determine the number of guests to accommodate
const maxGuests: number = 2;

// If the guest list is larger than the maximum allowed guests, shrink it
if (originalGuestList.length > maxGuests) {
  const excessGuests = originalGuestList.splice(maxGuests); // Remove excess guests
  console.log("\nSorry, we can only accommodate two guests. The following guests have been uninvited:");
  for (const guest of excessGuests) {
    console.log(`- ${guest}`);
  }
}

// Print a final set of invitation messages for the remaining guests
console.log("\nFinal Guest List and Invitations:");
for (const guest of originalGuestList) {
  console.log(`Dear ${guest}, we'd be honored to invite you to dinner. Please join us for an evening of great conversation and fine dining.`);
}
