
if (localStorage.getItem("isAuthorized") != "true") {
    window.location.replace('../../skill-bootcamp/');
    //window.location.replace('../../');
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

            //window.location.href = '../../skill-bootcamp/index.html';
            window.location.href = '../../index.html';
        },
        showModalGreet: isSignUp,
        closeModalGreet() {
            this.showModalGreet = false;
            noMoreModal();
        }
    }));
});
