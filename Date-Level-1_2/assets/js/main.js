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

let heute= new Date();
console.log(heute);
console.log(heute.getFullYear());
console.log(`${heute.getMonth()} Monate`);
console.log(`${heute.getDate()} Tage`);
console.log(`${heute.getHours()} Stunde`);
console.log(`${heute.getMinutes()} Minute`);
console.log(`${heute.toLocaleString("default", { weekday: "long" })} `);
console.log(`${heute.toLocaleString("default", { month: "long" })} `);

let newDate= new Date(1988, 5, 2, 7, 0, 0);
console.log(newDate);
console.log(newDate.toLocaleDateString());
console.log(newDate.toLocaleDateString("default", { month: "long" }));
console.log(newDate.toLocaleString("default", { weekday: "long" }));
console.log(newDate.getHours());
const weekDay= document.querySelector(".weekDay");
const hours= document.querySelector(".hours");
const minuts = document.querySelector(".minuts");
const second = document.querySelector(".second");
console.log(weekDay);
weekDay.innerHTML= newDate.toLocaleString("default", { weekday: "long" });
hours.innerHTML= newDate.getHours();
minuts.innerHTML= newDate.getMinutes();
second.innerHTML= newDate.getSeconds();