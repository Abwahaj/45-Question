// Tests for equality and inequality with strings
console.log("String Equality Test: 'apple' == 'apple'. I predict True.");
console.log("apple" == "apple");

console.log("String Inequality Test: 'apple' != 'banana'. I predict True.");
console.log("apple" != "banana");

console.log("String Equality Test (Case Insensitive): 'Hello' == 'hello'. I predict False.");
console.log("Hello".toLowerCase() == "hello".toLowerCase());

// Numerical tests
console.log("Numerical Equality Test: 5 == 5. I predict True.");
console.log(5 == 5);

console.log("Numerical Inequality Test: 7 != 3. I predict True.");
console.log(7 != 3);

console.log("Greater Than Test: 10 > 5. I predict True.");
console.log(10 > 5);

console.log("Less Than Test: 3 < 8. I predict True.");
console.log(3 < 8);

console.log("Greater Than or Equal To Test: 7 >= 7. I predict True.");
console.log(7 >= 7);

console.log("Less Than or Equal To Test: 4 <= 4. I predict True.");
console.log(4 <= 4);

// Tests using "and" and "or" operators
console.log("And Operator Test: true && false. I predict False.");
console.log(true && false);

console.log("Or Operator Test: true || false. I predict True.");
console.log(true || false);

// Test whether an item is in an array
const fruits = ["apple", "banana", "cherry", "date"];
console.log("Item in Array Test: 'banana' in fruits. I predict True.");
console.log("banana" in fruits);

console.log("Item Not in Array Test: 'kiwi' in fruits. I predict False.");
console.log("kiwi" in fruits);
