let attempt = 0;
let correct = 0;
let percentage = 0;

function diceScroll(userPick) {
    var randomNum = Math.ceil(Math.random() * 6);

    console.log(randomNum);

    attempt += 1;
    document.getElementById("attempt").innerHTML = attempt;
    diceImage.src="images/dice" + randomNum + ".JPG";

    if (randomNum === userPick) {
    correct += 1;
    document.getElementById("correct").innerHTML = correct;
    }

 percentage = (correct / attempt) * 100;
 document.getElementById("percentage").innerHTML = percentage;
}



























































//         if (userPick == 1 && userPick == randomNum) {
//             correct +=1;
for (let i = 0; i < 6; i++) {
    document.getElementsByClassName("container2")[0].app = "abcd2"; 
}
//             diceImage.src="images/dice1.JPG";
//             document.getElementById("demo").innerHTML = correct;
//             // countElement.textContent = "Count: " + count;
//         }

//          else if (userPick == 2 && userPick == randomNum) {
//             correct +=1;
//             diceImage.src="images/dice2.jPG";
//             document.getElementById("demo").innerHTML = correct;
//         }

//         else if (userPick == 3 && userPick == randomNum) {
//             correct +=1;
//             diceImage.src="images/dice3.jPG";
//             document.getElementById("demo").innerHTML = correct;
//         }

//         else if (userPick == 4 && userPick == randomNum) {
//             correct +=1;
//             diceImage.src="images/dice4.jPG";
//             document.getElementById("demo").innerHTML = correct;
//         }

//         else if (userPick == 5 && userPick == randomNum) {
//             correct +=1;
//             diceImage.src="images/dice5.jPG";
//             document.getElementById("demo").innerHTML = correct;
//         }

//         else if (userPick == 6 && userPick == randomNum) {
//             correct +=1;
//             diceImage.src="images/dice6.jPG";
//             document.getElementById("demo").innerHTML = correct;

//         }
//         else{
//             alert("Number Doesn't Match");
//                diceImage.src="images/man.jpg";
//         }