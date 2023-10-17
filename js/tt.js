// <!-- collapse all     Ctrl + k + 0 -->
// <!-- expand all       Ctrl + k + j -->
// <!-- word wrap toggle Alt + z -->

// if(document.readyState === "complete") {
//     // Fully loaded!
// }
// else if(document.readyState === "interactive") {
//     // DOM ready! Images, frames, and other subresources are still downloading.
// }
// else {
//     // Loading still in progress.
//     // To wait for it to complete, add "DOMContentLoaded" or "load" listeners.

//     window.addEventListener("DOMContentLoaded", () => {
//         // DOM ready! Images, frames, and other subresources are still downloading.
//     });

//     window.addEventListener("load", () => {
//         // Fully loaded!
//     });
// }

// console.log(window.innerWidth);
// console.log(window.innerHeight);
// document.getElementById("bodyElement").innerText = window.innerWidth + " x " + window.innerHeight;
// document.getElementById("headerElement").innerText = window.innerWidth + " x " + window.innerHeight;
// document.getElementById("mainElement").innerText = window.innerWidth + " x " + window.innerHeight;

// Get the root element
var r = document.querySelector(':root');
// Create a function for getting a variable value
function myFunction_get() {
    // Get the styles (properties and values) for the root
        var rs = getComputedStyle(r);
    // Alert the value of the --blue variable
        alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
}
// Create a function for setting a variable value
function myFunction_set(){
    // Set the value of variable --blue to another value (in this case "lightblue")
        // r.style.setProperty('--blue', 'lightblue');
        r.style.setProperty('--device_innerWidth', ( window.innerWidth * .95 ) + "px");
        r.style.setProperty('--device_innerHeight', ( window.innerHeight * .95 ) + "px");
        // r.style.setProperty('--device_innerWidth', ( window.innerWidth * 1.0 ) + "px");
        // r.style.setProperty('--device_innerHeight', ( window.innerHeight * 1.0 ) + "px");
}
myFunction_set();

let vPace = 0;
function calcStats(){
    xHours = document.getElementById("xHours").value * 1;
    xMinutes = document.getElementById("xMinutes").value * 1;
    xSeconds = document.getElementById("xSeconds").value * 1;
    xDistance = document.getElementById("xDistance").value * 1;
    if ((xHours + xMinutes + xSeconds) > 0 & xDistance > 0){
            vPace = (((xHours * 60) + xMinutes + (xSeconds/60))/xDistance*1000).toFixed(4);
    } else {
        vPace = 0;
    }
    // console.log(vPace);
    let vHTML = ``;
    // vHTML += `Run Statistics<br>`;
    // vHTML += `Pace ${(document.getElementById("xMinutes").value + (document.getElementById("xSeconds").value/60))/document.getElementById("xDistance").value*1000}`;
    // GOOD >>> vHTML += `<div>Pace ${((xMinutes + (xSeconds/60))/xDistance*1000).toFixed(4)}</div>`;
    vHTML += `${vPace}`;
    // document.getElementById("xPace").innerHTML = vHTML;
    document.getElementById("xPace").value = vHTML;
    // console.log(vHTML);
    // return vPace;
}

