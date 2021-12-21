
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
        },
        newPass: '',
        confirmPass: '',
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
        googleModal: false,
        signupGoogle() {
            this.googleModal = ! this.googleModal;
        },
        firstStep: true,
        secondStepPath1: false,
        toSecondStepPath1() {
            this.firstStep = ! this.firstStep;
            this.secondStepPath1 = ! this.secondStepPath1;
        },
        closeSecondStepPath1() {
            this.secondStepPath1 = ! this.secondStepPath1;
            this.firstStep = ! this.firstStep;
        },
        secondStepPath2: false,
        thirdStepPath2: false,
        toSecondStepPath2() {
            this.firstStep = ! this.firstStep;
            this.secondStepPath2 = ! this.secondStepPath2;
        },  
        toThirdStepPath2() {
            this.secondStepPath2 = ! this.secondStepPath2;
            this.thirdStepPath2 = ! this.thirdStepPath2;
        },
        closeThirdStepPath2() {
            this.thirdStepPath2 = ! this.thirdStepPath2;
            this.firstStep = ! this.firstStep;
        }
    }));
});
