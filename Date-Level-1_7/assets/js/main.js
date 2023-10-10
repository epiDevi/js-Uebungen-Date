let datum1= new Date(2019, 12,15);
let datum2= new Date(2001, 2, 16);
let datum3= new Date(2020, 2, 1);
let datum4= new Date(2001, 2, 29);
console.log(datum1.getDay());
console.log(datum2);
console.log(datum3);
console.log(datum4);
const testDay = (day) => {
    day > 5 ? console.log("Weekend") : console.log("Arbeitstag");;
}

testDay(datum1.getDay);
testDay(datum2.getDay);
testDay(datum3.getDay);
testDay(datum4.getDay);