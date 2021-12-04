
document.addEventListener('alpine:init', () => {
    Alpine.data('main', () => ({
        displayMenu() {
            document.querySelector('#navMenu').classList.toggle('is-active');
        },
        submitSignup() {
            sessionStorage.setItem("isSignUp", "true");
            localStorage.setItem("isAuthorized", "true");

            window.location.href = '../../skill-bootcamp/timelines/timelines.html';
            //window.location.href = '../../timelines/timelines.html';
        }
    }));
});
