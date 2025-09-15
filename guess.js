const max=prompt("Enter a max number at start");

const random=Math.floor(Math.random()*max)+1;


// game start
let guess=prompt("Guess the number");


while(true){
    if(guess=="quit"){
        console.log("You quit the game");
        break;
    }
     if(guess==random){
        console.log("You guess the number is ",random);
        break;
    }
    else if(guess<random)
        {
        guess=prompt("Guess is small.plz try again");
    }
      else
        {
        guess=prompt("Guess is large.plz try again");
        
    }
}