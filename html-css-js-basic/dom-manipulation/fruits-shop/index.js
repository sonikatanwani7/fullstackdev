// Add the Edit Button:
const deleteBtns = document.querySelectorAll('.delete-btn');

deleteBtns.forEach((btn) => {
    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    editBtn.classList.add('edit-btn');
    btn.after(btn,editBtn);
})




const form = document.getElementsByTagName('form')[0];
    
// first add description input  along with fruit name
const description = document.createElement('input');
description.id = "description";
description.setAttribute('type', 'text');
description.setAttribute('placeholder', "Enter fruit description");
const addBtn = document.querySelector('button[type="submit"]')
form.insertBefore(description, addBtn)
const fruits = document.querySelector('.fruits')

form.addEventListener('submit', function (event) { // this is to add a new fruit
    event.preventDefault();

     // Ensure that a description is provided
     let fruitDescription = document.getElementById('description').value;
     if (fruitDescription === '') {
         alert('Please enter a description.');
         return;
     }

    const fruitToAdd = document.getElementById('fruit-to-add');
    const newLi = document.createElement('li');
    newLi.className = "fruit";

    const p = document.createElement('p');
    p.style.fontStyle = "italics";
    p.textContent = fruitDescription
   

    
    // newLi.innerHTML = p + '<button class="delete-btn">x</button>';
    let deleteBtn = document.createElement('button');
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = 'x';

    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    editBtn.classList.add('edit-btn');


    // not sure why this below line is throwing type error for not of type node
    /*console.log(typeof(fruitToAdd.value));
    console.log(typeof(document.getElementById('fruit-to-add').value))
    newLi.appendChild(document.createTextNode(fruitToAdd).value)*/


    newLi.appendChild(document.createTextNode(document.getElementById('fruit-to-add').value));
    newLi.appendChild(p);
    newLi.appendChild(deleteBtn)
    newLi.appendChild(editBtn)
    fruits.appendChild(newLi);


        // Clear input fields
        document.getElementById('fruit-to-add').value = '';
        document.getElementById('description').value = '';

})


fruits.addEventListener('click', function (event) {
    event.preventDefault();//not needed here as such
    if (event.target.classList.contains('delete-btn')) {
        fruits.removeChild(event.target.parentElement)
    }

})



// adding filter functionality


// grab the filter element and implement filter functionality
const filter = document.getElementById('filter');

filter.addEventListener('keyup', function (event) {
    //get filter text
    const filterText = event.target.value.toLowerCase()

    const fruits = document.getElementsByClassName('fruit');

    for (let i = 0; i < fruits.length; i++){
        const textContent = fruits[i].textContent.toLowerCase() 
        if (textContent.indexOf(filterText) === -1){
            fruits[i].style.display = "none"
        } else{
            fruits[i].style.display = "flex"
        }
        
    }
})