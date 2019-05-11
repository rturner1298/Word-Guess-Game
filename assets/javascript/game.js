//VARIABLES
// var words = ["arthur", "rugrats", "thesimpsons", "scoobydoo", "spongebob", "dannyphantom", "teentitans"]
var artists = ["bobmarley", "petertosh", "tootsandthemaytals", "burningspear", "gregoryisaacs", "bunnywailer", 
"dennisbrown", "steelpulse", "bujubanton", "culture", "damianmarley", "thirdworld", "jacobmiller", ];
//Empty variables to store values later
var randomArtist = "";
var lettersOfName = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

//Counter Variables
var wins = 0;
var losses = 0;
var guessesRemaining = 9;



// ALL FUNCTIONS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//__________________________________________________________
//GAME START FUNCTION
//__________________________________________________________
function Game() {
    //computer generates random word from words array
    randomArtist = artists[Math.floor(Math.random() * artists.length)];

    // split the individual word into separate arrays, and store in new array 
    lettersOfName = randomArtist.split("");

    //store length of word in blanks, for later use
    blanks = lettersOfName.length;

    //creating a loop to generate "_" for each letter in array stored in blanks
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    //showing the "_" within HTML
    document.getElementById("currentartist").innerHTML = "  " + blanksAndCorrect.join("  ");

    //console logging 
    console.log(randomArtist);
    console.log(lettersOfName)
    console.log(blanks)
    console.log(blanksAndCorrect)
}


//__________________________________________________________
//AUDIO FUNCTION
//__________________________________________________________

//variables for audio function
var bobmarley = document.getElementById("bobmarley");
var petertosh = document.getElementById("petertosh");
var tootsandthemaytals = document.getElementById("tootsandthemaytals");
var burningspear = document.getElementById("burningspear");
var gregoryisaacs = document.getElementById("gregoryisaacs");
var bunnywailer = document.getElementById("bunnywailer");
var dennisbrown = document.getElementById("dennisbrown");
var steelpulse = document.getElementById("steelpulse");
var bujubanton = document.getElementById("bujubanton");
var culture = document.getElementById("culture");
var damianmarley = document.getElementById("damianmarley");
var thirdworld = document.getElementById("thirdworld");
var jacobmiller = document.getElementById("jacobmiller");


