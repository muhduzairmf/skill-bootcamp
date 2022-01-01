const fileInput = document.querySelector('#file-js input[type=file]');
fileInput.onchange = () => {
    if (fileInput.files.length > 0) {
        const fileName = document.querySelector('#file-js .file-name');
        fileName.textContent = fileInput.files[0].name;
    }
}

const input_image = document.querySelector("#image_input");
input_image.addEventListener("change", function() {
    document.querySelector('#image_section').style.display = "block";
    document.querySelector("#display_image").src = `https://images.pexels.com/photos/4300396/pexels-photo-4300396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
});

var countControl = 1;
var counter = 1;

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
        addOverview() {
            var overviewForm = `
            <div id="added" class="columns is-vcentered is-mobile" x-data="{ 
                added: true,
                remove() {
                    document.getElementById('overviewForm').lastElementChild.remove();
                }
            }">
            <div class="column is-11">
                <div class="field">
                    <div class="control is-expanded">
                        <input type="text" class="input poppins" maxlength="30" >
                    </div>
                    
                </div>
            </div>
            <div class="column is-1">
                <p class="is-clickable" x-on:click="remove"><i class="bi bi-x-lg"></i></p>
            </div>
            </div>
            `;
            document.getElementById('overviewForm').innerHTML += overviewForm;
            counter++;
        },
        removeVideoContent() {
            document.getElementById('videocontent').style.display = "none";
        },
        removeArticleContent() {
            document.getElementById('articlecontent').style.display = "none";
        },
        removeQuizContent() {
            document.getElementById('quizcontent').style.display = "none";
        },
        chapter: '',
        addChapter() {
            countControl++;
            this.chapter += `
            <hr style="background-color: rgba(192, 192, 192, 0.37) !important;">
            <p class="poppins has-text-centered"><strong>Chapter ${countControl}</strong></p>
            <div class="columns is-vcentered mx-2 mt-1">
                <div class="column is-3">
                    <p class="title is-size-6 poppins">Chapter Title</p>
                </div>
                <div class="column is-9">
                    <div class="field">
                        <div class="control">
                            <input type="text" class="input poppins" maxlength="30" placeholder="Enter a chapter title">
                        </div>
                    </div>
                </div>
            </div>
            <div class="chapter-divider poppins mb-5" style="margin-left: 100px; margin-right: 100px;">&nbsp; <small>Video</small> &nbsp;</div>
            <div class="columns is-vcentered mx-2 mt-1">
                <div class="column is-3">
                    <p class="title is-size-6 poppins">Video Title</p>
                </div>
                <div class="column is-9">
                    <div class="field">
                        <div class="control">
                            <input type="text" class="input poppins" maxlength="30" placeholder="Enter a course title">
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns mx-2">
                <div class="column is-3">
                    <p class="title is-size-6 poppins">Description</p>
                </div>
                <div class="column is-9">
                    <div class="field">
                        <div class="control">
                            <textarea class="textarea poppins" placeholder="Enter a description of the course"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns mx-2">
                <div class="column is-3">
                    <p class="title is-size-6 poppins">Video</p>
                </div>
                <div class="column is-9">
                    <div class="file is-normal is-boxed has-name">
                        <label class="file-label">
                            <input class="file-input" type="file" name="thumbnail">
                            <span class="file-cta">
                            <span class="file-icon">
                                <i class="bi bi-upload"></i>
                            </span>
                            <span class="file-label poppins">
                                Choose a video
                            </span>
                            </span>
                        </label>
                    </div>
                    <figure class="image mt-2 is-16by9" style="display: none;">
                        <img src="" alt="">
                    </figure>
                </div>
            </div>
            <p class="has-text-right has-text-grey-dark poppins is-underlined is-clickable mx-4 my-3 mb-4"><small>Remove content</small></p>
            <div class="chapter-divider poppins mb-5" style="margin-left: 100px; margin-right: 100px;">&nbsp; <small>Article</small> &nbsp;</div>
            <div class="columns is-vcentered mx-2 mt-1">
                <div class="column is-3">
                    <p class="title is-size-6 poppins">Article Title</p>
                </div>
                <div class="column is-9">
                    <div class="field">
                        <div class="control">
                            <input type="text" class="input poppins" maxlength="30" placeholder="Enter a article title">
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns mx-2">
                <div class="column is-3">
                    <p class="title is-size-6 poppins">Description</p>
                </div>
                <div class="column is-9">
                    <div class="field">
                        <div class="control">
                            <textarea class="textarea poppins" placeholder="Enter a description of the article"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns mx-2">
                <div class="column is-3">
                    <p class="title is-size-6 poppins">Article</p>
                </div>
                <div class="column is-9">
                    <div class="file is-normal is-boxed has-name">
                        <label class="file-label">
                            <input class="file-input" type="file" name="thumbnail">
                            <span class="file-cta">
                            <span class="file-icon">
                                <i class="bi bi-upload"></i>
                            </span>
                            <span class="file-label poppins">
                                Choose a article in PDF
                            </span>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <p class="has-text-right has-text-grey-dark poppins is-underlined is-clickable mx-4 my-3 mb-4"><small>Remove content</small></p>
            <div class="chapter-divider poppins mb-5" style="margin-left: 100px; margin-right: 100px;">&nbsp; <small>Quiz</small> &nbsp;</div>
            <div class="columns is-vcentered mx-2 mt-1">
                <div class="column is-3">
                    <p class="title is-size-6 poppins">Quiz Title</p>
                </div>
                <div class="column is-9">
                    <div class="field">
                        <div class="control">
                            <input type="text" class="input poppins" maxlength="30" placeholder="Enter a quiz title">
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns mx-2">
                <div class="column is-3">
                    <p class="title is-size-6 poppins">Description</p>
                </div>
                <div class="column is-9">
                    <div class="field">
                        <div class="control">
                            <textarea class="textarea poppins" placeholder="Enter a description of the quiz"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns is-vcentered mx-2">
                <div class="column is-3">
                    <p class="title is-size-6 poppins">Question 1</p>
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
            <div class="level mt-4">
                <div class="level-item">
                    <button class="button is-small is-rounded has-background-grey-light has-text-black poppins">+ Add question</button>
                </div>
            </div>
            <p class="has-text-right has-text-grey-dark poppins is-underlined is-clickable mx-4 my-3 mb-4"><small>Remove content</small></p>
            `;
        },
        createCourse: true,
        successCreate: false,
        publishCourse() {
            this.createCourse = ! this.createCourse;
            this.successCreate = ! this.successCreate;
        }
    }));
});