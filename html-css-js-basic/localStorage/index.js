function deleteUser(event) {
    if (event.target.classList.contains('delete-btn')) {
        const userDetails = event.target.parentElement.textContent;
        const emailKey = userDetails.split(',')[1];
        localStorage.removeItem(emailKey);
        event.target.parentElement.remove()
    }
}

function handleFormSubmit(event){
    event.preventDefault()
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    if (localStorage.getItem(email) === null) {

        // store in local store n populate result in list
        const li = document.createElement('li');
        li.textContent = username + ',' + email + ',' + phone;

        const btn = document.createElement('button');
        btn.textContent = 'x';
        btn.className = "delete-btn";
        btn.addEventListener('click', deleteUser);
        li.appendChild(btn);
        const ul = document.getElementsByTagName('ul')[0];
        ul.appendChild(li);
        
        
        console.log(ul)
        const newObj = {
            'email': email,
            'name': username,
            'phone':phone
        }
        localStorage.setItem(email,JSON.stringify(newObj));
    }
}

