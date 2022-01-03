
document.addEventListener('alpine:init', () => {
    Alpine.data('main', () => ({
        displayMenu() {
            document.querySelector('#navMenu').classList.toggle('is-active');
        },
        errorLogin: false,
        closeError() {
            this.errorLogin = false;
        },
        username: '',
        submitLogin() {
            localStorage.setItem("isAuthorized", "true");

            if (document.getElementById('username').value === 'student') {
                localStorage.setItem("user", "student");

                //window.location.href = '../../skill-bootcamp/timelines/timelines.html';
                window.location.href = '../../timelines/timelines.html';
            } else if (document.getElementById('username').value === 'lecturer') {
                localStorage.setItem("user", "lecturer");

                //window.location.href = '../../skill-bootcamp/timelines/timelines.html';
                window.location.href = '../timelines/timelines.html';
            } else {
                this.errorLogin = true;
            }
            
        },
        warnCaps: false,
        detectCaps(event) {
            if (event.getModifierState('CapsLock')) {
                this.warnCaps = true;
            } else {
                this.warnCaps = false;
            }
        }
    }));
});
