

function handleFeedbackFormSubmit(event){
    event.preventDefault()


    let feedbackDetails = {
        username: event.target.username.value,
        rating:event.target.rating.value
    }
    
    if(editId !==null){
        // edit form 

        axios.put(`https://crudcrud.com/api/be7a941f1fe8411291ff03c866450e98/feedbackData/${editId}`,feedbackDetails)
        .then((result)=>{
            console.log(result);
            updateItem(feedbackDetails);
            if(count_old != feedbackDetails[rating]){
                count[count_old]--;
                count[feedbackDetails.rating]++
                updateOverallRatingsDisplay();
            }
            // updateDOM
            document.querySelector('button[type=submit]').textContent = 'Submit'
        })
        .catch(error=>console.log(error))
    }else{   // normal add operation
          axios.post('https://crudcrud.com/api/be7a941f1fe8411291ff03c866450e98/feedbackData', feedbackDetails)
    .then((result)=>{addData(result.data);count[feedbackDetails.rating]++;updateOverallRatingsDisplay()})
    .catch(error=>console.log(error))  
    }
}

function fetchAndDisplayRatingsData(){
    axios.get('https://crudcrud.com/api/be7a941f1fe8411291ff03c866450e98/feedbackData')
    .then((result)=>{displayRatingsData(result.data);updateOverallRatingsDisplay();})
    .catch(error=>console.log(error))

}

function displayRatingsData(data){
    for(let i=0;i<data.length;i++){
        addData(data[i]);
        count[data[i].rating]++
    }
}

let count = {
    1:0,
    2:0,
    3:0,
    4:0,
    5:0
};
function updateOverallRatingsDisplay(){
    // think of a good strategy for the same
    const ratingsDiv = document.querySelector('#ratingDisplay')
    let ratingDisplay = document.querySelector('#ratingDisplay')
    ratingDisplay.innerHTML = ''
    for(let key in  count){
        let ratingsStr = ''
        for(let i=0;i<key;i++){
            ratingsStr += '*'
        }
        ratingDisplay.innerHTML += `${ratingsStr} (${count[key]})<br>`;
        
    }
}



function addData(data){

    const ul = document.querySelector('#feedbackList');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${data.username} - ${data.rating} `));
    li.id = data._id
    li.className='list-item'
    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteBtn.addEventListener('click', ()=>deleteFeedback(li, data))
    deleteBtn.className = 'delete-btn'
    li.appendChild(deleteBtn)

    const editBtn = document.createElement('button');
    editBtn.appendChild(document.createTextNode('Edit'));
    editBtn.addEventListener('click', ()=>editFeedback(data))
    editBtn.className = 'edit-btn'
    li.appendChild(editBtn)
    ul.appendChild(li)


}



function deleteFeedback(li, data){
    axios.delete(`https://crudcrud.com/api/be7a941f1fe8411291ff03c866450e98/feedbackData/${data._id}`)
    .then((result)=>{
        console.log(result.data);
        count[data.rating]--;
        li.remove();
        updateOverallRatingsDisplay();
    })
    .catch(error=>console.log(error))
}

let editId = null;
let count_old;


function editFeedback(data){
    const form = document.querySelector('#feedbackForm');
        form.username.value = data.username;
        form.rating.value = data.rating;
        editId = data._id;
        count_old = data.rating
        console.log('---old count', count_old)
        document.querySelector('button[type=submit]').textContent = 'Update'
}

function updateItem(data){
    let listItems = document.querySelectorAll('.list-item');
    for(let i=0;i<listItems.length;i++){
        if(listItems[i].id == editId){
            const deleteBtn = listItems[i].querySelector('.delete-btn');
            const editBtn = listItems[i].querySelector('.edit-btn');
            listItems[i].textContent = `${data.username} - ${data.rating} `;
            listItems[i].append(deleteBtn);
            listItems[i].append(editBtn);
            break
        }
    }
    editId = null;
}


document.addEventListener('DOMContentLoaded', fetchAndDisplayRatingsData);