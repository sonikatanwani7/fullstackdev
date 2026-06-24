const ul = document.getElementById('expenseList');

function initialize(){
    // get items from localstorage
    fetchLocalStorage();

    //display in ul
    display()
    
}


function handleExpenseFormSubmit(event){
    event.preventDefault();
    console.log('form submitted')
    const newItem = {

    }
    newItem['amount'] = event.target.amount.value;
    newItem['description'] = event.target.description.value;
    newItem['category'] = event.target.category.value;
    newItem['id'] = Date.now();

    // add data to list 
    addItem(newItem);
    // clean the form:
    event.target.amount.value = '';
    event.target.description.value = '';
    event.target.category.value = '';

    // add newitem to local storage also
    addToLocalStorage(newItem);

    //above code was to add a new item
    // in order to edit the item, again submit form will be clicked after the item is edited. that has to be handles as well 

}


function addItem(item){

const li = document.createElement('li');
li.className = 'expense-item';
li.textContent = item.amount + ' - ' +  item.description + ' - '  + item.category + ' ';
li.id = Date.now();

const deleteBtn = document.createElement('button');
deleteBtn.className = 'detele-btn';
deleteBtn.textContent = 'Delete Expense';
deleteBtn.addEventListener('click', ()=>handleDelete(li, item.id));
li.appendChild(deleteBtn)

const editBtn = document.createElement('button');
editBtn.className = 'edit-btn';
editBtn.textContent = 'Edit Expense';
editBtn.addEventListener('click', ()=>handleEdit(item));
li.appendChild(editBtn)

ul.appendChild(li);

}

function addToLocalStorage(item){


    const expenseStore = JSON.parse(localStorage.getItem('expense-store')) || [];
    expenseStore.push(item);
    localStorage.setItem('expense-store', JSON.stringify(expenseStore));

}


function handleDelete(listItem, itemId){
    // delete item from list
    listItem.remove()
    const expenseStore = JSON.parse(localStorage.getItem('expense-store')) || [];

    if(!expenseStore)return
    const newList = []
    for(let i=0;i<expenseStore.length;i++){
        if(expenseStore[i].id !== itemId){
            newList.push(expenseStore[i])
        }
    }
    localStorage.setItem('expense-store', JSON.stringify(newList));



    // update local storage

}

function deleteFromLocalStorage(){

}

function handleEdit(){

    // edit item in list

    // update item in local storage... might be use sessionstorage to get editId. and update that then

}

function updateLocalStorage(){  // based on add or edit or delete ... updateLocalStorage

}


