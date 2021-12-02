
document.addEventListener('alpine:init', () => {
    Alpine.data('main', () => ({
        displayMenu() {
            document.querySelector('#navMenu').classList.toggle('is-active');
        },
        loginPage() {
            //window.location.href = '/skill-bootcamp/login/login.html'
            window.location.href = '../../login/login.html';
        },
        submitSignup() {
            localStorage.setItem("isSignUp", "true");

            //window.location.href = '../../skill-bootcamp/timelines/timelines.html';
            window.location.href = '../../timelines/timelines.html';
        }
    }));
});
