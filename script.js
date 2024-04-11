// Declare variables below to save the different divs of your story.
let start = document.querySelector(".start");
let storyOpening = document.querySelector(".story-opening");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionOneScreenTwo = document.querySelector(".option-one-screen-two");
let optionTwoScreenTwo = document.querySelector(".option-two-screen-two");
let optionOneEndOne = document.querySelector(".option-one-end-one");
let optionTwoEnd = document.querySelector(".option-two-end");
let optionOneEndOneGood = document.querySelector(".option-one-end-one-good");

let enterButton = document.querySelector(".enter-button");
let yButton = document.querySelector(".yes-button");
let nButton = document.querySelector(".no-button");
let helpButton = document.querySelector(".help-man-button");
let leaveButton = document.querySelector(".leave-man-button");
let takeButton = document.querySelector(".take-pet-button");
let leaveAloneButton = document.querySelector(".leave-pet-button");
let leftButton = document.querySelector(".left-button");
let rightButton = document.querySelector(".right-button");
let followRightButton = document.querySelector(".follow-right-button");
let leaveLeftButton = document.querySelector(".leave-left-button");

let nameBox = document.querySelector(".name");
let random = document.querySelector(".random");
let randomTwo = document.querySelector(".random-2")




// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.
enterButton.addEventListener('click', function(){
  storyOpening.style.display = "block";
  start.style.display = "none";
  
});

yButton.addEventListener('click', function(){
  optionOneScreen.style.display="block";
  storyOpening.style.display="none";
  random.innerHTML = nameBox.value + " enters the cave with a lit torch and stumble upon an injured stranger."
 });
nButton.addEventListener('click', function(){
  optionTwoScreen.style.display="block";
  storyOpening.style.display="none";
  randomTwo.innerHTML = nameBox.value + " is forcefully pushed into the cave and falls obtaining -5 health." 
 });
helpButton.addEventListener('click', function(){
  optionOneScreenTwo.style.display="block";
  optionOneScreen.style.display="none";
 });
leaveButton.addEventListener('click', function(){
  optionOneEndOne.style.display="block";
  optionOneScreen.style.display="none";
 });
takeButton.addEventListener('click', function(){
  optionTwoScreenTwo.style.display="block";
  optionTwoScreen.style.display="none";
 });
leaveAloneButton.addEventListener('click', function(){
  optionOneEndOne.style.display="block";
  optionTwoScreen.style.display="none";
 });
leftButton.addEventListener('click', function(){
  optionTwoEnd.style.display="block";
  optionOneScreenTwo.style.display="none";
 });
rightButton.addEventListener('click', function(){
  optionOneEndOneGood.style.display="block";
  optionOneScreenTwo.style.display="none";
 });
followRightButton.addEventListener('click', function(){
  optionOneEndOneGood.style.display="block";
  optionTwoScreenTwo.style.display="none";
 });
leaveLeftButton.addEventListener('click', function(){
  optionTwoEnd.style.display="block";
  optionTwoScreenTwo.style.display="none";
 });





// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });