const resetWholeGeneration = () => {
  window.location.reload();
};
let result;
let binar = [];
let final = "";
let decimVal = 0;
let clickedObjectContainer;
let myChosenAnswers = ""; //variable for keeping concatenated words

let givenAns = document.getElementById("combAns");
for (let i = 0; i < 8; i++) {
  //Generating random binary number
  result = Math.round(Math.random(1, 2));
  binar.push(result);
  final = final.concat(result);
}
let binaryVlaue = document.getElementById("binary-Value");

binaryVlaue.innerHTML = final; //displaying the random binary number on the page

for (let i = 0; i < binar.length; i++) {
  //convert random generated binary to equivalent decial value
  if (binar[i] == 1) {
    decimVal = decimVal + Math.pow(2, 7 - i);
  } else {
    decimVal += 0;
  }
}

const makeItHidden = () => {
  //function for hidding the clicked cell table row
  clickedObjectContainer.style.display = "none";
}; //hiding

const testForHidingRow = () => {
  //hiding the whole row in which all cells were clicked
  let tablRowCount = document.querySelector(".answersTable").rows.length;
  console.log(tablRowCount);
  for (var Indx = 1; Indx < tablRowCount + 1; Indx++) {
    if (
      document.querySelector(
        ".answersTable tr:nth-child(" + Indx + ") td:nth-child(2)>a"
      ).style.display == "none" &&
      document.querySelector(
        ".answersTable tr:nth-child(" + Indx + ") td:nth-child(3)>a"
      ).style.display == "none"
    ) {
      document.querySelector(
        ".answersTable tr:nth-child(" + Indx + ")"
      ).style.display = "none";
    } //end of if
  } //end of loop
}; //end of function hiding rows

const populatGivenAns = () => {
  if (myChosenAnswers == "") {
    myChosenAnswers = clickedObjectContainer.querySelector("div").innerHTML;
  }
  givenAns.innerHTML = myChosenAnswers;
};

const myArray = [decimVal]; //*********defining array of answers

//adding other false random answers to myArray
for (let j = 0; j < 5; j++) {
  let randNum = Math.floor(Math.random() * 256);
  console.log(randNum);
  myArray.push(randNum);
}

const shuffleArray = (myArray) => {
  for (var i = myArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = myArray[i];
    myArray[i] = myArray[j];
    myArray[j] = temp;
  }
  return myArray;
};
var newArray = shuffleArray(myArray);

let t = 0;
let timerNum = setInterval(() => {
  //function for counting up to 30 seconds
  if (t < 30) {
    t++;
    document.getElementById("timer-value").innerHTML = t;
  } else {
    clearInterval(timerNum);
    document.getElementById("timer-value").innerHTML = "Time is up!";
    document.querySelector(".timer-wraper").style.display = "none";
    document.getElementById("timeUp").style.display = "block";
  }
}, 1000);
/*******************timer*********************** */
const runToCheck = () => {
  document.getElementById("timer-value").innerHTML = t;
  clearInterval(timerNum); //capturing the latest elapsed time
  let resultAns = document.getElementById("matchField");
  const myFunctionCorrect = () => {
    resultAns.innerHTML = "Correct!";
    document.body.style.backgroundColor = "#96E29A"; //color feedback correct
    givenAns.style.color = "#22E02D";
  }; //end of function myFunctionCorrect
  //~~~~~~~~~~~~~~~~function definition for False
  const myFunctionFalse = () => {
    //injecting a class for changing the color of the FALSE text to red
    resultAns.innerHTML = "False!";
    document.body.style.backgroundColor = "#FF5760"; //color feedback correct
    resultAns.style.color = "#FF0000";
    if (myChosenAnswers == "") {
      givenAns.innerHTML = `Correct answer is: ${decimVal}, and you didn't choose an option`;
    } else {
      givenAns.innerHTML = `Correct answer is: ${decimVal}, You Chose ${myChosenAnswers}!`;
    }
  }; //end of function myFunctionFalse
  let cmbAnsFieldContent = givenAns.innerText;
  if (clickedObjectContainer != undefined) {
    if (cmbAnsFieldContent == decimVal) {
      myFunctionCorrect();
    } else {
      myFunctionFalse();
    }
  } else {
    myFunctionFalse();
  }
}; //end of function runToCheck
for (let q = 0; q < newArray.length; q++) {
  var indexStr = String(q + 1);
  // console.log(newArray.length);
  indexStr = "print_arr" + indexStr;
  // console.log(indexStr);
  document.getElementById(indexStr).innerHTML = newArray[q];
}
