const ul = document.querySelector('#expenseList');
const form = document.getElementById('expenseTracker')


function initialize(){
    // get items from localstorage
    fetchLocalStorage();

    //display in ul
    display()
    
}


function handleExpenseFormSubmit(event){
    event.preventDefault();
    console.log('form submitted')
    const item = {

    }
    item['amount'] = event.target.amount.value;
    item['description'] = event.target.description.value;
    item['category'] = event.target.category.value;
    

    const editId = sessionStorage.getItem('editId')
    if(!editId){ // if editid is not found i.e. the item is aa new item to be added and form not getting submitted via edit
        // add data to list // first create unique id as this is a new item being added
        item['id'] = Date.now(); 
        addItem(item);

        // add newitem to local storage also
        addToLocalStorage(item);
    }else{
        // now edit the list item and then update local store also.
        //find list item with id - editid 
        const listItems  = document.getElementsByClassName('expense-item'); 
        for(let i=0;i<listItems.length;i++){
            if(listItems[i].id == editId){
                // update li content n also create updatedItem.
                // li.textContent.amount = item.amount 
                // li.textContent.description = item.description
                // li.textContent.category = item.category
                const deleteBtn = listItems[i].querySelector('.delete-btn');
                const editBtn = listItems[i].querySelector('.edit-btn');
                listItems[i].textContent = item.amount + ' - ' +  item.description + ' - '  + item.category + ' ';
                listItems[i].append(deleteBtn);
                listItems[i].append(editBtn);
                break;
            }
        }
        item['id'] =Number(editId); 
        sessionStorage.removeItem('editId')
         const submitBtn = document.querySelector('button[type=submit]')
        submitBtn.textContent = "submit"
        console.log('before calling update storaage')
        
        updateLocalStorage(item);
        console.log('after calling update storaage')

    }

    // clean the form:
    // event.target.amount.value = '';
    // event.target.description.value = '';
    // event.target.category.value = '';
    form.reset();

}


function addItem(item){

const li = document.createElement('li');
li.className = 'expense-item';
const textContent = item.amount + ' - ' +  item.description + ' - '  + item.category + ' ';
const textNode = document.createTextNode(textContent);
li.id = item.id;
li.appendChild(textNode);

const deleteBtn = document.createElement('button');
deleteBtn.className = 'delete-btn';
deleteBtn.textContent = 'Delete Expense';
deleteBtn.addEventListener('click', ()=>handleDelete(li,item.id));
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


function handleDelete(listItem, itemId){// deleting from dom as well as localstorage
    // delete item from list
    listItem.remove()

    // update local storage
    const expenseStore = JSON.parse(localStorage.getItem('expense-store')) || [];
    const newList = expenseStore.filter(item => item.id !== itemId);
    localStorage.setItem('expense-store', JSON.stringify(newList));

}


function handleEdit(item){// item we get the data while adding the items itself

    // populate form with the content of listitem to be edited
    form.amount.value = item.amount;
    form.description.value = item.description;
    form.category.value = item.category;

    // setup editId to edit the item when the form is updated
    sessionStorage.setItem('editId',item.id);
    const submitBtn = document.querySelector('button[type = submit]');
    submitBtn.textContent = 'Update Expense'




    // update item in local storage... might be use sessionstorage to get editId. and update that then

}

function updateLocalStorage(item){  // based on add or edit or delete ... updateLocalStorage
    const expenseStore = JSON.parse(localStorage.getItem('expense-store')) || [];
    for(let i=0; i<expenseStore.length;i++){
        if(expenseStore[i].id == item.id){
            expenseStore[i].amount = item.amount;
            expenseStore[i].description = item.description;
            expenseStore[i].category = item.category;
        }
    }

    localStorage.setItem('expense-store', JSON.stringify(expenseStore));
}


