// на странице находятся элементы:
//
//     div - фигура, которая может принимать какие-то формы
//
// select - выбрать тип фигуры (квадрат, прямоугольник, круг). При изменении значения в нем, меняется фигура
//
// input для выбора цвета. При его изменении меняется цвет фигуры
const form = document.getElementById("form");
const color = document.getElementById("color");
const shape = document.querySelector(".shape");
const shapeChange = document.getElementById("shape-change");

form.addEventListener("submit", e => {
    e.preventDefault();
})

shapeChange.addEventListener("change", () => {
    debugger;
    if(shapeChange.value === "Circle") {
        shape.classList.add("circle");
        shape.classList.remove("square", "rectangle");
    } else if(shapeChange.value === "Rectangle") {
        shape.classList.add("rectangle");
        shape.classList.remove("circle", "square");
    } else if(shapeChange.value === "Square") {
        shape.classList.add("square");
        shape.classList.remove("circle", "rectangle");
    }
})

color.addEventListener("input", e => {
    shape.style.backgroundColor = e.target.value;
})




