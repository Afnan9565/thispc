//Logic
function computer(){
    const file = document.getElementById("file");
    const computer = document.getElementById("computer");
    const view = document.getElementById("view");
    file.classList.remove("active");
    view.classList.remove("active");
    computer.classList.add("active")
}
function file(){
    const file = document.getElementById("file");
    const computer = document.getElementById("computer");
    const view = document.getElementById("view");
    file.classList.add("active");
    view.classList.remove("active");
    computer.classList.remove("active")
}
function view(){
    const file = document.getElementById("file");
    const computer = document.getElementById("computer");
    const view = document.getElementById("view");
    file.classList.remove("active");
    view.classList.add("active");
    computer.classList.remove("active")
}