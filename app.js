let myName = document.querySelector("#name");
let height = document.querySelector("#height");
let country = document.querySelector("#country");

let userName = "philip";
let userHeight = 4.0;
let userCountry = "Kenya";


const myCode = () => {
    myName.innerHTML = userName;
    height.innerHTML = userHeight;
    country.innerHTML = userCountry
}

window.onload = myCode;