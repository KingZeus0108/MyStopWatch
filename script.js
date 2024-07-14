const timer = document.querySelector('.timerScreen');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset'); 

let startTimeSec = 0;
let startTimeMin = 0;
let interval;

startBtn.addEventListener('click', () =>{
    startBtn.style.backgroundColor = 'white';
    startBtn.style.color = 'black';

    stopBtn.style.backgroundColor = 'black';
    stopBtn.style.color = 'white';

    resetBtn.style.border = '1px solid white';

    clearInterval(interval); 
    interval = setInterval(() => {
        startTimeSec++;
        if(startTimeSec >= 60){
            startTimeSec = 0;
            startTimeMin++;
        }

        if(startTimeMin >=60){
            timer.textContent = '00:00';
            return;
        }
        timer.textContent = `${startTimeMin < 10 ? "0" + startTimeMin : startTimeMin}:${startTimeSec < 10 ? "0" + startTimeSec : startTimeSec}`;
    }, 1000);
});

stopBtn.addEventListener('click', ()=>{
    startBtn.style.backgroundColor = 'black';
    startBtn.style.color = 'white';

    stopBtn.style.backgroundColor = 'white';
    stopBtn.style.color = 'black';

    clearInterval(interval);
});

resetBtn.addEventListener('click', ()=>{
    stopBtn.style.backgroundColor = 'black';
    stopBtn.style.color = 'white';

    startBtn.style.backgroundColor = 'black';
    startBtn.style.color = 'white';

    resetBtn.style.border = 'none';

    clearInterval(interval);
    timer.textContent = '00:00';
    startTimeSec = 0; 
    startTimeMin = 0;
});