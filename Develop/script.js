// Time display in header
const currentTime = moment().format('HH:mm A | MMM DD, YYYY');
console.log(currentTime);
$("#currentDay").append("<p>" + currentTime + "</p>");

masterTask = []
var chosenTask = []

// when input is clicked, user inputs their task
$(".saveBtn").click(function() {
    chosenTask = $(".task-event")
        .val()
        .trim()
    if(chosenTask === "" || chosenTask === null) {
        alert("Please enter someting!")
    }
    else{
        masterTask.push(chosenTask)
        console.log(masterTask)
    }

    localStorage.setItem("work tasks", chosenTask)
})

console.log(masterTask)


$(".saveBtn").click(function() {
    // Save the input field value into localStorage

    // // If input field is empty, then display 
    // if {
    //     alert("please eneter something!")
    // }
    // else {
    //     alert("you have entered something!")
    // }
})


// save input field into localStorage