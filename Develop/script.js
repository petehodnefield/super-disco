let inputEl = document.querySelector(".task-event")
// Time display in header
const currentTime = moment().format('HH:mm A | MMM DD, YYYY');
console.log(currentTime);
$("#currentDay").append("<p>" + currentTime + "</p>");

masterTask = []
var chosenTask = ""


// When user clicks save button
$(".saveBtn").click(function() {
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

    // push chosenTask into masterTask array
    masterTask.push(chosenTask)
    saveTask(masterTask)
}) 

let saveTask = function(taskMonger) {
    localStorage.setItem("tasks", JSON.stringify(taskMonger))

}

let loadTasks = function() {    
    var tasks = JSON.parse(localStorage.getItem("tasks"));
        for (var i = 0; i < tasks.length; i++){
            $(`#${tasks[i].id}`).val(tasks[i].name)
        }
    // console.log(
}

loadTasks();

// Target the input element sibling of the button that was clicked

// Store the value of the input element into a variable

// Push the value into the masterTask array?

// Save the masterTask array into localStorage












// // when input is clicked, user inputs their task
// $(".saveBtn").click(function() {
//     // Get sibling of the button that was clicked
//     const taskInputField = $(this).siblings('.task-event');
//     // Get ID of the siling
//     const taskId = taskInputField.attr('id');
//     console.log("taskId", taskId)
//     // assign the input of ".task-event" to chosenTask
//     chosenTask = taskInputField
//         .val()
//         .trim()
//     if(chosenTask === "" || chosenTask === null) {
//         alert("Please enter someting!")
//     }
//     else{
//         masterTask.push({id: taskId, chosenTask})
//         console.log(masterTask);
//         saveTasks(masterTask)
//     }

// })

// var saveTasks = function(tasks) {
//     localStorage.setItem("work-tasks", JSON.stringify(tasks))
// }
// console.log(masterTask)

// var loadTasks = function() {
//     var tasks = JSON.parse(localStorage.getItem("work-tasks"));
//         for (var i = 0; i < tasks.length; i++){
//             $(`#${tasks[i].id}`).val(tasks[i].chosenTask)
//         }
//     // console.log('task', tasks)

// }




// save input field into localStorage

// loadTasks();