function getFutureDate(){
    var myDate = new Date();
    var myYear = myDate.getFullYear();
    var myFutureDate = new Date(myYear*1,7,1); /* 1 Jan yyyy*/
    var myTestDate = myFutureDate;
    var myCount = 0;
    var myMonth = 0;
    for (i=0;i<27;i++){
        myTestDate = new Date(myYear*1,7,i+1) /* i starts at 0 */ 
        // console.log(myTestDate);
        if (myTestDate.getDay()+1==1){ /* = 0 Sunday */
            myCount += 1;
            if (myCount===2){
                myMonth = ((myTestDate.getMonth()*1)+1);
                if (myMonth<10){myMonth = "0" + myMonth;}
                const myFutureDate = myTestDate.getFullYear() + "-" + myMonth + "-" + myTestDate.getDate();
                // console.log(myFutureDate);
                return myFutureDate;
            }
        }
    }
}
function getDaysToFutureDate(){
    var myDate = new Date();
    var myYear = myDate.getFullYear();
    var myFutureDate = new Date(myYear*1,7,1); /* 1 Jan yyyy*/
    var myTestDate = myFutureDate;
    var myCount = 0;
    var myDays = 0;
    for (i=0;i<27;i++){
        myTestDate = new Date(myYear*1,7,i+1) /* i starts at 0 */ 
        // console.log(myTestDate);
        if (myTestDate.getDay()+1==1){ /* = 0 Sunday */
            myCount += 1;
            if (myCount===2){
                myDays = ((myTestDate - myDate)/(24*60*60*1000)).toFixed(1);
                if(myDays < -1){
                // if(myDays < 0){
                    var myCount = 0;
                    var myDays = 0;
                    for (i=0;i<27;i++){
                        myTestDate = new Date((myYear*1)+1,7,i+1) /* i starts at 0 */ 
                        // console.log(myTestDate);
                        if (myTestDate.getDay()+1==1){ /* = 0 Sunday */
                            myCount += 1;
                            if (myCount===2){
                                myMonth = ((myTestDate.getMonth()*1)+1);
                                if (myMonth<10){myMonth = "0" + myMonth;}
                                const myFutureDate = myTestDate.getFullYear() + "-" + myMonth + "-" + myTestDate.getDate();
                                console.log(myFutureDate);
                                document.getElementById("futureDate").value = myFutureDate;
                                myDays = ((myTestDate - myDate)/(24*60*60*1000)).toFixed(1);
                                return myDays + " days.";
                            }
                        }
                    }
                }else{
                    if (myDays < 0){
                        myDays = 0;
                        // myDays = myDays.toFixed(1);
                    }
                    myMonth = ((myTestDate.getMonth()*1)+1);
                    if (myMonth<10){myMonth = "0" + myMonth;}
                    const myFutureDate = myTestDate.getFullYear() + "-" + myMonth + "-" + myTestDate.getDate();
                    console.log(myFutureDate);
                    document.getElementById("futureDate").value = myFutureDate;
                    return myDays + " days.";
                }
            }
        }
    }
}
function getFirstSaturdayDate(){
    var myDate = new Date();
    var myYear = myDate.getFullYear();
    var my1JanDate = new Date(myYear*1,0,1); /* 1 Jan yyyy*/
    var myTestDate = my1JanDate;
    for (i=0;i<27;i++){
        myTestDate = new Date(myYear*1,0,i+1) /* i starts at 0 */ 
        if (myTestDate.getDay()+1==7){ /* = 0 Sunday */
            return myTestDate;
        }
    }
}
const startDate = getFirstSaturdayDate();
// console.log(startDate);