function aud() {
//bobmarley Audio & Image
//---------------------------
if (randomArtist===artists[0]){
	petertosh.pause();
	tootsandthemaytals.pause();
	burningspear.pause();
	gregoryisaacs.pause();
	bunnywailer.pause();
	dennisbrown.pause();
	steelpulse.pause();
	bujubanton.pause();
	culture.pause();
	damianmarley.pause();
	thirdworld.pause();
	jacobmiller.pause();
	bobmarley.play();
	document.getElementById("image").src = "./assets/images/bobmarley.jpg";
}
//petertosh Audio & Image
//---------------------------
else if (randomArtist===artists[1]){
	tootsandthemaytals.pause();
	burningspear.pause();
	gregoryisaacs.pause();
	bunnywailer.pause();
	dennisbrown.pause();
	steelpulse.pause();
	bujubanton.pause();
	culture.pause();
	damianmarley.pause();
	thirdworld.pause();
	jacobmiller.pause();
	bobmarley.pause();
	petertosh.play();
	document.getElementById("image").src = "./assets/images/petertosh.jpg";
}
//tootsandthemaytals Audio & Image
//---------------------------
else if (randomArtist===artists[2]){
	petertosh.pause();
	burningspear.pause();
	gregoryisaacs.pause();
	bunnywailer.pause();
	dennisbrown.pause();
	steelpulse.pause();
	bujubanton.pause();
	culture.pause();
	damianmarley.pause();
	thirdworld.pause();
	jacobmiller.pause();
	bobmarley.pause();
	tootsandthemaytals.play();
	document.getElementById("image").src = "./assets/images/tootsandthemaytals.jpg";
}
//burningspear Audio & Image
//---------------------------
else if (randomArtist===artists[3]){
	petertosh.pause();
	tootsandthemaytals.pause();
	gregoryisaacs.pause();
	bunnywailer.pause();
	dennisbrown.pause();
	steelpulse.pause();
	bujubanton.pause();
	culture.pause();
	damianmarley.pause();
	thirdworld.pause();
	jacobmiller.pause();
	bobmarley.pause();
	burningspear.play();
	document.getElementById("image").src = "./assets/images/burningspear.jpg";
}
//gregoryisaacs Audio & Image
//---------------------------
else if (randomArtist===artists[4]){
	petertosh.pause();
	tootsandthemaytals.pause();
	burningspear.pause();
	bunnywailer.pause();
	dennisbrown.pause();
	steelpulse.pause();
	bujubanton.pause();
	culture.pause();
	damianmarley.pause();
	thirdworld.pause();
	jacobmiller.pause();
	bobmarley.pause();
	gregoryisaacs.play();
	document.getElementById("image").src = "./assets/images/gregoryisaacs.jpg";
}
//bunnywailer Audio & Image
//---------------------------
else if (randomArtist===artists[5]){
	petertosh.pause();
	tootsandthemaytals.pause();
	burningspear.pause();
	gregoryisaacs.pause();
	dennisbrown.pause();
	steelpulse.pause();
	bujubanton.pause();
	culture.pause();
	damianmarley.pause();
	thirdworld.pause();
	jacobmiller.pause();
	bobmarley.pause();
	bunnywailer.play();
	document.getElementById("image").src = "./assets/images/bunnywailer.jpg";
}
//dennisbrown Audio & Image
//---------------------------
else if (randomArtist===artists[6]){
	petertosh.pause();
	tootsandthemaytals.pause();
	burningspear.pause();
	gregoryisaacs.pause();
	bunnywailer.pause();
	steelpulse.pause();
	bujubanton.pause();
	culture.pause();
	damianmarley.pause();
	thirdworld.pause();
	jacobmiller.pause();
	bobmarley.pause();
	dennisbrown.play();
	document.getElementById("image").src = "./assets/images/dennisbrown.jpg";
}
//steelpulse Audio & Image
//---------------------------
else if (randomArtist===artists[7]){
	petertosh.pause();
	tootsandthemaytals.pause();
	burningspear.pause();
	gregoryisaacs.pause();
	bunnywailer.pause();
	dennisbrown.pause();
	bujubanton.pause();
	culture.pause();
	damianmarley.pause();
	thirdworld.pause();
	jacobmiller.pause();
	bobmarley.pause();
	steelpulse.play();
	document.getElementById("image").src = "./assets/images/steelepulse.jpg";
}
//bujubanton Audio & Image
//---------------------------
else if (randomArtist===artists[8]){
	petertosh.pause();
	tootsandthemaytals.pause();
	burningspear.pause();
	gregoryisaacs.pause();
	bunnywailer.pause();
	dennisbrown.pause();
	steelpulse.pause();
	culture.pause();
	damianmarley.pause();
	thirdworld.pause();
	jacobmiller.pause();
	bobmarley.pause();
	bujubanton.play();
	document.getElementById("image").src = "./assets/images/bujubanton.jpg";
}
//culture Audio & Image
//---------------------------
else if (randomArtist===artists[9]){
	petertosh.pause();
	tootsandthemaytals.pause();
	burningspear.pause();
	gregoryisaacs.pause();
	bunnywailer.pause();
	dennisbrown.pause();
	steelpulse.pause();
	bujubanton.pause();
	damianmarley.pause();
	thirdworld.pause();
	jacobmiller.pause();
	bobmarley.pause
	culture.play();
	document.getElementById("image").src = "./assets/images/culture.jpg";
}
//damianmarley Audio & Image
//---------------------------
else if (randomArtist===artists[10]){
	petertosh.pause();
	tootsandthemaytals.pause();
	burningspear.pause();
	gregoryisaacs.pause();
	bunnywailer.pause();
	dennisbrown.pause();
	steelpulse.pause();
	bujubanton.pause();
	culture.pause();
	thirdworld.pause();
	jacobmiller.pause();
	bobmarley.pause();
	damianmarley.play();
	document.getElementById("image").src = "./assets/images/damianmarley.jpg";
}
//thirdworld Audio & Image
//---------------------------
else if (randomArtist===artists[11]){
	petertosh.pause();
	tootsandthemaytals.pause();
	burningspear.pause();
	gregoryisaacs.pause();
	bunnywailer.pause();
	dennisbrown.pause();
	steelpulse.pause();
	bujubanton.pause();
	culture.pause();
	damianmarley.pause();
	jacobmiller.pause();
	bobmarley.pause();
	thirdworld.play();
	document.getElementById("image").src = "./assets/images/thirdworld.jpg";
}
//jacobmiller Audio & Image
//---------------------------
else if (randomArtist===artists[12]){
	petertosh.pause();
	tootsandthemaytals.pause();
	burningspear.pause();
	gregoryisaacs.pause();
	bunnywailer.pause();
	dennisbrown.pause();
	steelpulse.pause();
	bujubanton.pause();
	culture.pause();
	damianmarley.pause();
	thirdworld.pause();
	bobmarley.pause();
	jacobmiller.play();
	document.getElementById("image").src = "./assets/images/jacobmiller.jpg";
}
};

//__________________________________________________________
//RESET FUNCTION
//__________________________________________________________
function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

//__________________________________________________________
//CHECK LETTERS/COMPARE FUNCTION
//__________________________________________________________

//If/Else, to see if letter selected matches random word
function checkLetters(letter) {
    var letterInWord = false;
    //if the generated randomword is equal to the letter entered... then variable is true
    for (var i = 0; i < blanks; i++) {
        if (randomArtist[i] == letter) {
            letterInWord = true;
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        //check each letter to see if it matches word
        for (var i = 0; i < blanks; i++) {
            if (randomArtist[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}

//__________________________________________________________
//FINAL COMPLETE FUNCTION
//__________________________________________________________

//check to see if player won...
function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //if WON...then alert, play audio, display image and reset new round
    if (lettersOfName.toString() == blanksAndCorrect.toString()) {
        wins++;
        aud()
        reset()
        //display wins on screen
        document.getElementById("winstracker").innerHTML = " " + wins;

        //if LOST...then alert and reset new round
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/try-again.png"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentartist").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//_____________________________________________________
// EXECUTE CODE 
//_____________________________________________________

//call start game function
Game()

//check for keyup, and convert to lowercase then store in guesses
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    //check to see if guess entered matches value of random word
    checkLetters(guesses);
    //process wins/loss 
    complete();
    //store player guess in console for reference 
    console.log(guesses);

    //display/store incorrect letters on screen
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}

