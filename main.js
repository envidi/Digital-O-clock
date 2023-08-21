const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
var textColor = document.querySelectorAll(".text")

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes();
    let s = new Date().getSeconds()
    // ampmEl.innerText = "AM";
    // if (h > 12) {
    //     h = h - 12;
    //     ampmEl.innerText = "PM";
    // }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;



    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;

    setTimeout(() => {
        updateClock()
    }, 1000)




}

updateClock()

const bodyEl = document.querySelector("body");
const inputEl = document.querySelector(".input");
inputEl.checked = false;
function updateBody() {
    if (inputEl.checked) {

        bodyEl.style.background = "url(https://images.unsplash.com/photo-1463780324318-d1a8ddc05a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)";
        bodyEl.style.backgroundRepeat = "no-repeat";
        bodyEl.style.backgroundSize = "cover";
        bodyEl.style.transition = " all 0.5s ease-in-out"
        hourEl.style.background = "rgba(0, 113, 218, 0.7)";
        minuteEl.style.background = "rgba(0, 113, 218, 0.7)";
        secondEl.style.background = "rgba(0, 113, 218, 0.7)";
        hourEl.style.color = "white";
        minuteEl.style.color = "white";
        secondEl.style.color = "white";
        for (var i = 0; i < textColor.length; i++) {
            textColor[i].style.background = "rgba(0, 65, 163, 0.8)";
        }
        for (var i = 0; i < textColor.length; i++) {
            textColor[i].style.color = "white";
        }
        ampmEl.innerText = "PM";
        ampmEl.style.transition = "all 0.9s ease-in-out";
    }
    else {
        bodyEl.style.background = "url(https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1042&q=80)";
        bodyEl.style.backgroundRepeat = "no-repeat";
        bodyEl.style.backgroundSize = "cover";
        for (var i = 0; i < textColor.length; i++) {
            textColor[i].style.background = "rgb(228, 152, 38, 0.8)";
        }
        hourEl.style.background = "rgb(254, 211, 100, 0.7)";
        minuteEl.style.background = "rgb(254, 211, 100, 0.7)";
        secondEl.style.background = "rgb(254, 211, 100, 0.7)";
        hourEl.style.color = "rgb(253, 55, 0)";
        minuteEl.style.color = "rgb(253, 55, 0)";
        secondEl.style.color = "rgb(253, 55, 0)";
        ampmEl.innerText = "AM";
        ampmEl.style.transition = "all 0.9s ease-in-out";



    }
}


inputEl.addEventListener("input", function () {
    updateBody()
})



