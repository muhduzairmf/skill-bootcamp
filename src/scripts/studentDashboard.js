
if (localStorage.getItem("isAuthorized") != "true") {
    window.location.replace('../../skill-bootcamp/index.html');
    //window.location.replace('../../');
}

if (localStorage.getItem("user") === "lecturer") {
    window.location.replace('../../skill-bootcamp/dashboard/lecturer/dashboard.html');
}

if (localStorage.getItem("fullname_student") === null) {
    localStorage.setItem("fullname_student", "Tim Carlton");
    localStorage.setItem("username_student", "timcarlton");
    localStorage.setItem("email_student", "timcarlton.dev@gmail.com");
    localStorage.setItem("phoneNum_student", "60123456789");
    localStorage.setItem("location_student", "Kuala Lumpur, Malaysia");
    localStorage.setItem("aboutme_student", "I am highly organized. I always take notes, and I use a series of tools to help myself stay on top of deadlines. I like to keep a clean workspace and create a logical filing method so I\'m always able to find what I need. I find this increases efficiency and helps the rest of the team stay on track, too. In my last role, I created a new filing process that increased departmental efficiency 25%.");
}

document.addEventListener('alpine:init', () => {
    Alpine.data('main', () => ({
        displayMenu() {
            document.querySelector('#navMenu').classList.toggle('is-active');
            document.querySelector('#burgerBtn').classList.toggle('is-active');
        },
        logout() {

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
            if (this.confirmPass != this.newPass && this.confirmPass === '') {
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
        afterSave() {},
        fullname: localStorage.getItem("fullname_student"),
        username: localStorage.getItem("username_student"),
        email: localStorage.getItem("email_student"),
        phoneNum: parseInt(localStorage.getItem("phoneNum_student")),
        location: localStorage.getItem("location_student"),
        aboutme: localStorage.getItem("aboutme_student"),
        changePersonalDetail() {
            localStorage.setItem("fullname_student", this.fullname);
            localStorage.setItem("username_student", this.username);
            localStorage.setItem("email_student", this.email);
            localStorage.setItem("phoneNum_student", this.phoneNum.toString());
            localStorage.setItem("location_student", this.location);
            localStorage.setItem("aboutme_student", this.aboutme);
            window.location.href = 'dashboard.html';
        },
        cancelPersonalDetail() {
            window.location.href = 'dashboard.html';
        },
    }));
});