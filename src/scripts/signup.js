
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
