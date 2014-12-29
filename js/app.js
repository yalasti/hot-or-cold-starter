var secretNumber;
var userGuess = 0;
var counter = 0;
var winner = false;

$(document).ready(function(){

  
  /*-- function submit form --*/
  
  $("#form").submit(function() {
    event.preventDefault();
    guessClick();
    
  
  });

	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    /*-- begin new game --*/

    if (secretNumber === undefined) {
      newGame();
    }
    $(".new").click(function() {
      newGame();

    });

    /*-- function guest button --*/
    var guessClick = function(){

      userGuess = $("#userGuess").val();
      var newGuess = $("<li></li>").text(userGuess);
      if (userGuess % 1 !== 0 || userGuess <= 0 || userGuess > 100) {
      $("#feedback").text("Please enter a number between 1 and 100!")
      } 
      //if they guess after they win
      else if (winner == true) {
          $("#feedback").text("Click NEW GAME to play again!");
      }
      else {
        feedback(userGuess);
        counter++;
        $("#guessList").append(newGuess);
        $("#count").text(counter);
      }
      //guess removed from field
      $("#userGuess").val("")

      if (winner == false) {
      $("#userGuess").attr("placeholder", "Try again!")
      } else {
        $("#userGuess").attr("placeholder", "WINNER!");
      };
    }; //end guess button 

}); //end ready function

   /*---Generate a secret number---*/
    var randomNumber = function() {
      secretNumber = 1 + Math.floor(Math.random()*100);
    }


    /*--- function new game ---*/
    var newGame = function() {
      //new secret number
      randomNumber();
      //reset counter
      counter = 0;
      //reset guess count
      $("#count").text(counter);
      //reset text box text
      $("#feedback").text("Make your guess!");
      //reset guess value
      // $("#userGuess").val();
      $("#userGuess").val("");
      //reset placeholder text
      $("#userGuess").attr("placeholder", "Enter your Guess!");
      //remove guessed list
      $("#guessList li").remove();
      console.log("secretNumber: "+ secretNumber);
     }; // newGame function end

     /*-- user feedback --*/
     var text;
     var feedback = function() {

        userGuess = $("#userGuess").val();
        // alert(userGuess + secretNumber);

    if ((userGuess > (secretNumber - 3)) && (userGuess < (secretNumber + 3))) {
       text = "smokin' hot"
       if (userGuess == secretNumber){
              text = "You got it!";
              winner = true;
            };
          } 
      else if ((userGuess > (secretNumber - 20)) && (userGuess < (secretNumber + 20))){
            text = "warm";
          }
      else if ((userGuess > (secretNumber - 50)) && (userGuess < (secretNumber + 50))){
          text = "cold";
          }
      else if ((userGuess > (secretNumber - 75)) && (userGuess < (secretNumber + 75))){
          text = "ice cold, baby!";
          }
  
        $("#feedback").text(text);
     }; // end feedback 









