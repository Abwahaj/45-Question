function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
  
    for (let i = 0; i < magicians.length; i++) {
      greatMagicians.push(`the Great ${magicians[i]}`);
    }
  
    return greatMagicians;
  }
  
  // Array of magician's names
  const magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  
  // Call make_great to create a new array with "the Great" added to names
  const greatMagicianNames = make_great([...magicianNames]);
  
  // Call show_magicians to display the original and modified magician names
  console.log("Original Magician Names:");
  show_magicians(magicianNames);
  
  console.log("\nModified Magician Names (the Great added):");
  show_magicians(greatMagicianNames);

  