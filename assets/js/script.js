let clearBtn = document.querySelector(".clearBtn")
let saveConfirm = document.querySelector(".hidden")

let inputEl = document.querySelector(".task-event")
let nineAmEl = document.querySelector(".nine-am")
let tenAmEl = document.querySelector(".ten-am")
let elevenAmEl = document.querySelector(".eleven-am")
let twelvePmEl = document.querySelector(".twelve-pm")
let onePmEl = document.querySelector(".one-pm")
let twoPmEl = document.querySelector(".two-pm")
let threePmEl = document.querySelector(".three-pm")
let fourPmEl = document.querySelector(".four-pm")
let fivePmEl = document.querySelector(".five-pm")

let timeBlocks =  [9, 10, 11, 12, 13, 14, 15, 16, 17]
let timeBlocksRows = [nineAmEl, tenAmEl, elevenAmEl, twelvePmEl, onePmEl, twoPmEl, threePmEl, fourPmEl, fivePmEl];

// Time display in header
const currentTime = moment().format('HH:mm A | MMM DD, YYYY');
$("#currentDay").append("<p>" + currentTime + "</p>");



let masterTask = []
var chosenTask = ""

let checkTimeForTasks = function(timeParameter, thisRow) {
    let thisTime = moment().hour()

    for(let i = 0; i < timeBlocks.length; i++) {
        let timeDiffence = timeParameter[i] - thisTime;

        if(timeDiffence === 0) {
            thisRow[i].classList.add("present")
        }
        else if(timeDiffence < 0) {
            thisRow[i].classList.add("past")
        }
        else if(timeDiffence > 0) {
            thisRow[i].classList.add("future")
        }
 
    }
}
checkTimeForTasks(timeBlocks, timeBlocksRows)


// When user clicks save button
$(".saveBtn").click(function() {
    // saveConfirm.classList.add("save-confirm")


    let taskName = $(this).siblings(".task-event")
    .val()
    .trim()
    

    let taskId = $(this).siblings(".task-event")
    .attr("id")
    

    // Combine taskName and taskId into an object?

    chosenTask = {
        name: taskName,
        id: taskId
    }

    console.log(chosenTask)

    // masterTask is getting cleared every new instance of button submit
    
    // push chosenTask into masterTask array
    // localStorage.setItem("tasks", taskName, taskId)
    masterTask.push(chosenTask)


    saveTask(masterTask)


})



let clearTasks = function() {
    localStorage.clear();
    // remove text from all input fields
    for(let i = 0; i < timeBlocksRows.length; i++) {
        timeBlocksRows[i].value = ''
    }
}


let saveTask = function(taskMonger) {
    
    localStorage.setItem("tasks", JSON.stringify(taskMonger))
    
}



let loadTasks = function() {    
    var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        for (var i = 0; i < tasks.length; i++){
            $(`#${tasks[i].id}`).val(tasks[i].name)
        }
    console.log(tasks)
    // console.log(masterTask)
}

loadTasks();


clearBtn.addEventListener("click", clearTasks)

