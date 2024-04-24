
//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    //console.log(orange);

    const btn = question.querySelector(".question-btn");
    // console.log(btn);
    btn.addEventListener("click", function () {
        //second loop to get the current article
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show-text"); //if the article is not the current article
            }
        });

        question.classList.toggle("show-text");
    });

});


// //traversing the DOM method
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//         console.log(question);
//     })
// })