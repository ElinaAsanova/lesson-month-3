/////////1
let count = 0;

addDiv = function () {
    const container = document.getElementById('container')
    let div = document.createElement("div")
    div.innerHTML = '<div class="element">Element</div>'
    container.appendChild(div)
}
addDiv()


////2
const cont = document.getElementById('container2')
const str = document.getElementById('start')
const stp = document.getElementById('stop')
let numbers = 0;

str.onclick = function () {
    const interval = setInterval(() => {

        numbers = Math.floor(Math.random() * (10 - 1)) + 1;
        if (numbers === 5) {
            clearInterval(interval)
        }
        console.log(numbers);

    }, 1000);
}


/////3

// let btnStart = document.getElementById('btn-start');
// let btnPause = document.getElementById('btn-pause');
// let btnReset = document.getElementById('btn-reset');
// let minutes = document.getElementById('minutes');
// let seconds = document.getElementById('seconds');
// let interval;
// let pause = false;
// let totalSeconds = 0;
// let totalSecondsBackup = 0;


// btnStart.addEventListener('click', () => {
//     const minutes = parseInt(minutes.value);
//     const seconds = parseInt(seconds.value);
//
//     totalSecondsBackup =  minutes  * 60  * 60 +seconds;
//     if (totalSeconds < 0){
//         return;
//     }
//
//     startTimer()
//
// })
// btnPause.addEventListener('click',() => {
//     pause = !pause;
//     if (pause) {
//         btnPause.innerText = 'Resume';
//     }else {
//         btnPause.innerText = 'Pause';
//     }
// })
// btnReset.addEventListener('click',() => {
//     totalSeconds = totalSecondsBackup
//     updateInputs()
//
// })
//
// function startTimer(totalSeconds) {
//     interval = setInterval(() => {
//
//         if (pause)return;
//         btnPause.innerText = "Resume"
//         totalSeconds--;
//         updateInputs()
//         if (totalSeconds <= 0) {
//             interval = clearInterval(interval);
//         }
//
//     },1000)
// }
//
// function updateInputs(totalSeconds) {
//     const minutes = Math.floor(totalSeconds/60);
//     const seconds = totalSeconds % 60;
//
//     minutes.value = minutes
//     seconds.value = seconds;
// }

///////////////////////4
const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");


username.addEventListener("keyup", (e) => {
    const value = e.currentTarget.value;
    if (value === "") {
        submit.disabled = false;
    } else {
        submit.disabled = false;
    }
})

password.addEventListener("keyup", (e) => {
    const value = e.currentTarget.value;
    if (value === "") {
        password.disabled = true;
    } else {
        password.disabled = false;
    }
})


function isEmpty() {
    let username = $('#username').isEmpty();
    let password = $('#password').isEmpty();
    let submit = $('#submit').isEmpty();

    if (username.length >= 6 && password.length >= 6) {
        $('#submit').removeAttr('disabled');
    } else {
        $('#submit').attr('disabled', 'disabled');
    }
}

////////////////5



// function init() {
//     let questions = document.querySelectorAll(".question");
//     for (let i = 0; i < questions.length; i++) {
//         let question = questions[i];
//         let btn = document.createElement("button");
//         btn.textContent = "Посмотреть ответ";
//         question.firstChild.after(btn, " ");
//         console.log(questions)
//     }
// }

// console.log(init())

let questions = document.querySelectorAll(".question");
const btn = document.createElement("")
questions.forEach((ques)=>{
    ques.addEventListener('click',()=>{
        let answer = ques.querySelector('.answer')
        console.log(answer.classList.toggle('show'))
    })
})
















