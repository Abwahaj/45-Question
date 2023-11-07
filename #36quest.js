function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You have ordered a ".concat(size, "-sized T-shirt with the message: \"").concat(message, "\"."));
}
// Create a large shirt with the default message
make_shirt();
// Create a medium shirt with the default message
make_shirt("Medium");
// Create a small shirt with a custom message
make_shirt("Small", "TypeScript is awesome!");
