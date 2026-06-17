// Write your code below:

const mainHeading = document.getElementById('main-heading'); mainHeading.textContent = "Fruit World"
mainHeading.style.color = "orange";

const header = document.getElementById('header');
header.style.backgroundColor = "green"
header.style.borderBottom = '2px solid orange';

const basketHeading = document.getElementById('basket-heading')
basketHeading.style.color = "green"

document.getElementById('thanks').innerHTML = '<p>Please visit us again</p>'

const fruit = document.getElementsByClassName('fruit');

fruit[2].style.backgroundColor = "yellow";

for (let i = 0; i < fruit.length; i++){
    fruit[i].style.fontWeight = "bold"
}

const fruitList = document.getElementsByTagName('li');

fruitList[4].style.color = "red";

for (let i = 0; i < fruitList.length; i++){
    fruitList[i].style.fontStyle="italic"
}