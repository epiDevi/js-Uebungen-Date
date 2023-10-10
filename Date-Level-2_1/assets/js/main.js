let datum= new Date();
const output = document.querySelector("section");
console.log(datum);
output.innerHTML+= `<p>${datum.getDate()}/${datum.getMonth()+1}/${datum.getFullYear()}</p>`;