const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursNum = document.querySelector('.hours'),
    minutesNum = document.querySelector('.minutes')

function clock() {
    let time = new Date()
    let second = time.getSeconds() * 6
    let minutes = time.getMinutes() * 6
    let hours = time.getHours() * 30

    sec.style.transform = `rotate(${second}deg)`
    min.style.transform = `rotate(${minutes}deg)`
    hour.style.transform = `rotate(${hours}deg)`


    hoursNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minutesNum.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()

    setTimeout(() => clock(), 1000);

}
console.log(clock());

const tabsContentItem = document.querySelectorAll('.tabsContentItem'),
    tabsItem = document.querySelectorAll('.tabsItem')

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', () => {
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove('active')
            tabsContentItem[j].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
}



// Sekundomer
let dot = document.querySelector (".active_clear")
let dot2 = document.querySelector (".tabsLink__span")
const hNum = document.querySelector (".stopwatch__hours")
const mNum = document.querySelector (".stopwatch__minutes")
const sNum = document.querySelector (".stopwatch__seconds")
const msNum = document.querySelector (".stopwatch__milliseconds")
const stopWatchBtn = document.querySelector (".stopwatch__btn")
let houri = 0,
    minuti = 0,
    sekundi = -1,
    son = 0,
    t





function tick(){
    sekundi++;
    if (sekundi >59) {
        sekundi = 0;
        minuti++;
        if (minuti >59) {
            minuti = 0;
            houri++;
        }
    }
    t = setTimeout(add, 1000);
}
function add() {
    tick();
    hNum.textContent = (houri < 10 ? houri : "" + houri); 
    mNum.textContent = (minuti < 10 ? minuti : "" + minuti);
    sNum.textContent = (sekundi < 10 ? sekundi : "" + sekundi);
   
}


stopWatchBtn.addEventListener('click', () => {
    
    start()
    play()
    
    stopWatchBtn.addEventListener('click', () => {
        stop()
        pause()
        stopWatchBtn.addEventListener('click', () => {
          clear()
            hNum.innerHTML = "0";
            mNum.innerHTML = "0";
            sNum.innerHTML = "0";
        })
    })
}) 


 function start() {
     
    stopWatchBtn.textContent="STOP" 
    dot.style = `background: red`  
    dot2.style = `background: red`
    
    
    
 } 

 
 function stop() {
    stopWatchBtn.textContent="Clear" 
    dot.style = `background: green`  
    dot2.style = `background: green`
 }
 
 function clear() {
    stopWatchBtn.textContent="START" 
    dot.style = `background: transparent`  
    dot2.style = `background: transparent `
 }
 
 function play() {
     if (!son) {
         son=1
         tick()
     
     }
 }
 
 function pause() {
     clearTimeout(t)
     son=0
 }
 




 
