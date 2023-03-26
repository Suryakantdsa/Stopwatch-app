let [hour, min, sec, milisec] = [0, 0, 0, 0]
let timer = null;
const display = document.querySelector(".display")
const castDisplay = document.querySelector(".cast-display")

document.querySelector(".start").addEventListener("click", () => {
    if (timer !== null) {
        clearInterval(timer)
    }
    console.log("start click")
    timer = setInterval(displayTime, 10)
})

document.querySelector(".reset").addEventListener("click", () => {
    clearInterval(timer)
    hour = 0;
    min = 0;
    sec = 0;
    milisec = 0;
    display.innerHTML = `00:00:00:000`
})
document.querySelector(".pause").addEventListener("click", () => {
    clearInterval(timer)

})

const displayTime = () => {
    milisec += 10;
    if (milisec === 1000) {
        milisec = 0
        sec++
        if (sec === 60) {
            sec = 0
            min++
            if (min === 60) {
                min = 0;
                hour++
            }
        }
    }

    let h = hour < 10 ? "0" + hour : hour;
    let m = min < 10 ? "0" + min : min
    let s = sec < 10 ? "0" + sec : sec
    // let ms=milisec<10?"00"+milisec:milisec
    let ms = milisec < 10 ? "00" + milisec : (milisec < 100 ? "0" + milisec : milisec);


    display.innerHTML = `${h}:${m}:${s}:${ms}`
}
let i = 1

document.querySelector(".cast").addEventListener("click", () => {
    const cast = document.createElement("p");


    let h = hour < 10 ? "0" + hour : hour;
    let m = min < 10 ? "0" + min : min
    let s = sec < 10 ? "0" + sec : sec
    // let ms=milisec<10?"00"+milisec:milisec
    let ms = milisec < 10 ? "00" + milisec : (milisec < 100 ? "0" + milisec : milisec);


    cast.innerText = `cast${i}: ${h}:${m}:${s}:${ms}  `
    castDisplay.appendChild(cast)
    i++
})