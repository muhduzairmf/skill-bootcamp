
if (localStorage.getItem("user") === "student") {
    document.getElementById('whouser1').innerText = 'STUDENT';
    document.getElementById('whouser2').innerText = 'STUDENT';
} else if (localStorage.getItem("user") === "lecturer") {
    document.getElementById('whouser1').innerText = 'LECTURER';
    document.getElementById('whouser2').innerText = 'LECTURER';
}

document.addEventListener('alpine:init', () => {
    Alpine.data('main', () => ({
        displayMenu() {
            document.querySelector('#navMenu').classList.toggle('is-active');
            document.querySelector('#burgerBtn').classList.toggle('is-active');
        },
        goTimelines() {
            window.location.href = '../../skill-bootcamp/timelines/timelines.html';
            //window.location.href = '../../timelines/timelines.html';
        },
        logout() {
            localStorage.setItem("isAuthorized", "false");

            window.location.href = '../../skill-bootcamp/index.html';
            //window.location.href = '../../index.html';
        },
    }));
});
