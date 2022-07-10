/**
 * ######################################################################################################################
 *
 * THIS A BEGINER JAVASRIPT PROJECT THAT IS
 * BIASED TOWARDS DOM MANIPULATION
 *@function stopWatch
 * @function
 * my icons are copied from 'https://unicode-table.com' and 'https://www.w3schools.com/charsets/ref_emoji.asp'
 *
 * ######################################################################################################################
 */
"use strict";

/*
    ########################################
        Project 1 : Random Quote Generator
    #######################################
*/

//Grab the elements
let quote = document.querySelector("#quote");
let author1 = document.querySelector("#qAuthor");
let btn = document.querySelector("#qbtn");

//fetch data
fetch("https://type.fit/api/quotes")
  .then((response) => response.json())
  .then((data) =>
    btn.addEventListener("click", function () {
      let random = Math.floor(Math.random() * data.length);

      quote.textContent = data[random].text;
      if (data[random].author == null) {
        author1.textContent = "Anonymous";
      }
      author1.textContent = `~~ ${data[random].author}`;
    })
  );

/**
 * ####################################################################
 * @params
 *
 *  PROJECT 2: MODAL
 *
 * ####################################################################
 */

//Grab the html elements

let openModal = document.querySelector("#open-modal");
let modalContent = document.querySelector("#modal-content");
let closeModal = document.querySelector("#close-modal");

// Attach event listerner

openModal.addEventListener(
  "click",
  () => (modalContent.style.display = "flex")
);

closeModal.addEventListener(
  "click",
  () => (modalContent.style.display = "none")
);

/** #####################################################################################
 *
 * Project #3 Accordion
 *
 * ######################################################################################
 */

let accordion = document.getElementsByClassName("accordion-body");
let quiz = document.getElementsByClassName("answer");

for (let i of accordion) {
  i.addEventListener("click", function () {
    this.classList.toggle("active");

    console.log(this);
  });
}

/** #####################################################################################
 *
 * Project # stopWatch
 *
 * ######################################################################################
 */

//Grab timer elements
const secs = document.querySelector(".seconds");
const mins = document.querySelector(".minutes");
const hrs = document.querySelector(".hour");

//Grab timer controls elements
const pauseStopButton = document.querySelector(".pause-stop");
const reset = document.querySelector(".reset");

//Set timer variables
let second = 0;
let minute = 0;
let hour = 0;

//Declare Leading zeros variables: zeros infront of numbers less than 10, for uniformity each number should be a two digit number.
let leadindSeconds;
let leadindMinutes;
let leadingHours;

// Timer status
let timerStatus = "stopped";
let timerInterval = null;

const stopWatch = () => {
  second++;

  if (second / 60 === 1) {
    second = 0;
    minute++;
  }

  if (minute / 60 === 1) {
    minute = 0;
    hour++;
  }

  //Add leading zeros
  if (second < 10) {
    leadindSeconds = "0" + second.toString();
  } else {
    leadindSeconds = second;
  }
  if (minute < 10) {
    leadindMinutes = "0" + minute.toString();
  } else {
    leadindMinutes = minute;
  }
  if (hour < 10) {
    leadingHours = "0" + hour.toString();
  } else {
    leadingHours = second;
  }

  //Put time count inside the grabbed html elements
  secs.innerText = leadindSeconds;
  mins.innerText = leadindMinutes;
  hrs.innerText = leadingHours;
  // console.log(`${hour} : ${minute} : ${second}`) This line was used for debugging purposes only
};

//Add functionality to controls butttons i.e start/pause/stop/ reset buttons
//Pause / Play button functionality
pauseStopButton.addEventListener("click", () => {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);
    pauseStopButton.innerText = "⏸";
    timerStatus = "running";
  } else {
    window.clearInterval(timerInterval);
    pauseStopButton.innerText = "▶";
    timerStatus = "stopped";
  }
});

// Reset button functionality:
reset.addEventListener("click", () => {
  window.clearInterval(timerInterval);
  second = 0;
  minute = 0;
  hour = 0;

  timerStatus = "stopped";

  secs.innerText = `${second}0`;
  mins.innerText = `${minute}0`;
  hrs.innerText = `${hour}0`;
});

/**
 * #################################################################
 *
 * #5 App: TODOLIST App
 *
 * ################################################################
 */

// Grab todo list elements
const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-button");
const todoItems = document.querySelector(".todo-items>ol");
console.log(todoItems);

// Attach event listeners to the button
todoButton.addEventListener("click", () => {
  let list = document.createElement("li");
  list.classList.add("tasks");

  let deleteTask = document.createElement("button");
  deleteTask.innerText = "⌦";
  deleteTask.classList.add("delete-task");

  let checkTask = document.createElement("button");
  checkTask.innerText = "✓";
  checkTask.classList.add("check-task");

  let taskNote = document.createElement("p");
  taskNote.classList.add("task-note");
  taskNote.innerHTML = `${todoInput.value}`;

  list.appendChild(taskNote);
  list.appendChild(checkTask);
  list.appendChild(deleteTask);

  if (todoInput.value === "") {
    let error = document.querySelector("#error-success-msg");
    error.style.color = "red";
    error.innerText = "Input can never be empty!!";
    window.setTimeout(() => (error.innerText = ""), 3000);
  } else {
    todoItems.appendChild(list);
    todoInput.value = "";

    let info = document.querySelector("#error-success-msg");
    info.style.color = "green";
    info.innerText = "Task Added successfully!!";
    window.setTimeout(() => (info.innerText = ""), 3000);
  }

  checkTask.addEventListener("click", () => {
    checkTask.previousElementSibling.style.textDecoration = "line-through";
    // document.querySelector(".task-note").style.textDecoration = "line-through";
    let info1 = document.querySelector("#error-success-msg");
    info1.style.color = "blue";
    info1.innerHTML =
      "&#127881;&#127881;&#127881; Hooray!! We're glad you completed your task ";
    window.setTimeout(() => (info1.innerHTML = ""), 4000);
  });

  deleteTask.addEventListener("click", () => {
    list.remove();
    let info = document.querySelector("#error-success-msg");
    info.style.backgroundColor = "white";
    info.style.color = "orange";
    info.innerText = "Task deleted successfully!!";
    window.setTimeout(() => (info.innerText = ""), 3000);
  });
});

/**
 * THE END END THE STREAK OF PROJECTS
 */

//Footer Date
let date = new Date().getFullYear();
let fn = () => {
  return "MAGPINY";
};
document.querySelector("footer").textContent = `Copy of ${date} ${fn()}`;
