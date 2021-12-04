
if (localStorage.getItem("isAuthorized") != "true") {
    //window.location.replace('../../skill-bootcamp/');
    window.location.replace('../../');
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
        toggleSearchFilterModal() {
            document.querySelector('#searchFilterModal').classList.toggle('is-active');
        },
    }));
});