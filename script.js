var input = document.getElementById("calc");
var res = document.getElementById("res");
var enter = document.getElementById("enter");
var del = document.getElementById("del");
var ac = document.getElementById("ac");


const op = document.getElementsByClassName("kal");
Array.from(op).forEach(e => {
    e.addEventListener("click", function () {
        input.value += e.id;
    });
})

enter.addEventListener("click", function () {
    res.textContent = eval(input.value);
})

del.addEventListener("click", function () {
    input.value = input.value.slice(0, -1);
})

ac.addEventListener("click", function () {
    input.value = "";
})