function createTable(){
    var fromDate = startDate;
    var toDate = startDate;
    var v_initialOffsetDays = 0;
    var v_today = new Date();
    // alert(v_today.toISOString().slice(0,10));
    document.getElementById("xDate").value = v_today.toISOString().slice(0,10);
    v_today = v_today.toDateString().slice(0,15);
    var vHTML = ``;
    // vHTML += `<h1>Current training schedule</h1>`;
    vHTML += `<div class="beanie-heading"><h2>Prep for the City-2-Surf</h2></div>`;
    vHTML += `<table class="training-schedule-table">`;
        vHTML += `<tr>`;
            vHTML += `<th class="training-schedule-row">From: / To:</th>`;
            vHTML += `<th  class="training-schedule-row">Distance</th>`;
            vHTML += `<th  class="training-schedule-row">Repetitions</th>`;
            vHTML += `<th  class="training-schedule-row"></th>`;
        vHTML += `</tr>`;
        vHTML += `<tr>`;
            // 
            // 2 January	6 February	8.6km	6 times
            // 
            fromDate = startDate;
            vHTML += `<td class="training-schedule-row">${fromDate.toDateString().slice(0,15)}<br>`;
            toDate = new Date(fromDate.setDate(fromDate.getDate()+ (7 * 5)));
            vHTML += `${toDate.toDateString().slice(0,15)}</td>`;
            vHTML += `<td class="training-schedule-row">8.6km</td>`;
            vHTML += `<td class="training-schedule-row">6</td>`;
            if (fromDate.toDateString().slice(0,15) <= v_today && toDate.toDateString().slice(0,15) >= v_today){
                vHTML += `<td class="training-schedule-row"><span class="material-symbols-outlined">line_start_arrow_notch</span></td>`;
            } else {
                vHTML += `<td class="training-schedule-row"></td>`;
            }
        vHTML += `</tr>`;
        vHTML += `<tr>`;
            // 
            // 13 February	20 March	10.2km	6 times
            // 
            fromDate = new Date(fromDate.setDate(toDate.getDate()+ (7 * 1)));
            vHTML += `<td class="training-schedule-row">${fromDate.toDateString().slice(0,15)}<br>`;
            toDate = new Date(fromDate.setDate(fromDate.getDate()+ (7 * 5)));
            vHTML += `${toDate.toDateString().slice(0,15)}</td>`;
            vHTML += `<td class="training-schedule-row">10.2km</td>`;
            vHTML += `<td class="training-schedule-row">6</td>`;
            if (fromDate.toDateString().slice(0,15) <= v_today && toDate.toDateString().slice(0,15) >= v_today){
                vHTML += `<td class="training-schedule-row"><span class="material-symbols-outlined">line_start_arrow_notch</span></td>`;
            } else {
                vHTML += `<td class="training-schedule-row"></td>`;
                // alert(fromDate.toDateString().slice(0,15)+ " " + toDate.toDateString().slice(0,15) + " " + v_today);
            }
        vHTML += `</tr>`;
        vHTML += `<tr>`;
            // 
            // 27 March	1 May	12.0km	6 times
            // 
            fromDate = new Date(fromDate.setDate(toDate.getDate()+ (7 * 1)));
            vHTML += `<td class="training-schedule-row">${fromDate.toDateString().slice(0,15)}<br>`;
            toDate = new Date(fromDate.setDate(fromDate.getDate()+ (7 * 5)));
            vHTML += `${toDate.toDateString().slice(0,15)}</td>`;
            vHTML += `<td class="training-schedule-row">12.0km</td>`;
            vHTML += `<td class="training-schedule-row">6</td>`;
            if (fromDate.toDateString().slice(0,15) <= v_today && toDate.toDateString().slice(0,15) >= v_today){
                vHTML += `<td class="training-schedule-row"><span class="material-symbols-outlined">line_start_arrow_notch</span></td>`;
            } else {
                vHTML += `<td class="training-schedule-row"></td>`;
            }
        vHTML += `</tr>`;
        vHTML += `<tr>`;
            // 
            // 8 May	19 June	14.0km	7 times
            // 
            fromDate = new Date(fromDate.setDate(toDate.getDate()+ (7 * 1)));
            vHTML += `<td class="training-schedule-row">${fromDate.toDateString().slice(0,15)}<br>`;
            toDate = new Date(fromDate.setDate(fromDate.getDate()+ (7 * 6)));
            vHTML += `${toDate.toDateString().slice(0,15)}</td>`;
            vHTML += `<td class="training-schedule-row">14.0km</td>`;
            vHTML += `<td class="training-schedule-row">7</td>`;
            if (fromDate.toDateString().slice(0,15) <= v_today && toDate.toDateString().slice(0,15) >= v_today){
                vHTML += `<td class="training-schedule-row"><span class="material-symbols-outlined">line_start_arrow_notch</span></td>`;
            } else {
                vHTML += `<td class="training-schedule-row"></td>`;
            }
        vHTML += `</tr>`;
        vHTML += `<tr>`;
            // 
            // 26 June	31 July	15.1km	6 OR 7 times
            // 
            fromDate = new Date(fromDate.setDate(toDate.getDate()+ (7 * 1)));
            vHTML += `<td class="training-schedule-row">${fromDate.toDateString().slice(0,15)}<br>`;
            toDate = new Date(fromDate.setDate(fromDate.getDate()+ (7 * 5)));
            vHTML += `${toDate.toDateString().slice(0,15)}</td>`;
            vHTML += `<td class="training-schedule-row">15.1km</td>`;
            vHTML += `<td class="training-schedule-row">6</td>`;
            if (fromDate.toDateString().slice(0,15) <= v_today && toDate.toDateString().slice(0,15) >= v_today){
                vHTML += `<td class="training-schedule-row"><span class="material-symbols-outlined">line_start_arrow_notch</span></td>`;
            } else {
                vHTML += `<td class="training-schedule-row"></td>`;
            }
        vHTML += `</tr>`;
        vHTML += `<tr>`;
            // 
            // 6 August	OR 13 August Mass start, pre- C2S	6.5km	1 time
            // 
            fromDate = new Date(fromDate.setDate(toDate.getDate()+ (7 * 1)));
            vHTML += `<td class="training-schedule-row">${fromDate.toDateString().slice(0,15)}<br>`;
            toDate = new Date(fromDate.setDate(fromDate.getDate()+ (7 * 0)));
            vHTML += `${toDate.toDateString().slice(0,15)}</td>`;
            vHTML += `<td class="training-schedule-row">6.5km</td>`;
            vHTML += `<td class="training-schedule-row">1</td>`;
            if (fromDate.toDateString().slice(0,15) <= v_today && toDate.toDateString().slice(0,15) >= v_today){
                vHTML += `<td class="training-schedule-row"><span class="material-symbols-outlined">line_start_arrow_notch</span></td>`;
            } else {
                vHTML += `<td class="training-schedule-row"></td>`;
            }
        vHTML += `</tr>`;
        vHTML += `<tr>`;
            // 
            // 7 August	OR 14 August CITY 2 SURF (C2S)	14.0km	
            // 
            fromDate = new Date(fromDate.setDate(toDate.getDate()+ (7 * 0)+1));
            vHTML += `<td class="training-schedule-row">${fromDate.toDateString().slice(0,15)}</td>`;
            toDate = new Date(fromDate.setDate(fromDate.getDate()+ (7 * 0)));
            // vHTML += `<td class="training-schedule-row">${toDate.toDateString().slice(0,15)}</td>`;
            vHTML += `<td class="training-schedule-row">14.0km</td>`;
            vHTML += `<td class="training-schedule-row">City-2-Surf</td>`;
            if (fromDate.toDateString().slice(0,15) <= v_today && toDate.toDateString().slice(0,15) >= v_today){
                vHTML += `<td class="training-schedule-row"><span class="material-symbols-outlined">line_start_arrow_notch</span></td>`;
            } else {
                vHTML += `<td class="training-schedule-row"></td>`;
            }
        vHTML += `</tr>`;
        vHTML += `<tr>`;
            // 
            // 14 August	28 August	12.0km	3 times
            // 
            fromDate = new Date(fromDate.setDate(toDate.getDate()+ (7 * 1)-1));
            vHTML += `<td class="training-schedule-row">${fromDate.toDateString().slice(0,15)}<br>`;
            toDate = new Date(fromDate.setDate(fromDate.getDate()+ (7 * 2)));
            vHTML += `${toDate.toDateString().slice(0,15)}</td>`;
            vHTML += `<td class="training-schedule-row">12.0km</td>`;
            vHTML += `<td class="training-schedule-row">3</td>`;
            if (fromDate.toDateString().slice(0,15) <= v_today && toDate.toDateString().slice(0,15) >= v_today){
                vHTML += `<td class="training-schedule-row"><span class="material-symbols-outlined">line_start_arrow_notch</span></td>`;
            } else {
                vHTML += `<td class="training-schedule-row"></td>`;
            }
        vHTML += `</tr>`;
        vHTML += `<tr>`;
            // 
            // 4 September	18 September	10.2km	3 times
            // 
            fromDate = new Date(fromDate.setDate(toDate.getDate()+ (7 * 1)));
            vHTML += `<td class="training-schedule-row">${fromDate.toDateString().slice(0,15)}<br>`;
            toDate = new Date(fromDate.setDate(fromDate.getDate()+ (7 * 2)));
            vHTML += `${toDate.toDateString().slice(0,15)}</td>`;
            vHTML += `<td class="training-schedule-row">10.2km</td>`;
            vHTML += `<td class="training-schedule-row">3</td>`;
            if (fromDate.toDateString().slice(0,15) <= v_today && toDate.toDateString().slice(0,15) >= v_today){
                vHTML += `<td class="training-schedule-row"><span class="material-symbols-outlined">line_start_arrow_notch</span></td>`;
            } else {
                vHTML += `<td class="training-schedule-row"></td>`;
            }
        vHTML += `</tr>`;
        vHTML += `<tr>`;
            // 
            // 25 September	9 October	8.6km	3 times
            // 
            fromDate = new Date(fromDate.setDate(toDate.getDate()+ (7 * 1)));
            vHTML += `<td class="training-schedule-row">${fromDate.toDateString().slice(0,15)}<br>`;
            toDate = new Date(fromDate.setDate(fromDate.getDate()+ (7 * 2)));
            vHTML += `${toDate.toDateString().slice(0,15)}</td>`;
            vHTML += `<td class="training-schedule-row">8.6km</td>`;
            vHTML += `<td class="training-schedule-row">3</td>`;
            if (fromDate.toDateString().slice(0,15) <= v_today && toDate.toDateString().slice(0,15) >= v_today){
                vHTML += `<td class="training-schedule-row"><span class="material-symbols-outlined">line_start_arrow_notch</span></td>`;
            } else {
                vHTML += `<td class="training-schedule-row"></td>`;
            }
        vHTML += `</tr>`;
        vHTML += `<tr>`;
            // 
            // 16 October	25 December	6.5km	11 times
            // 
            fromDate = new Date(fromDate.setDate(toDate.getDate()+ (7 * 1)));
            vHTML += `<td class="training-schedule-row">${fromDate.toDateString().slice(0,15)}<br>`;
            toDate = new Date(fromDate.setDate(fromDate.getDate()+ (7 * 7)));
            // vHTML += `<td class="training-schedule-row">${toDate.toDateString().slice(0,15)}</td>`;
            vHTML += `...to end of year</td>`;
            vHTML += `<td class="training-schedule-row">6.5km</td>`;
            vHTML += `<td class="training-schedule-row"></td>`;
            if (fromDate.toDateString().slice(0,15) <= v_today && toDate.toDateString().slice(0,15) >= v_today){
                vHTML += `<td class="training-schedule-row"><span class="material-symbols-outlined">line_start_arrow_notch</span></td>`;
            } else {
                vHTML += `<td class="training-schedule-row"></td>`;
            }
        vHTML += `</tr>`;
    vHTML += `</table>`;
    // console.log(vHTML);
    return vHTML;
}
const weeklyScheduleHTML = createTable();
// console.log(weeklyScheduleHTML);
// document.getElementById("weeklySchedule").innerHTML = weeklyScheduleHTML;

