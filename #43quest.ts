function make_sandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    for (const item of items) {
      console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!\n");
  }
  
  // Call the function with different numbers of arguments
  make_sandwich("Turkey", "Lettuce", "Tomato", "Mayo");
  make_sandwich("Ham", "Cheese");
  make_sandwich("Peanut Butter", "Jelly", "Banana");
  