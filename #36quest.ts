function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`You have ordered a ${size}-sized T-shirt with the message: "${message}".`);
  }
  
  // Create a large shirt with the default message
  make_shirt();
  
  // Create a medium shirt with the default message
  make_shirt("Medium");
  
  // Create a small shirt with a custom message
  make_shirt("Small", "TypeScript is awesome!");
  