function xDistanceUpdate(){
    document.getElementById("xDistance").value = document.getElementById("ttCourse").value;
}
function saveTime(){

    let ttName = document.getElementById("ttName").value
    let xHours = document.getElementById("xHours").value * 1;
    let xMinutes = document.getElementById("xMinutes").value * 1;
    let xSeconds = document.getElementById("xSeconds").value * 1;
    let xDistance = document.getElementById("xDistance").value * 1;
    if ((xHours + xMinutes + xSeconds) > 0 & xDistance > 0){
    } else {
        alert("Please enter time and distance values.");
        document.getElementById("ttName").focus();
        document.getElementById("ttName").select();
        return;
    }
    if (!ttName){
        alert("Please enter a runner name.");
        document.getElementById("ttName").focus();
        document.getElementById("ttName").select();
        return;
    }
    if (ttName.slice(0,1) === " "){
        alert("Please enter a valid runner name.  Check for leading spaces");
        document.getElementById("ttName").focus();
        document.getElementById("ttName").select();
        return;
    }
    // record times
    const myTimeDate = new Date()

    var vDistance = document.getElementById("xDistance").value * 1;
    vDistance = vDistance.toFixed(3);
    var vHours = document.getElementById("xHours").value * 1;
    vHours = vHours.toFixed(3);
    var vMinutes = document.getElementById("xMinutes").value * 1;
    vMinutes = vMinutes.toFixed(3);
    var vSeconds = document.getElementById("xSeconds").value * 1;
    vSeconds = vSeconds.toFixed(3);
    // var vPace = calcStats();
    // var vPace = document.getElementById("xPace").innerText * 1;
    var vPace = document.getElementById("xPace").value * 1;
    vPace = vPace.toFixed(3);
    // var xTimeRecord = document.getElementById("xDate").value + " , " + document.getElementById("xTime").value + " , " + document.getElementById("ttName").value + " , " + vDistance + " metres , " + vHours + " hrs , " + vMinutes + " min , " + vSeconds + " sec , " + vPace + " pace ,";
    var xTimeRecord = document.getElementById("xDate").value + " , " + document.getElementById("ttName").value + " , " + vDistance + " metres , " + vHours + " hrs , " + vMinutes + " min , " + vSeconds + " sec , " + vPace + " pace , ";
    console.log(xTimeRecord);
    window.localStorage.setItem("TT time recorded on:- " + myTimeDate.toDateString() + " at:- " + myTimeDate.toTimeString().slice(0,8), xTimeRecord);

    window.localStorage.setItem("runner!" + document.getElementById("ttName").value,document.getElementById("ttName").value);
    autocomplete(document.getElementById("ttName"), getRunnerNames());

    // document.getElementById("fName").value = "";
    // document.getElementById("lName").value = "";
    document.getElementById("ttName").value = "";
    document.getElementById("xHours").value = 0;
    document.getElementById("xDistance").value = 0;
    document.getElementById("xMinutes").value = 0;
    document.getElementById("xSeconds").value = 0;

    displayTimesHistory();
    displayTimesAnalysis();
}
function getRunnerNames(){
    aRunnerNames = [];
    aNamesList = [];
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).slice(0,7)==="runner!"){
            aRunnerNames.push(localStorage.getItem(localStorage.key(i)));
            // aNamesList.push(localStorage.getItem(localStorage.key(i)) + ',' + localStorage.key(i));
            aNamesList.push(localStorage.getItem(localStorage.key(i))); 
            console.log(localStorage.getItem(localStorage.key(i)));
        }
    }
    aRunnerNames.sort();
    aNamesList.sort();
    // aRunnerNames.reverse();
    console.log(aRunnerNames);
    console.log(aNamesList);

    // POPULATE element "namesList"
        var vHTML = ``;
        for (let i = 0; i < aNamesList.length; i++) {
            // vHTML += `${aNamesList[i]}<span class="material-symbols-outlined">delete</span><br>`;
            // vHTML += `<div><a href="javascript:prompt('Edit or Delete this name:','${aNamesList[i]}');">${aNamesList[i]}</a></div>`;
            // vHTML += `<div onclick="namesCRUDlike(${aNamesList[i]})"><a href="javascript:prompt('Edit or Delete this name:','${aNamesList[i]}');">${aNamesList[i]}</a></div>`;
            vHTML += `<div id="${aNamesList[i]}" class="names-CRUDlike" onclick="namesCRUDlike(this.id)">${aNamesList[i]}</div>`;
        }
        console.log(vHTML);
        document.getElementById("namesList").innerHTML = vHTML;
    // POPULATE element "namesList"

    return aRunnerNames;
}
function displayTimesHistory(){
    let aTimes = [];
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).slice(0,7)==="TT time"){
            console.log(localStorage.getItem(localStorage.key(i)));
            aTimes.push(localStorage.getItem(localStorage.key(i)));
        }
    }
    aTimes.sort();
    aTimes.reverse();
    console.log(aTimes);
    var vHTML = ``;
    for (let i = 0; i < aTimes.length; i++) {
        vHTML += `${aTimes[i]}<br>`;
    }
    document.getElementById("timesHistory").innerHTML = vHTML;
    console.log(vHTML);
}
displayTimesHistory();
function eraseHistory(){
    aTimes = [];
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).substring(0,7) == 'TT time') {
            aTimes.push(localStorage.key(i));
        }
    }
    for (var i = 0; i < aTimes.length; i++) {
        localStorage.removeItem(aTimes[i]);
    }
    displayTimesHistory();
    displayTimesAnalysis();
    document.getElementById("ttName").focus();
    document.getElementById("ttName").select();
}
function displayTimesAnalysis(){
    let aTimes = [];
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).slice(0,7)==="TT time"){
            console.log(localStorage.getItem(localStorage.key(i)));
            aTimes.push(localStorage.getItem(localStorage.key(i)));
        }
    }
    aTimes.sort();
    aTimes.reverse();
    console.log(aTimes);
    let xCount, x, lineArray;
    let aDistance = 0;
    var vHTML = ``;
    for (let i = 0; i < aTimes.length; i++) {
        lineArray = aTimes[i].split(",")
        console.log(lineArray[2].slice(1,lineArray[2].length - 8));
        aDistance += (lineArray[2].slice(1,lineArray[2].length - 8) * 1)/1000;
        // vHTML += `${aTimes[i]}<br>`;
    }
    vHTML += `${aTimes.length} runners<br>`;
    vHTML += `${aDistance.toFixed(3)} km<br>`;
    document.getElementById("timesAnalysis").innerHTML = vHTML;
    console.log(vHTML);
}
displayTimesAnalysis();

