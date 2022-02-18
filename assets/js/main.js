
// ---------------- Aufgabe 1_1 -----------------------
let date1 = new Date();
console.log(date1);

let date2 = new Date(0);
console.log(date2);

let date3 = new Date(31559608800);
console.log(date3);

let date4 = new Date(86400000);
console.log(date4);

// ---------------- Aufgabe 1_2 -----------------------
let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

console.log(new Date());
console.log(new Date().getFullYear());
console.log(new Date().getMonth() + " Monat");
console.log(new Date().getDay() + " Tag");
console.log(new Date().getHours() + " Stunde");
console.log(new Date().getMinutes() + " Minute");
console.log(wochenTag[new Date().getDay()]);
console.log(monate[new Date().getMonth()]);

// ---------------- Aufgabe 1_6 -----------------------
function show(value) {

    console.log(value);
    if (value.getHours() < 12) {
        console.log("AM");

    } else {
        console.log("PM");
    }
}

let date6_1 = new Date(1999, 10, 5, 15);
let date6_2 = new Date();
let date6_3 = new Date(2019, 12, 3, 12);
let date6_4 = new Date(2000, 1, 1, 11);
show(date6_1)
show(date6_2)
show(date6_3)
show(date6_4)

// ---------------- Aufgabe 1_7 -----------------------

function istWeekend(value) {

    newDate = value.split(",")
    newDate1 = new Date(newDate[2] + "-" + newDate[1] + "-" + newDate[0])

    let date1 = newDate1.getDay();

    if (date1 == 7 || date1 == 0) {
        return "Weekend"
    } else {
        return "Arbeitstag"
    }
}

console.log(istWeekend("15, 12, 2019"));
console.log(istWeekend("16, 2, 2001"));
console.log(istWeekend("2, 1, 2020"));
console.log(istWeekend("29, 2, 2020"));

// ---------------- Aufgabe 1_8 -----------------------
function countdown() {

    for (var i = 10; i > 0; i--) {
        console.log(i);
    }
    clearInterval(count)
}

let count = setInterval(countdown, 1000);


// ---------------- Aufgabe 1_9 -----------------------
function startTime() {
    let current = new Date().toLocaleString("de-de", { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    document.getElementById("txt").innerHTML = current;

}
setInterval(startTime, 1000);

