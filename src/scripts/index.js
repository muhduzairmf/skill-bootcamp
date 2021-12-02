
AOS.init();

new Typewriter('#typewriter', {
    strings: ['Technology', 'Religion Study', 'Mathematics', 'Languages', 'Philosophy', 'Engineering', 'Art & Design', 'History'],
    autoStart: true,
    loop: true,
});

document.addEventListener('alpine:init', () => {
    Alpine.data('main', () => ({
        displayMenu() {
            document.querySelector('#navMenu').classList.toggle('is-active');
            document.querySelector('#burgerBtn').classList.toggle('is-active');
        }
    }));
});
