
if (localStorage.getItem("isAuthorized") != "true") {
    window.location.replace('../../skill-bootcamp/');
    //window.location.replace('../../');
}

if (localStorage.getItem("user") === "student") {
    document.getElementById('whouser1').innerText = 'STUDENT';
    document.getElementById('whouser2').innerText = 'STUDENT';
    document.getElementById('whouser3').innerText = 'STUDENT';
} else if (localStorage.getItem("user") === "lecturer") {
    document.getElementById('whouser1').innerText = 'LECTURER';
    document.getElementById('whouser2').innerText = 'LECTURER';
    document.getElementById('whouser3').innerText = 'LECTURER';
}

var isSignUp = false;

if (sessionStorage.getItem("isSignUp") == "true") {
    isSignUp = true;
}

function noMoreModal() {
    isSignUp = false;
    sessionStorage.setItem("isSignUp", "false");
}

document.addEventListener('alpine:init', () => {
    Alpine.data('main', () => ({
        displayMenu() {
            document.querySelector('#navMenu').classList.toggle('is-active');
            document.querySelector('#burgerBtn').classList.toggle('is-active');
        },
        logout() {
            localStorage.setItem("isAuthorized", "false");

            window.location.href = '../../skill-bootcamp/index.html';
            //window.location.href = '../../index.html';
        },
        showModalGreet: isSignUp,
        closeModalGreet() {
            this.showModalGreet = false;
            noMoreModal();
        }
    }));
});