function emailTimesIn(){
    let aTimes = [];
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).slice(0,7)==="TT time"){
            // console.log(localStorage.getItem(localStorage.key(i)) + " , " + localStorage.key(i) + " , ");
            console.log(localStorage.getItem(localStorage.key(i)) + localStorage.key(i) + " , ");
            // aTimes.push(localStorage.getItem(localStorage.key(i)) + " , " + localStorage.key(i) + " , ");
            aTimes.push(localStorage.getItem(localStorage.key(i)) + localStorage.key(i) + " , ");
        }
    }
    aTimes.sort();
    aTimes.reverse();
    console.log(aTimes);
    let vTEXT = `Run date: , Name , Distance , Hours , Minutes , Seconds , Pace , Record date ,%0D%0A`;
    var vHTML = ``;
    vHTML += `<div><h2>Turramurra Trotters</h2></div>`;
    vHTML += `<table>`;
    vHTML += `<tr>`;
        vHTML += `<th>Run date:</th>`;
        vHTML += `<th>Name</th>`;
        vHTML += `<th>Distance</th>`;
        vHTML += `<th>Minutes</th>`;
        vHTML += `<th>Seconds</th>`;
        vHTML += `<th>Record Date and Time</th>`;
    vHTML += `</tr>`;
    let runDate="",runnerName="",runDistance="",runMinutes="",runSeconds="",runRecordedDateTime="";
    let nStart=0,nEnd=0,nCount=0;
    for (let i = 0; i < aTimes.length; i++) {
        vHTML += `<tr>`;
        vTEXT += aTimes[i] + `%0D%0A`;
        for (let n1=0; n1 < aTimes[i].length; n1++){
            if (aTimes[i].slice(n1,n1+3)===" , "){
                nEnd = n1;
                switch (nCount){
                    case 0:
                        runDate = aTimes[i].slice(nStart,nEnd);
                        console.log(nStart, nEnd, runDate);
                        vHTML += `<td>${runDate}</td>`;
                        break;
                    case 1:
                        runnerName = aTimes[i].slice(nStart,nEnd);
                        console.log(nStart, nEnd, runnerName);
                        vHTML += `<td>${runnerName}</td>`;
                        break;
                    case 2:
                        runDistance = aTimes[i].slice(nStart,nEnd);
                        console.log(nStart, nEnd, runDistance);
                        vHTML += `<td>${runDistance}</td>`;
                        break;
                    case 3:
                        runHours = aTimes[i].slice(nStart,nEnd);
                        console.log(nStart, nEnd, runHours);
                        vHTML += `<td>${runHours}</td>`;
                        break;
                    case 4:
                        runMinutes = aTimes[i].slice(nStart,nEnd);
                        console.log(nStart, nEnd, runMinutes);
                        vHTML += `<td>${runMinutes}</td>`;
                        break;
                    case 5:
                        runSeconds = aTimes[i].slice(nStart,nEnd);
                        console.log(nStart, nEnd, runSeconds);
                        vHTML += `<td>${runSeconds}</td>`;
                        break;
                    case 6:
                        runPace = aTimes[i].slice(nStart,nEnd);
                        console.log(nStart, nEnd, runPace);
                        vHTML += `<td>${runPace}</td>`;
                        break;
                    case 7:
                        runRecordedDateTime = aTimes[i].slice(nStart,nEnd);
                        console.log(nStart, nEnd, runRecordedDateTime);
                        vHTML += `<td>${runRecordedDateTime}</td>`;
                        break;
                }
                nStart = nEnd+3;
                nCount++;
            }
        }
        nStart=0;
        nCount=0;
        vHTML += `</tr>`;
    }
    vHTML += `</table>`;
    console.log(vHTML);
    console.log(vTEXT);
    // for (let i = 0; i < aTimes.length; i++) {
    //     vHTML += `${aTimes[i]}<br>`;
    // }
    var emailSubject = "TT Times";
    // window.open(`mailto:?subject=${emailSubject}&body=${vHTML}`);
    // window.open(`mailto:?subject=${emailSubject}&body=${vTEXT}`);
    window.location.href = "mailto:?subject=" + emailSubject + "&body=" + vTEXT;

    document.getElementById("ttName").focus();
    document.getElementById("ttName").select();
}

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                // 
                    document.getElementById(inp.id).focus();
                // 
                /*close the list of autocompleted values, (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed, increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed, decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
        }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}
// /*An array containing all the country names in the world:*/
// var runnerNames = ["Phil South","Alan Cole","Peter Welch","Les Bryce","John Marshall","Margaret Marchall","Brian Matthes","Lyn Matthews","Ralph Pain","Geoff Russell","Clare Pain","Nick Swan","Allison Lilley"];
// /*initiate the autocomplete function on the "ttName" element, and pass along the runnerNames array as possible autocomplete values:*/
// autocomplete(document.getElementById("ttName"), runnerNames);

