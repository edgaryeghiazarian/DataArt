function currentTime() {
    let today = new Date();
    let date = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes();
    let currentDate = date + " " + time;
    return currentDate;
}

function alertButton() {
    alert("Button for alert has been clicked");
}

function promptButton() {
    let name;
    let person = prompt("What is your name?");
    if (person == null || person == "") {
        name = "User cancelled the prompt";
    } else {
        name = "Name of user is " + person;
    }
    document.getElementById("prompt").innerHTML = name;
}

function confirmButton() {
    let confirmed;
    if (confirm("Confirm your request")) {
        confirmed = "Confirmed and pressed OK!";
    } else {
        confirmed = "Cancelled";
    }
    document.getElementById("confirm").innerHTML = confirmed;
}

const number = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(evenNumbers(number));

function evenNumbers(array) {
    let evens = new Array();
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evens.push(array[i]);
        }
    }
    return evens;
}

let unsorted = [3, 2, 30, -4, 9, 10, 7, 55, 12];
console.log(mySort(unsorted));

function mySort(array) {
    for (let i = 0; i < array.length; i++) {
        let flag = false;
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
                flag = true;
            }
        }
        if(flag == false) {
            break;
        }
    }
    return array;
}

function multiply() {
    let a = document.getElementById("first-number").value;
    let b = document.getElementById("second-number").value;
    let answer = a*b;
    document.getElementById("answer").innerHTML = answer;
}

function divide() {
    let a = document.getElementById("first-number").value;
    let b = document.getElementById("second-number").value;
    let answer = a/b;
    document.getElementById("answer").innerHTML = answer;
}