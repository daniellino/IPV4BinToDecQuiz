
const resetWholeGeneration = () => {
    window.location.reload();
}
let result;
let binar = [];
let final = "";
let decimVal = 0;
for (let i = 0; i < 8; i++) {
    result = Math.round(Math.random(1, 2));
    binar.push(result);
    // console.log(binar);
    final = final.concat(result);

}
let binaryVlaue = document.getElementById("binary-Value");

binaryVlaue.innerHTML = final;
//convert to decial value
for (let i = 0; i < binar.length; i++) {
    if (binar[i] == 1) {
        decimVal = decimVal + Math.pow(2, 7 - i);
        // console.log(Math.pow(2, 7 - i));
        // console.log(decimVal);
    } else {
        decimVal += 0;
    }
    // console.log(decimVal);
}
console.log(decimVal);
console.log(final);

/////////////////////////////////////////////////////////////************* */
////////////////////////////////////////////////////////////************************* */
/////////////////////////////////////////////////////////********************************************************** */

/*//////////VARIABLES▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄*/
let clickedObjectContainer;
let myChosenAnswers = ''; //variable for keeping concatenated words
let givenAns = document.getElementById('combAns');
//~~~~~~~~~~~~~~~~~asked question loop~~~~~~~~~~~~~~~~
/*//////////FUNCTIONS/////////*/
function makeItHidden() {
    //function for hidding the clicked cell table row
    clickedObjectContainer.style.display = 'none';
} //hiding

function testForHidingRow() {
    let tablRowCount = document.querySelector('.answersTable').rows.length;
    console.log(tablRowCount);
    for (var Indx = 1; Indx < tablRowCount + 1; Indx++) {
        if (
            document.querySelector(
                '.answersTable tr:nth-child(' + Indx + ') td:nth-child(2)>a'
            ).style.display == 'none' &&
            document.querySelector(
                '.answersTable tr:nth-child(' + Indx + ') td:nth-child(3)>a'
            ).style.display == 'none'
        ) {
            document.querySelector(
                '.answersTable tr:nth-child(' + Indx + ')'
            ).style.display = 'none';
        } //end of if
    } //end of loop
} //end of function hiding rows

function populatGivenAns() {
    if (myChosenAnswers == '') {
        myChosenAnswers = clickedObjectContainer.querySelector('div').innerHTML;
    }
    givenAns.innerHTML = myChosenAnswers;
}

/*//////////FUNCTIONS/////////*/
const myArray = [decimVal]; //*********defining array of answers

//adding other false random answers to myArray
for (let j = 0; j < 5; j++) {
    let randNum = Math.floor(Math.random() * 256);
    console.log(randNum);
    myArray.push(randNum);
}

function shuffleArray(myArray) {
    for (var i = myArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = myArray[i];
        myArray[i] = myArray[j];
        myArray[j] = temp;
    }
    return myArray;
}
var newArray = shuffleArray(myArray);
// console.log(newArray);
//*********************checking the shuffled array for empty elements
// function testForempty(newArray) {
//     return newArray != null;
// }

// console.log(newArray);
/*********************************************End of random shuffling of the options**************/
/*/\/\/\/\Checking the matching with correct answer/\/\/\/\*/

function runToCheck() {
    // let hidTable = document.querySelector('.answersTable').style.display = 'none';
    //~~~~~~~~~~~~~~~~function definition for correct
    let resultAns = document.getElementById('matchField');
    function myFunctionCorrect() {
        resultAns.innerHTML = 'Correct!';
        document.body.style.backgroundColor = '#96E29A'; //color feedback correct
        givenAns.style.color = '#22E02D';
    } //end of function myFunctionCorrect
    //~~~~~~~~~~~~~~~~function definition for False
    function myFunctionFalse() {
        //injecting a class for changing the color of the FALSE text to red
        resultAns.innerHTML = 'False!';
        document.body.style.backgroundColor = '#FF5760'; //color feedback correct
        resultAns.style.color = '#FF0000';
        if (myChosenAnswers == '') {
            givenAns.innerHTML = `Correct answer is: ${decimVal}, and you didn't choose an option`
        } else {
            givenAns.innerHTML = `Correct answer is: ${decimVal}, You Chose ${myChosenAnswers}!`;
        }
    } //end of function myFunctionFalse
    //~~~~~~~~~~~~~~~~Main condition~~~~~~~~~~~~~////////////////////////////////
    let cmbAnsFieldContent = givenAns.innerText;
    if (clickedObjectContainer != undefined) {
        //document.getElementById('askedQuestion').innerHTML = ansCombinedWithSingleQues;
        if (cmbAnsFieldContent == decimVal) {
            myFunctionCorrect();
        } else {
            myFunctionFalse();
        }

    } else {
        myFunctionFalse();
    }
} //end of function runToCheck

/*▐▐▐▐▐▐▐▐▐Assigning shuffled new array elements to HTML cells in the table▐▐▐▐▐▐▐▐▐▐▐*/
for (let q = 0; q < newArray.length; q++) {
    var indexStr = String(q + 1);
    // console.log(newArray.length);
    indexStr = 'print_arr' + indexStr;
    // console.log(indexStr);
    document.getElementById(indexStr).innerHTML = newArray[q];

}
