const hour = document.getElementById("hour")
const min = document.getElementById("min")
const sec = document.getElementById("sec")
const milisec = document.getElementById("ms")

const start = document.getElementById("start")
// const start=document.querySelector(".start")

const pause = document.getElementById("pause")
const reset = document.getElementById("reset")
const cast = document.getElementById("cast")

function inMili(milC){
    let k=setInterval(() => {
        if (milC < 999) {
            milC++;
            milisec.innerHTML = milC
        }
        else{
            // milisec.innerHTML="000"
            clearInterval(k)
        }
    }, 1);
}
function inSec(sC){


    let l=setInterval(() => {
        if (sC<60) {
            sC++;
            sec.innerHTML = sC
        }
        else{
            // sec.innerHTML="00"
            clearInterval(l)
        }
    }, 1000);

}
function inMin(mC){
   
    let m=setInterval(() => {
        if (mC<=60) {
            mC++;
            min.innerHTML = mC
        }
        else{
            // min.innerHTML="00"
            clearInterval(m)
        }
    }, 60000);
}

function inHour(hC){
    
    let n=setInterval(() => {
        if (hC<=60) {
            hC++;
            hour.innerHTML = hC
        }
        else{
            // hour.innerHTML="00"
            clearInterval(n)
        }
    }, 360000);
}
start.addEventListener("click", function () {
    let milC=0
    let sC=0
    let mC=0
    let hC=0


  inMili(milC)
  inSec(sC)
  inMin(mC)
  inHour(hC)
  
})



pause.addEventListener("click", function () {
    console.log("pasued")
    clearInterval(k)
    clearInterval(l)
    clearInterval(m)
    clearInterval(n)
})
reset.addEventListener("click", function () {

})
cast.addEventListener("click", function () {

})
