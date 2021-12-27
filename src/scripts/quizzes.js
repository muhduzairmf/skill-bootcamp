
if (localStorage.getItem("isAuthorized") != "true") {
    window.location.replace('../../skill-bootcamp/index.html');
    //window.location.replace('../../');
}

document.addEventListener('alpine:init', () => {
    Alpine.data('main', () => ({
        displayMenu() {
            document.querySelector('#navMenu').classList.toggle('is-active');
            document.querySelector('#burgerBtn').classList.toggle('is-active');
        },
        goTimelines() {
            window.location.href = '../../skill-bootcamp/timelines/timelines.html';
            //window.location.href = '../../timelines/timelines.html';
        },
        logout() {
            localStorage.setItem("isAuthorized", "false");

            window.location.href = '../../skill-bootcamp/index.html';
            //window.location.href = '../../index.html';
        },
        toggleSearchFilterModal() {
            document.querySelector('#searchFilterModal').classList.toggle('is-active');
        },
        closeTimesup() {
            document.querySelector('#modalTimesup').classList.toggle('is-active');
        }
    }));
});

var answers = ['', '', '', '', ''];
var isClicked = false;

function getAns1() {
    var notAnswer = true;
    var ans1 = document.getElementsByName('answer1');
    ans1.forEach(element => {
        if (element.checked) {
            console.log(element.value);
            answers.splice(0, 1, element.value)
            notAnswer = false;
        }
    });
    if (notAnswer === false) {
        answers.push('Not Answered');
    }
}

function getAns2() {
    var notAnswer = true;
    var ans2 = document.getElementsByName('answer2');
    ans2.forEach(element => {
        if (element.checked) {
            console.log(element.value);
            answers.splice(1, 1, element.value)
            notAnswer = false;
        }
    });
    if (notAnswer === false) {
        answers.push('Not Answered');
    }
}

function getAns3() {
    var notAnswer = true;
    var ans3 = document.getElementsByName('answer3');
    ans3.forEach(element => {
        if (element.checked) {
            console.log(element.value);
            answers.splice(2, 1, element.value)
            notAnswer = false;
        }
    });
    if (notAnswer === false) {
        answers.push('Not Answered');
    }
}

function getAns4() {
    var notAnswer = true;
    var ans4 = document.getElementsByName('answer4');
    ans4.forEach(element => {
        if (element.checked) {
            console.log(element.value);
            answers.splice(3, 1, element.value)
            notAnswer = false;
        }
    });
    if (notAnswer === false) {
        answers.push('Not Answered');
    }
}

function getAns5() {
    var notAnswer = true;
    var ans5 = document.getElementsByName('answer5');
    ans5.forEach(element => {
        if (element.checked) {
            console.log(element.value);
            answers.splice(4, 1, element.value)
            notAnswer = false;
        }
    });
    if (notAnswer === false) {
        answers.push('Not Answered');
    }
}

function viewMarks() {
    getAns1();
    getAns2();
    getAns3();
    getAns4();
    getAns5();
    const allAns = answers;
    const allCorrect = ['A', 'B', 'C', 'D', 'A'];
    var mark = 0;
    for (let index = 0; index < 5; index++) {
        console.log(`${index+1}. User Answer: ${allAns[index]} Correct Answer: ${allCorrect[index]}`);
        if (allAns[index] === allCorrect[index]) {
            mark += 1;
        }
    }
    document.getElementById('marks').innerHTML = mark;
}

const submitBtn = document.querySelector('#submitQuiz');
if (submitBtn != null) {
    submitBtn.addEventListener("click", viewMarks());
}

var timer = new easytimer.Timer();
if (timer != undefined) {
    timer.start({ countdown: true, startValues: { seconds: 30 } });

    document.getElementById('countdownH').innerHTML = timer.getTimeValues().hours;
    document.getElementById('countdownM').innerHTML = timer.getTimeValues().minutes;
    document.getElementById('countdownS').innerHTML = timer.getTimeValues().seconds;

    timer.addEventListener('secondsUpdated', function (event) {
        document.getElementById('countdownH').innerHTML = timer.getTimeValues().hours;
        document.getElementById('countdownM').innerHTML = timer.getTimeValues().minutes;
        document.getElementById('countdownS').innerHTML = timer.getTimeValues().seconds;
    });

    timer.addEventListener('targetAchieved', function (event) {
        document.getElementById('countdown').innerHTML = 'Time\'s Up!';
        var allRadio = document.querySelectorAll('input[type=radio]');
        allRadio.forEach(radio => {
            radio.disabled = true;
        });
        document.getElementById('submitQuiz').disabled = true;
        document.querySelector('#modalTimesup').classList.toggle('is-active');
        viewMarks();
    })
}
