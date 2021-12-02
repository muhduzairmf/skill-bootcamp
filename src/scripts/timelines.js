
var isSignUp = false;

if (localStorage.getItem("isSignUp") == "true") {
    isSignUp = true;
}

function noMoreModal() {
    isSignUp = false;
    localStorage.setItem("isSignUp", "false");
}

document.addEventListener('alpine:init', () => {
    Alpine.data('main', () => ({
        displayMenu() {
            document.querySelector('#navMenu').classList.toggle('is-active');
            document.querySelector('#burgerBtn').classList.toggle('is-active');
        },
        logout() {
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
