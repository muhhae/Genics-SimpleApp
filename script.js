var input = document.getElementById("calc");
var res = document.getElementById("res");
var enter = document.getElementById("enter");

const op = document.getElementsByClassName("kal");
Array.from(op).forEach(e => {
    e.addEventListener("click", function () {
        input.value += e.id;
    });
})

enter.addEventListener("click", function () {
    res.textContent = eval(input.value);
})


