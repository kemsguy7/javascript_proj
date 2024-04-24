//using selectors inside the element

//traversing the DOM

const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        console.log(e.currentTarget); 
    })
})