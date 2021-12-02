
document.addEventListener('alpine:init', () => {
    Alpine.data('main', () => ({
        displayMenu() {
            document.querySelector('#navMenu').classList.toggle('is-active');
        },
        signupPage() {
            window.location.href = '/skill-bootcamp/signup/signup.html'
            //window.location.href = '../../signup/signup.html';
        },
        submitLogin() {
            localStorage.setItem("isAuthorized", "true");

            window.location.href = '../../skill-bootcamp/timelines/timelines.html';
            //window.location.href = '../../timelines/timelines.html';
        }
    }));
});
