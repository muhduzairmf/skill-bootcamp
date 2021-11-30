
AOS.init();

new Typewriter('#typewriter', {
    strings: ['Information Technology', 'Religion Study', 'Mathematics', 'Literature & Languages', 'Philosophy', 'Engineering', 'Art & Design', 'History'],
    autoStart: true,
    loop: true,
});

document.addEventListener('alpine:init', () => {
    Alpine.data('main', () => ({
        displayMenu() {
            document.querySelector('#navMenu').classList.toggle('is-active');
        }
    }));
});
