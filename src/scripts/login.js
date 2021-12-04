
document.addEventListener('alpine:init', () => {
    Alpine.data('main', () => ({
        displayMenu() {
            document.querySelector('#navMenu').classList.toggle('is-active');
        },
        submitLogin() {
            localStorage.setItem("isAuthorized", "true");

            //window.location.href = '../../skill-bootcamp/timelines/timelines.html';
            window.location.href = '../../timelines/timelines.html';
        }
    }));
});
