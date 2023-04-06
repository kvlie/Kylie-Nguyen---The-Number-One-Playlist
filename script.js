// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let imageUrlDisplay = document.querySelector(".display-image");
let songNameDisplay = document.querySelector(".display-song");
let artistNameDisplay = document.querySelector(".display-artist");
let songLinkDisplay = document.querySelector(".display-link");

// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

let imageUrlsList = ["https://i.ytimg.com/vi/-L7eMf6Yf84/maxresdefault.jpg","https://www.allkpop.com/upload/2023/01/content/070822/web_data/allkpop_1673098394_202212191833-main.jpg", "https://www.nme.com/wp-content/uploads/2023/01/newjeans-ador-hybe-090123.jpg", "https://i.ytimg.com/vi/11cta61wi0g/maxresdefault.jpg","https://www.nme.com/wp-content/uploads/2022/07/ador-newjeans-attention-debut-music-video-hybe-girl-group.jpg","https://www.nme.com/wp-content/uploads/2022/08/newjeans-debut-ep-release-cookie-music-video.jpg"];

let songNamesList = ["Hurt", "Ditto", "OMG", "Hype Boy", "Attention", "Cookie"];

let artistNamesList = ["New Jeans","New Jeans","New Jeans","New Jeans","New Jeans","New Jeans"];

let songLinksList = ["https://youtu.be/tVIXY14aJms", "https://youtu.be/pSUydWEqKwE", "https://youtu.be/_ZAgIHmHLdc", "https://youtu.be/11cta61wi0g", "https://youtu.be/js1CtxSY38I",
"https://youtu.be/VOmIplFAGeg"];


//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.

//let imageUrlsList = ["https://i.ytimg.com/vi/-L7eMf6Yf84/maxresdefault.jpg","https://www.allkpop.com/upload/2023/01/content/070822/web_data/allkpop_1673098394_202212191833-main.jpg", "https://www.nme.com/wp-content/uploads/2023/01/newjeans-ador-hybe-090123.jpg", "https://i.ytimg.com/vi/11cta61wi0g/maxresdefault.jpg","https://www.nme.com/wp-content/uploads/2022/07/ador-newjeans-attention-debut-music-video-hybe-girl-group.jpg","https://www.nme.com/wp-content/uploads/2022/08/newjeans-debut-ep-release-cookie-music-video.jpg"];

// let songNamesList = ["Hurt", "Ditto", "OMG", "Hype Boy", "Attention", "Cookie"];

// let artistNamesList = ["New Jeans","New Jeans","New Jeans","New Jeans","New Jeans","New Jeans"];

// let songLinksList = ["https://youtu.be/tVIXY14aJms", "https://youtu.be/pSUydWEqKwE", "https://youtu.be/_ZAgIHmHLdc", "https://youtu.be/11cta61wi0g", "https://youtu.be/js1CtxSY38I", "https://youtu.be/VOmIplFAGeg"];

// task 12: create an object for each of your songs.

let hurt;
let ditto;
let OMG;
let hypeBoy;
let attention;
let cookie;

// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.

hurt = {
  imageURL: "https://i.ytimg.com/vi/-L7eMf6Yf84/maxresdefault.jpg",
  songTitle: "Hurt",
  artist: "New Jeans",
  songLinkURL: "https://youtu.be/tVIXY14aJms"
};

ditto = {
  imageURL: "https://www.allkpop.com/upload/2023/01/content/070822/web_data/allkpop_1673098394_202212191833-main.jpg",
  songTitle: "Ditto",
  artist: "New Jeans",
  songLinkURL: "https://youtu.be/pSUydWEqKwE" 
};

OMG = {
  imageURL: "https://www.nme.com/wp-content/uploads/2023/01/newjeans-ador-hybe-090123.jpg",
  songTitle: "OMG",
  artist: "New Jeans",
  songLinkURL: "https://youtu.be/_ZAgIHmHLdc"
};

hypeBoy = {
  imageURL: "https://i.ytimg.com/vi/11cta61wi0g/maxresdefault.jpg",
  songTitle: "Hype Boy",
  artist: "New Jeans",
  songLinkURL: "https://youtu.be/11cta61wi0g"  
};

attention = {
  imageURL: "https://www.nme.com/wp-content/uploads/2022/07/ador-newjeans-attention-debut-music-video-hybe-girl-group.jpg",
  songTitle: "Attention",
  artist: "New Jeans",
  songLinkURL: "https://youtu.be/js1CtxSY38I"  
};

cookie = {
  imageURL: "https://www.nme.com/wp-content/uploads/2022/08/newjeans-debut-ep-release-cookie-music-video.jpg",
  songTitle: "Cookie",
  artist: "New Jeans",
  songLinkURL: "https://youtu.be/VOmIplFAGeg"  
};
// task 14: create an array that stores all of the objects.

let songArray = [hurt, ditto, OMG, hypeBoy, attention, cookie];

//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.

// task 16: update your `.push()` so the input object is added to your array of objects.



// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
  let inputs = {
 imageURLInput: image.value,
 songNameInput: songName.value,
 artistInput: artist.value,
 songLinkInput: songLink.value
 }

let newInput = {
imageURL: inputs.imageURLInput,
songTitle: inputs.songNameInput,
artist: inputs.artistInput,
songLinkURL: inputs.songLinkInput,
}
// task 10: use `.push()` to add each input value to the correct array.

  imageUrlsList.push(inputs.imageURLInput);
  songNamesList.push(inputs.songNameInput);
  artistNamesList.push(inputs.artistInput);
  songLinksList.push(inputs.songLinkInput);

  songArray.push(newInput)
  console.log(songArray);
} 




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  imageUrlDisplay.innerHTML = "";
  songNameDisplay.innerHTML = "";
  songLinkDisplay.innerHTML = "";
  artistNameDisplay.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
for (var i=0; i < imageUrlsList.length; i++){
 imageUrlDisplay.insertAdjacentHTML("beforeend", `<p><img src = ${songArray[i].imageURL}></p>`);
}
  
 for (var i = 0; i < songNamesList.length; i++){
 songNameDisplay.insertAdjacentHTML("beforeend", `<p>${songArray[i].songTitle}</p>`);
 }

for (var i = 0; i < songLinksList.length; i++){
songLinkDisplay.insertAdjacentHTML("beforeend", `<p><a href  ="${songArray[i].songLinkURL}" target= "_blank">Play Now</a></p>`);
}

  
for (var i = 0; i < artistNamesList.length; i++){
artistNameDisplay.insertAdjacentHTML("beforeend", `<p>${songArray[i].artist}</p>`);
}
}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  emptyDisplay();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
