let a = +prompt("Введите количество сувениров");
let b = +prompt("Введите количество безделушек");
const weightA = 0.072;
const weightB = 0.112;


let totalWeight = (a * 0.072) + (b * 0.112);

console.log(`<h3>Общий вес ваших покупок:<i>${totalWeight.toFixed(2)} кг</i></h3>`);