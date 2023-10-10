const pmAm = (stunde) =>{
    stunde < 12 ? console.log("AM") : console.log("PM");
}
let date1 = new Date(1999, 10, 5, 15) //PM
let date2 = new Date()
let date3 = new Date(2019, 12, 3, 12) //PM
let date4 = new Date(2000, 1, 1, 11) //AM
pmAm(date1.getHours());
pmAm(date2.getHours());
pmAm(date3.getHours());
pmAm(date4.getHours());
