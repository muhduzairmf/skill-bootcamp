
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
        contentCard1: true,
        arrowUp1: true,
        arrowDown1: false,
        contentCard2: false,
        arrowUp2: false,
        arrowDown2: true,
        contentCard3: false,
        arrowUp3: false,
        arrowDown3: true,
        toggleCardContent1() {
            this.contentCard1 = ! this.contentCard1;
            this.arrowUp1 = ! this.arrowUp1;
            this.arrowDown1 = ! this.arrowDown1;
        },
        toggleCardContent2() {
            this.contentCard2 = ! this.contentCard2;
            this.arrowUp2 = ! this.arrowUp2;
            this.arrowDown2 = ! this.arrowDown2;
        },
        toggleCardContent3() {
            this.contentCard3 = ! this.contentCard3;
            this.arrowUp3 = ! this.arrowUp3;
            this.arrowDown3 = ! this.arrowDown3;
        },
        comment1: false,
        comment2: false,
        toggleComment1() {
            this.comment1 = ! this.comment1;
        },
        toggleComment2() {
            this.comment2 = ! this.comment2;
        },
        userComment1: '',
        clearComment1() {
            this.userComment1 = '';
        },
        countComment1: 1,
        doneComment1: '',
        commenting1() {
            this.countComment1++;
            var datenow = dayjs().format('MMMM D[,] YYYY');
            var timenow = dayjs().format('h[:]mm A');
            this.doneComment1 += `
                <hr style="background-color: hsl(235, 235, 235)">
                <article class="media my-6">
                    <figure class="media-left">
                        <p class="image is-48x48">
                        <img class="is-rounded" src="https://randomuser.me/api/portraits/men/40.jpg">
                        </p>
                    </figure>
                    <div class="media-content">
                        <div class="content poppins">
                        <p>
                            <strong class="is-size-5">Tim Carlton </strong>
                            <br>
                            <small class="subtitle is-7">${datenow} &nbsp;|&nbsp; ${timenow}</small>
                            <br><br>
                            ${DOMPurify.sanitize(this.userComment1)}
                            <br>
                        </p>
                        </div>
                    </div>
                </article>
            `;
            this.userComment1 = '';
        }
    }));
});