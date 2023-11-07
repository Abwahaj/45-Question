// Create an array of your three favorite fruits
const favorite_fruits: string[] = ['bananas', 'strawberries', 'apples'];

// Check for specific fruits in the array and print statements accordingly
if (favorite_fruits.includes('bananas')) {
  console.log("You really like bananas!");
}

if (favorite_fruits.includes('strawberries')) {
  console.log("You really like strawberries!");
}

if (favorite_fruits.includes('apples')) {
  console.log("You really like apples!");
}

if (favorite_fruits.includes('oranges')) {
  console.log("You like oranges, but they're not in your top three.");
}

if (favorite_fruits.includes('kiwi')) {
  console.log("You like kiwi, but it's not in your top three.");
}
