//1. Create an array that contains the variables Rock, Paper, and Scissors.
let choices = ["Rock", "Paper", "Scissor"];

//2. Set up a variable that generates a random number 0-2 for the player and then 
// do the same for the computer's selection.
let random_number = Math.random(); // generates random number between 0 and 1

// multiply by 3 to obtain a number between 0 and 2
random_number = random_number * 3;

// remove digits past decimal place to provide a whole number
let computer_random_number = Math.floor(random_number);
let username = prompt("Enter your name?");

let user_pick = Number(prompt("Pick Either of the following \n0. Rock \n1. Paper \n2. Scissor \nEnter below(0, 1, 2):"));

// create two lists for computer and user
let user_list = [];
user_list.push(username);

let score_board = ["Draw", "Win", "Lose"];
let user_draw_list = [];
let user_win_list = [];
let user_lose_list = [];
let computer_win_list = [];
let computer_draw_list = [];
let computer_lose_list = [];

/*
 Rock will beat out Scissors, 
 Paper will beat out Rock,
Scissors will beat out Paper.


*/


if (user_pick == 0 && computer_random_number == 0){
    user_draw_list.push(score_board[user_pick]);
    computer_draw_list.push(score_board[computer_random_number]);
    
    document.writeln(`${user_list[0]} Wins ${user_draw_list.length}, Draws ${user_draw_list.length}, Lose ${user_draw_list.length}`);
    document.writeln(`Computer Wins ${user_draw_list.length}, Draws ${user_draw_list.length}, Lose ${user_draw_list.length}`);
    document.writeln(`${user_draw_list.length}`)
}
// Rock=0, Paper=1, Scissor=2
else if(user_pick == 1 &&  computer_random_number == 0){
    user_win_list.push(score_board[user_pick]);
    computer_lose_list.push(score_board[computer_random_number]);
    document.writeln(`You won | Computer Lost`);
}


else if (user_pick == 1 && computer_random_number == 1){
    user_draw_list.push(score_board[user_pick]);
    computer_draw_list.push(score_board[computer_random_number]);
    document.writeln(`You Draw | Computer Draw`);
}
// Rock=0, Paper=1, Scissor=2
else if(user_pick == 0 &&  computer_random_number == 1){
    user_win_list.push(score_board[user_pick]);
    computer_lose_list.push(score_board[computer_random_number]);
    document.writeln(`You have won ${score_board[user_pick]}`);
}

// Rock=0, Paper=1, Scissor=2
else if(user_pick == 2 &&  computer_random_number == 0){
    user_win_list.push(score_board[user_pick]);
    computer_lose_list.push(score_board[computer_random_number]);
    document.writeln(`You have won ${score_board[user_pick]}`);
}


else if (user_pick == 2 && computer_random_number == 1){
    user_draw_list.push(score_board[user_pick]);
    computer_draw_list.push(score_board[computer_random_number]);
    document.writeln(`This is a draw, ${score_board[user_pick]} `);
}

// Rock=0, Paper=1, Scissor=2
else if(user_pick == 0 && computer_random_number == 2){
    user_win_list.push(score_board[user_pick]);
    computer_lose_list.push(score_board[computer_random_number]);
    document.writeln(`You have won ${score_board[user_pick]}`);
}

