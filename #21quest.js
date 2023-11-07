// Create an array of objects, each representing a famous landmark
var landmarks = [
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
for (var _i = 0, landmarks_1 = landmarks; _i < landmarks_1.length; _i++) {
    var landmark = landmarks_1[_i];
    console.log("Name: ".concat(landmark.name));
    console.log("Location: ".concat(landmark.location));
    console.log("Description: ".concat(landmark.description));
    console.log();
}
