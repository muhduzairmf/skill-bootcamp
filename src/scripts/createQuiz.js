var countControl = 1;

const fileInput = document.querySelector('#file-js input[type=file]');
fileInput.onchange = () => {
    if (fileInput.files.length > 0) {
        const fileName = document.querySelector('#file-js .file-name');
        fileName.textContent = fileInput.files[0].name;
    }
}

const image_input = document.querySelector("#image_input");
image_input.addEventListener("change", function() {
    document.querySelector('#image_section').style.display = "block";
    document.querySelector("#display_image").src = `https://images.pexels.com/photos/4300396/pexels-photo-4300396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
});

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
        minutes: [0, 15, 30, 45],
        hours: [0, 1, 2, 3],
        question: '',
        addQuestion() {
            countControl++;
            this.question += `
                <br>
                <div class="columns is-vcentered mx-2">
                    <div class="column is-3">
                        <p class="title is-size-6 poppins">Question <span>${countControl}</span></p>
                    </div>
                    <div class="column is-9">
                        <input type="text" class="input poppins" placeholder="Enter a question">
                    </div>
                </div>
                <div class="columns is-vcentered mx-2">
                    <div class="column is-2"></div>
                    <div class="column is-1">
                        <input type="radio" style="height: 18px !important; width: 18px !important;" name="answer" id="">
                    </div>
                    <div class="column is-9">
                        <input type="text" class="input poppins">
                    </div>
                </div>
                <div class="columns is-vcentered mx-2">
                    <div class="column is-2"></div>
                    <div class="column is-1">
                        <input type="radio" style="height: 18px !important; width: 18px !important;" name="answer" id="">
                    </div>
                    <div class="column is-9">
                        <input type="text" class="input poppins">
                    </div>
                </div>
                <div class="columns is-vcentered mx-2">
                    <div class="column is-2"></div>
                    <div class="column is-1">
                        <input type="radio" style="height: 18px !important; width: 18px !important;" name="answer" id="">
                    </div>
                    <div class="column is-9">
                        <input type="text" class="input poppins">
                    </div>
                </div>
                <div class="columns is-vcentered mx-2">
                    <div class="column is-2"></div>
                    <div class="column is-1">
                        <input type="radio" style="height: 18px !important; width: 18px !important;" name="answer" id="">
                    </div>
                    <div class="column is-9">
                        <input type="text" class="input poppins">
                    </div>
                </div>
            `;
        },
        createQuiz: true,
        showSuccess: false,
        publishQuiz() {
            this.createQuiz = ! this.createQuiz;
            this.showSuccess = ! this.showSuccess;
        }
    }));
});