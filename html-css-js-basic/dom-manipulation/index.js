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

// htmlcollections are returned by document.getElementsBy... 
// querySelectorAll returns a NodeList
// NodeList supports forEach()
// but it is NOT a real Array
// map(), filter(), reduce(), push(), pop() are not available
// we need Array.from(...)still

// main difference - HTMLcollections - are live, reflect document chages that are dynamic
// nodelist - does not update when adding nodes dynamically... check lengths of collections later - querySelector will always stay the same



const mainHeadingQuery = document.querySelector('#main-heading')
mainHeadingQuery.style.textAlign ="right"

const basketHeadingQuery = document.querySelector('#basket-heading');
basketHeadingQuery.style.color = "brown";

const evenFruitItems = document.querySelectorAll('.fruit:nth-child(even)');

evenFruitItems.forEach((item) => {
    item.style.backgroundColor = "brown";
    item.style.color = "white";
})

const fruits = document.querySelector('.fruits');
fruits.style.listStyle="none"



// Create DOM elements:

const subHeading = document.createElement('h3');

const textNode = document.createTextNode('Buy high quality organic fruits online');
subHeading.appendChild(textNode)

header.appendChild(subHeading)


//subHeading.style = "font-weight:bold;font-style:italic"
// above throws error - dom styles should be updated dynamically  and it will overwrite any existing styles too... so not at all recommended
subHeading.style.fontWeight = "bold";
subHeading.style.fontStyle ="italic"

const paragraph = document.createElement('p');
paragraph.textContent = "Total fruits: 4"


const divs = document.querySelectorAll('div');


const secondDiv = divs[1]

secondDiv.insertBefore(paragraph, fruits)

paragraph.id="fruits-total"
// we can also set attributes by setAttribute eg -("title", "This is total fruit count")
//both below are valid
//paragraph.title = "This is total fruit count";
paragraph.setAttribute("title", "This is total fruit count");


// DOM relations:
// parent, children, sibling 

// ul.parentElement - will give div 
// ul.children - will give li items - htmlcollection 
//ul.lastElementChild, ul.firstElementChild 
// nextElementSibling , previousElementSibling

