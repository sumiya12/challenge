const secPermin = 60;
const minPerhour = 60;
const hourPerday = 24;
const dayPeryear = 365;
// const weekPeryear = 52;

const main = document.querySelector("main");
let today = new Date();
let year = today.getFullYear();

let nas = prompt("heden ond tursun be");
let nas2 = year - nas;
// console.log(
//   nas2 +
//     "" +
//     weekPeryear +
//     "" +
//     dayPerweek +
//     "" +
//     hourPerday +
//     "" +
//     minPerhour +
//     "" +
//     secPermin
// );

const alive = nas2 * dayPeryear * hourPerday * minPerhour * secPermin;
const perday = nas2 * dayPeryear;
main.innerHTML = `<p> ta iim sec amidarsan bn ${alive} bas  ${perday} udur amidarsan bn</p>`;
