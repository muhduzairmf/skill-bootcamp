
if (localStorage.getItem("isAuthorized") != "true") {
    window.location.replace('../../skill-bootcamp/index.html');
    //window.location.replace('../../');
}

document.addEventListener('alpine:init', () => {
    Alpine.data('main', () => ({
        displayMenu() {
            document.querySelector('#navMenu').classList.toggle('is-active');
            document.querySelector('#burgerBtn').classList.toggle('is-active');
        },
        logout() {
            localStorage.setItem("isAuthorized", "false");

            window.location.href = '../../../skill-bootcamp/index.html';
            //window.location.href = '../../index.html';
        },
        currentPass: '',
        newPass: '',
        confirmPass: '',
        clearForm() {
            this.currentPass = '';
            this.newPass = '';
            this.confirmPass = '';
        },
        notMatch: false,
        matchPass() {
            if (this.confirmPass != this.newPass) {
                this.notMatch = true;
                document.querySelector('#submitButton').disabled = true;
            } else if (this.newPass == this.confirmPass || this.confirmPass == this.newPass) {
                this.notMatch = false;
                document.querySelector('#submitButton').disabled = false;
            }
        },
        warnCaps1: false,
        warnCaps2: false,
        warnCaps3: false,
        detectCaps1(event) {
            if (event.getModifierState('CapsLock')) {
                this.warnCaps1 = true;
            } else {
                this.warnCaps1 = false;
            }
        },
        detectCaps2(event) {
            if (event.getModifierState('CapsLock')) {
                this.warnCaps2 = true;
            } else {
                this.warnCaps2 = false;
            }
        },
        detectCaps3(event) {
            if (event.getModifierState('CapsLock')) {
                this.warnCaps3 = true;
            } else {
                this.warnCaps3 = false;
            }
        },
    }));
});