function userPIN(){
    const vUserPIN = document.getElementById("userPIN").value;
    switch(vUserPIN) {
    case "74192320":
        // /*An array containing all the country names in the world:*/
        // var runnerNames = ["Phil South","Alan Cole","Peter Welch","Les Bryce","John Marshall","Margaret Marchall","Brian Matthes","Lyn Matthews","Ralph Pain","Geoff Russell","Clare Pain","Nick Swan","Allison Lilley"];
        // /*initiate the autocomplete function on the "ttName" element, and pass along the runnerNames array as possible autocomplete values:*/
        // autocomplete(document.getElementById("ttName"), runnerNames);
        // document.getElementById("timesForm").style.display="block";
        // document.getElementById("timesHistoryContainer").style.display="block";
        // document.getElementById("userAccess").style.display="none";
        // document.getElementById("city2surfCountdownWrapper").style.display="none";
        // document.getElementById("weeklySchedule").style.display="none";
        // document.getElementById("headerElement").style.display="none";
        // document.getElementById("bodyElement").style.display="none";
        // break;
    case "":
        /*An array containing all the country names in the world:*/
        var runnerNames = [];
        runnerNames = getRunnerNames();
        /*initiate the autocomplete function on the "ttName" element, and pass along the runnerNames array as possible autocomplete values:*/
        autocomplete(document.getElementById("ttName"), runnerNames);
        document.getElementById("timesForm").style.display="block";
        document.getElementById("timesHistoryContainer").style.display="block";
        document.getElementById("timesAnalysisContainer").style.display="block";
        document.getElementById("namesMaintenanceContainer").style.display="block";
        document.getElementById("userAccess").style.display="none";
        document.getElementById("city2surfCountdownWrapper").style.display="none";
        // document.getElementById("weeklySchedule").style.display="none";
        document.getElementById("headerElement").style.display="none";
        document.getElementById("bodyElement").style.display="none";
        document.getElementById("ttName").focus();
        document.getElementById("ttName").select();
        break;
    default:
    }
    document.getElementById("userPIN").value = null;
}

