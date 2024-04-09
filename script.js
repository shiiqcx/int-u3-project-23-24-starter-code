// Declare variables below to save the different divs of your story.
let storyOpening = document.querySelector(".story-opening");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionOneScreenTwo = document.querySelector(".option-one-screen-two");
let optionTwoScreenTwo = document.querySelector(".option-two-screen-two");
let optionOneEndOne = document.querySelector(".option-one-end-one");
let optionTwoEnd = document.querySelector(".option-two-end");
let optionOneEndOneGood = document.querySelector(".option-one-end-one-good");

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




// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.
yButton.addEventListener('click', function(){
  optionOneScreen.style.display="block";
  storyOpening.style.display="none";
 });
nButton.addEventListener('click', function(){
  optionTwoScreen.style.display="block";
  storyOpening.style.display="none";
 });
helpButton.addEventListener('click', function(){
  optionOneScreenTwo.style.display="block";
  optionOneScreen.style.display="none";
 });



// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });