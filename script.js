//set current time from moment to p tag in header
document.getElementById('currentDay').innerHTML = moment().format('[It is now] h:mma [on] MMMM d YYYY[.]');

//define variable for task html element
var task = document.querySelectorAll(".description");

//define current hour from moment
currentHour = moment().hours();

//assign colours to html elements
for(let i=0; i<task.length; i++){

    //hour for each element
    var hour = Number(task[i].id);
   
    //apply colours based on hour of element compared to current time from Moment
    if(hour===currentHour) {
        task[i].classList.add('present')
    } else if (hour>currentHour) {
        task[i].classList.add('future');
    } else {
        task[i].classList.add('past');
    } 

    //take user input for each task line and assign to local storage
    task[i].value = localStorage.getItem(task[i].id);
}

//save user input with id and value for save button function below
var saveTask =  (event) => {
   localStorage.setItem(event.target.previousElementSibling.id, event.target.previousElementSibling.value);
}

//define variable for save button html element
var saveBtn = document.querySelectorAll(".saveBtn");

//listen for click on each button, run saveTask function when clicked.
for (let i=0; i<saveBtn.length; i++){
    saveBtn[i].addEventListener('click', saveTask)
}