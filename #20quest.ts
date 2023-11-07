// Create an array of objects, each representing a famous landmark
const landmarks = [
    {
      name: "Eiffel Tower",
      location: "Paris, France",
      description: "Iconic iron tower known for its unique architecture.",
    },
    {
      name: "Great Wall of China",
      location: "China",
      description: "Long wall built to protect against invasions, with rich history.",
    },
    {
      name: "Machu Picchu",
      location: "Peru",
      description: "Ancient Inca city set high in the Andes mountains, known for its beauty and history.",
    },
    {
      name: "Taj Mahal",
      location: "Agra, India",
      description: "White marble mausoleum known for its stunning architecture and as a symbol of love.",
    },
  ];
  
  // Print information about each famous landmark
  console.log("Famous Landmarks:");
  
  for (const landmark of landmarks) {
    console.log(`Name: ${landmark.name}`);
    console.log(`Location: ${landmark.location}`);
    console.log(`Description: ${landmark.description}`);
    console.log();
  }
  