function genericInputFocusActions(e){

    // NOT SURE IF THIS WORED OR NOT
    // var scale = 'scale(1)';
    // document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
    // document.body.style.msTransform =   scale;       // IE 9
    // document.body.style.transform = scale;     // General
    // NOT SURE IF THIS WORED OR NOT

    // PROBLEM SOLVED WITH THIS - maximum-scale=1.0
    // <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    // PROBLEM SOLVED WITH THIS - maximum-scale=1.0

    e.select();

}

// // console.log(getFutureDate());
// var daysToFutureDate = 0;
// var baseDate = new Date();
// // console.log(baseDate);
// daysToFutureDate = document.getElementById("futureDate").value - baseDate;
document.getElementById("daysCount").innerHTML = getDaysToFutureDate();

window.addEventListener("load", () => {
    // Fully loaded!
    // document.getElementById("futureDate").value = getFutureDate();
    document.getElementById("xHours").addEventListener("change",calcStats());
    document.getElementById("xMinutes").addEventListener("change",calcStats());
    document.getElementById("xSeconds").addEventListener("change",calcStats());
    document.getElementById("xDistance").addEventListener("change",calcStats());
    document.getElementById("ttCourse").addEventListener("change",calcStats());
    document.getElementById("xPace").addEventListener("mouseover",calcStats());
    document.getElementById("xPace").addEventListener("touchstart",calcStats());
    document.getElementById("ttName").addEventListener("change",document.getElementById("xHours").focus())
    document.getElementById("ttName").select();
});

