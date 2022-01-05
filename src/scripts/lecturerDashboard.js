
if (localStorage.getItem("isAuthorized") != "true") {
    window.location.replace('../../skill-bootcamp/index.html');
    //window.location.replace('../../');
}

if (localStorage.getItem("user") === "student") {
    window.location.replace('../../skill-bootcamp/dashboard/student/dashboard.html');
}

if (localStorage.getItem("fullname_teacher") === null) {
    localStorage.setItem("fullname_teacher", "Tim Carlton");
    localStorage.setItem("username_teacher", "timcarlton");
    localStorage.setItem("email_teacher", "timcarlton.dev@gmail.com");
    localStorage.setItem("phoneNum_teacher", "60123456789");
    localStorage.setItem("location_teacher", "Kuala Lumpur, Malaysia");
    localStorage.setItem("aboutme_teacher", "I am highly organized. I always take notes, and I use a series of tools to help myself stay on top of deadlines. I like to keep a clean workspace and create a logical filing method so I\'m always able to find what I need. I find this increases efficiency and helps the rest of the team stay on track, too. In my last role, I created a new filing process that increased departmental efficiency 25%.");
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
            if (this.confirmPass != this.newPass || this.newPass != this.confirmPass || this.confirmPass === '') {
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
        successChange: false,
        afterSave() {
            this.clearForm();
            this.successChange = ! this.successChange;
        },
        closeSuccess() {
            this.successChange = ! this.successChange;
        },
        fullname: localStorage.getItem("fullname_teacher"),
        username: localStorage.getItem("username_teacher"),
        email: localStorage.getItem("email_teacher"),
        phoneNum: parseInt(localStorage.getItem("phoneNum_teacher")),
        location: localStorage.getItem("location_teacher"),
        aboutme: localStorage.getItem("aboutme_teacher"),
        changePersonalDetail() {
            localStorage.setItem("fullname_teacher", this.fullname);
            localStorage.setItem("username_teacher", this.username);
            localStorage.setItem("email_teacher", this.email);
            localStorage.setItem("phoneNum_teacher", this.phoneNum.toString());
            localStorage.setItem("location_teacher", this.location);
            localStorage.setItem("aboutme_teacher", this.aboutme);
            window.location.href = 'dashboard.html';
        },
        cancelPersonalDetail() {
            window.location.href = 'dashboard.html';
        },
    }));
});