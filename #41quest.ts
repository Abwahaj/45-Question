function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = `the Great ${magicians[i]}`;
    }
  }
  
  // Array of magician's names
  const magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  
  // Call make_great to modify the magicians
  make_great(magicianNames);
  
  // Call show_magicians to display the modified magician names
  show_magicians(magicianNames);

  