
document.addEventListener('alpine:init', () => {
    Alpine.data('main', () => ({
        displayMenu() {
            document.querySelector('#navMenu').classList.toggle('is-active');
        },
        submitSignup() {
            window.location.href = '../../skill-bootcamp/timelines/timelines.html';
        }
    }));
});
