// Create an array with the updated guest list
const updatedGuestList: string[] = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie", "William Shakespeare", "Nelson Mandela"];

// Calculate the number of people you are inviting to dinner
const numberOfGuests: number = updatedGuestList.length;

// Print a message indicating the number of people invited to dinner
console.log(`You are inviting ${numberOfGuests} people to dinner.`);

// Print the final set of invitation messages for the guests
console.log("\nFinal Guest List and Invitations:");
for (const guest of updatedGuestList) {
  console.log(`Dear ${guest}, we'd be honored to invite you to dinner. Please join us for an evening of great conversation and fine dining.`);
}
