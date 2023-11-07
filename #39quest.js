function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three album dictionaries and print their values
var album1 = make_album("Artist1", "Album One");
var album2 = make_album("Artist2", "Album Two", 12); // Including the number of tracks
var album3 = make_album("Artist3", "Album Three");
console.log(album1);
console.log(album2);
console.log(album3);
