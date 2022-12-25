//variable's use for day and night mode
let dayMode = true;
const light = document.getElementsByClassName("fa-solid")[0];
const color = document.getElementsByTagName("body")[0];

//Here every varible represent by own name
const container = document.getElementsByClassName("container")[0];
let setAlarm = document.querySelector(".set-alarm");
let image=document.getElementsByClassName('image')[0];
let selectInput = document.querySelectorAll(".input-area");
let listAlarm = document.getElementsByClassName("list-alarms")[0];
let deleteBtn = document.getElementById("delete-btn");
let deleteAlarm = document.querySelectorAll(".delete-alarm");
let stopAlarm=document.getElementsByClassName("stop-alarm")[0];
let rington = new Audio("Assets/Alarm_rington.mp3");//adding mp3 file for alarm sound.
let currentTime; //store for current time
let count=0;//count add for delete alarms and add the count if is used for id spacecifire
let countDelete = 0; //varibale use for Count the number of alarms
let arr = []; //creating array for pushing the div of the  alarms ,this array needs for delete the alarm


//here we are setting the mode day and night
light.addEventListener("click", function () {
  if (dayMode) {
    color.className = "nightColor";
    // light.style.color = "black";
    dayMode = !dayMode;
  } else {
    color.className = "";
    // light.style.color = "white";
    dayMode = !dayMode;
  }
});

//here we set our alarm clock for upcoming alarms

let time = 0;
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

//creating array for storing the all alarms
let allAlarms = [];

//HERE WE SET THE ALARM
setAlarm.addEventListener("click", function () {
  time = `${hour.value}:${minute.value}:${second.value}`;

  if (hour.value > 12 || minute.value > 59 || second.value > 59) {
    window.alert("Invalid Input !");
    return;
  }
  if (hour.value < 10) {
    hour.value = "0" + hour.value;
  }

  if (minute.value == "") {
    minute.value = "0" + minute.value;
  }
  
  if (minute.value < 10) {
    minute.value = "0" + minute.value;
  }
  if (second.value == "") {
    second.value = "0" + second.value;
  }
  if (second.value < 10) {
    second.value = "0" + second.value;
  }

  if (hour.value == "" || hour.value == 00 || hour.value == 0) {
    window.alert("Press OK And Enter A Valid Keyword !");
  }
  //we can also write like that using asterisk and $ sign
  // time=`${selectInput[0].value}:${selectInput[1].value}:${selectInput[2].value}`;
  // document.getElementById('upcoming-alarm').innerHTML+=(time)+document.getElementById('ampm').value;
  else {

    //adding the alarm and put on new alarm then add in listAlarm as inner HTML

    let newAlarm = `
        <li class="delete-alarm">
            <h1 id="upcoming-alarm">${hour.value}:${minute.value}:${second.value}${ampm.value}</h1>
            <button class="btn delete-btn" onclick='alarmDelete(${count})'  type="">Delete Alarm</button>;
        </li>`;
    allAlarms.push(newAlarm);
    count++;
    setAllAlarm();
    countDelete++;
  }

  // let listUl=document.getElementById('alarm-list');
  // console.log("listUl",listUl);
  // let listItem=document.createElement(`li`);
  // listItem.textContent='hello i am list';
  // listItem.setAttribute("class", "democlass");
  // listUl.appendChild(listItem);
  // console.log("afterAppend",listUl);
  // console.log("listItem",listItem);

  //pushing the alarm in array on every click on set alarm button
  arr.push(`${hour.value}:${minute.value}:${second.value}${ampm.value}`);

  //reset the digit of input area after every set
  hour.value = "";
  minute.value = "";
  second.value = "";
});


//set alarm function set the alarm and show on display 
function setAllAlarm() {
  let alarms = "";
  for (i of allAlarms) {
    alarms += i;
  }
  listAlarm.innerHTML = alarms;
}

//DELETE ALARAM function

function alarmDelete(id){
    // we need to find the index
    let index=id-(count-countDelete);
    allAlarms.splice(index,1);//first parameter is starting index and 2nd parameter is delete how much items after starting index
    arr.splice(index,1);
    countDelete--;
    setAllAlarm();

}

stopAlarm.addEventListener('click',function(){
    rington.pause();
    image.className="";
});

// check the alarm time is present or not in array for ringing the alarm
function ringing() {
  for (let i = 0; i < arr.length; i++) {
    if (currentTime === arr[i]) {
      rington.play();
      image.className='shake';
    //window.alert("phone ringing");
    }
  }
}

setInterval(ringing, 10);

// here we set the current time and show on our display

function displayTime() {
  var today = new Date();
  var currentHours = today.getHours();
  var currentMinutes = today.getMinutes();
  var currentSecond = today.getSeconds();

  var ampm = today.getHours() < 12 ? "AM" : "PM";

  //converting the time in 12 hours
  if (currentHours > 12) {
    currentHours = currentHours - 12;
  }
  if (currentHours < 10) {
    currentHours = "0" + currentHours;
  }
  if (currentMinutes < 10) {
    currentMinutes = "0" + currentMinutes;
  }
  if (currentSecond < 10) {
    currentSecond = "0" + currentSecond;
  }

  currentTime =
    currentHours + ":" + currentMinutes + ":" + currentSecond + ampm;
  document.getElementById("display-time").innerHTML = currentTime;
}
setInterval(displayTime, 10);




