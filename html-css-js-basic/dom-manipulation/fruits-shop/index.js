// Add the Edit Button:
const deleteBtns = document.querySelectorAll('.delete-btn');

deleteBtns.forEach((btn) => {
    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    editBtn.classList.add('edit-btn');
    btn.after(btn,editBtn);
})




const form = document.querySelector('form');
const fruits = document.querySelector('.fruits')
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const fruitToAdd = document.getElementById('fruit-to-add');
    const newLi = document.createElement('li');
    newLi.className = "fruit";

     // we can create a new textNode and append and also another button element and append it to newLi
    /*
    const textNode = document.createTextNode(fruitToAdd.value);
    newLi.appendChild(textNode);
    const deleteBtn = document.createElement('button');
    deleteBtn.className='delete-btn'
    deleteBtn.appendChild(document.createTextNode('x'));
    newLi.appendChild(button);
    */

    // we can do innerHTML also instead
    newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button><button class="edit-btn">Edit</button>'

    fruits.appendChild(newLi);

    console.log(fruits)

})

fruits.addEventListener('click', function (event) {
    event.preventDefault();//not needed here as such
    if (event.target.classList.contains('delete-btn')) {
        fruits.removeChild(event.target.parentElement)
    }

})