// NAMES MAINTENANCE
function namesCRUDlike(runnerID){
    // document.getElementById("ttName").value = runnerID;
    let name0 = runnerID;
    let name1 = window.prompt('Edit/Update/Change this name, or Delete by typing the word "delete":',runnerID);
    if (!name1){
        // do nothing
    } else {
        if (name1.slice(0,1)===" "){
            alert(name1 + " cannot have leading spaces, please try again.");
        } else {
            if (name0 !== name1){
                for (let i = 0; i < localStorage.length; i++) {
                    if (window.localStorage.key(i)==="runner!" + name0){
                        console.log(window.localStorage.key(i));
                        window.localStorage.removeItem(window.localStorage.key(i));
                    }
                }
                // if (name1){
                    if (name1.slice(0,6)==="delete"){
                    } else {
                        window.localStorage.setItem("runner!" + name1,name1);
                    // } else {
                        // alert(name0 + " has been deleted.");
                    }
                // } else {
                    // alert(name0 + " has been erased.");
                // }
            }
            getRunnerNames();
        }
    }
}
function importNames(){
    
}
function listNames(){

}
// NAMES MAINTENANCE

// DATA VALIDATION START 
const datval_xMinutes = document.getElementById("xMinutes");
datval_xMinutes.addEventListener("input", (event) => {
    if (datval_xMinutes.validity.valid) {
    } else {
        // datval_xMinutes.setCustomValidity("");
        alert("value out of range, please try again");
        document.getElementById("xMinutes").value = 0;
        document.getElementById("xMinutes").focus();
        document.getElementById("xMinutes").select();
    }
});
const datval_xSeconds = document.getElementById("xSeconds");
datval_xSeconds.addEventListener("input", (event) => {
    if (datval_xSeconds.validity.valid) {
    } else {
        // datval_xSeconds.setCustomValidity("");
        alert("value out of range, please try again");
        document.getElementById("xSeconds").value = 0;
        document.getElementById("xSeconds").focus();
        document.getElementById("xSeconds").select();
    }
});
// DATA VALIDATION END 


// DON'T FORGET TO DATA VALIDATE FOR ","