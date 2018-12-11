function updateTimer(){
    // new Date() will create a new Date object with the current time
    // where current time = the moment the line ran
    var now = new Date();
    // getTime() can be run against a Date Object, and will convert to the # 
    // of milliseconds since 1-1-1970
    var nowAsTimestamp = now.getTime();
    // console.log(nowAsTimestamp)
    var timeRemaining = timeStamp - nowAsTimestamp;
    // console.log(timeRemaining)
    
    var seconds = Math.floor((timeRemaining / 1000) % 60);
	var minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
	var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
	var days = Math.floor((timeRemaining / (1000 * 60 * 60 * 24)) % 7);
    var weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7));
    // console.log(seconds)
    // console.log(minutes)
    
    // getElementsByClassName ALWAYS returns an Array, even if there is 0 
    // ;
    document.getElementsByClassName('weeks')[0].innerHTML = weeks
    // querySelector will use css rules to find a match,
    // and only ger the first one ... Not an Array
    document.querySelector('.days').innerHTML = days
    document.querySelector('.hours').innerHTML = hours
    document.querySelector('.minutes').innerHTML = minutes
    document.querySelector('.seconds').innerHTML = seconds
    // document.getElementsByClassName('days')[0].innerHTML = days
    
    // document.getElementsByClassName('hours')[0].innerHTML = days
    // == compares values
    // === compares values and datatypes
    // minutes == "0"
    // minutes == 0 True
    // minutes == 0 NOT TRUE 
    if (seconds === 0){
        document.querySelector('.message').innerHTML = "One minutes closer to Christmas"
    } else if (seconds < 50){
        document.querySelector('.message').innerHTML = ""
    }
};

function newYear(){
    endDate = new Date("January 1, 2019")
    timeStamp = endDate.getTime();
    document.body.style.backgroundImage = "url('./newYears.jpg')"
    document.getElementById("title").innerHTML = "Countdown to New Years"
    document.body.style.color = 'white'
    document.querySelector('.newYears').style.color = 'white'
    document.querySelector('.newYears').style.backgroundColor = 'transparent'
    document.querySelector('.newYears').style.opacity = '0.7'
    document.querySelector('.birthday').style.color = 'white'
    document.querySelector('.birthday').style.backgroundColor = 'transparent'
    document.querySelector('.birthday').style.opacity = '0.7'
    document.querySelector('.christmas').style.color = 'white'
    document.querySelector('.christmas').style.backgroundColor = 'transparent'
    document.querySelector('.christmas').style.opacity = '0.7'
    document.getElementById('countdown').style.border = 'none'
    document.getElementById('countdown').style.borderRadius = '20px'
    document.getElementById('countdown').style.position = 'relative'
    document.getElementById('countdown').style.backgroundColor = 'transparent'
    document.getElementById('countdown').style.opacity = '0.7'
    document.getElementById('countdown').style.marginLeft = '200px'
    document.getElementById('countdown').style.marginRight = '200px'
}
function christmas(){
    endDate = new Date("December 25, 2018")
    timeStamp = endDate.getTime();
    document.body.style.backgroundImage = "url('./xmas2.jpg')"
    document.getElementById("title").innerHTML = "Countdown to Christmas"
    document.body.style.color = 'white'
    document.querySelector('.newYears').style.color = 'white'
    document.querySelector('.newYears').style.backgroundColor = 'transparent'
    document.querySelector('.newYears').style.opacity = '0.7'
    document.querySelector('.birthday').style.color = 'white'
    document.querySelector('.birthday').style.backgroundColor = 'transparent'
    document.querySelector('.birthday').style.opacity = '0.7'
    document.querySelector('.christmas').style.color = 'white'
    document.querySelector('.christmas').style.backgroundColor = 'transparent'
    document.querySelector('.christmas').style.opacity = '0.7'
    document.getElementById('countdown').style.border = 'none'
    document.getElementById('countdown').style.borderRadius = '20px'
    document.getElementById('countdown').style.position = 'relative'
    document.getElementById('countdown').style.backgroundColor = 'transparent'
    document.getElementById('countdown').style.opacity = '0.7'
    document.getElementById('countdown').style.marginLeft = '200px'
    document.getElementById('countdown').style.marginRight = '200px'
}
function birthday(){
    var bday = prompt ("When is your next birthday? ")
    endDate = new Date(bday)
    timeStamp = endDate.getTime();
    document.body.style.backgroundImage = "url('birthday.jpg')"
    document.getElementById("title").innerHTML = "Countdown to Birthday"
    document.body.style.color = 'black'
    document.querySelector('.newYears').style.color = 'black'
    document.querySelector('.newYears').style.backgroundColor = 'white'
    document.querySelector('.newYears').style.opacity = '0.7'
    document.querySelector('.birthday').style.color = 'black'
    document.querySelector('.birthday').style.backgroundColor = 'white'
    document.querySelector('.birthday').style.opacity = '0.7'
    document.querySelector('.christmas').style.color = 'black'
    document.querySelector('.christmas').style.backgroundColor = 'white'
    document.querySelector('.christmas').style.opacity = '0.7'
    document.getElementById('countdown').style.border = '1px solid black'
    document.getElementById('countdown').style.borderRadius = '20px'
    document.getElementById('countdown').style.position = 'relative'
    document.getElementById('countdown').style.backgroundColor = 'white'
    document.getElementById('countdown').style.opacity = '0.7'
    document.getElementById('countdown').style.marginLeft = '200px'
    document.getElementById('countdown').style.marginRight = '200px'
}

// console.log(endDate)
// console.log(timeStamp)
// 1. setInterval will call the function in arg1 
// 2. every arg2 milliseconds
var endDate = new Date("December 25, 2018");
var timeStamp = endDate.getTime();
setInterval(updateTimer, 1000)
