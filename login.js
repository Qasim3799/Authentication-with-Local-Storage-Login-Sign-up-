const signUpForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
let users;



const signUp = (event) => {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if(checkEmailDoesNotExist(email) === true){
        addUser(firstName, email, password);
        alert('Sign up successful')
    }
    else{
        alert('User already exists!')
    }
}

// signUpForm.addEventListener('submit', signUp);



const login = (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if(checkEmailDoesNotExist(email)){
        alert('Email does not exist')
    }
    else{
        users = getUsers();
        if(users[email][2] === password){
            alert('Login Successful')
        }else{
            alert('Incorrect password')
        }
    }
}

// function to check if email is availble
const checkEmailDoesNotExist = (email) => {
    users = getUsers();
    if(users[email]){
        return false  // if email already exists
    }else{
        return true;   // if email is available
    } 
}


// function to add user to local storage
const addUser = (firstName, email, password) => {
    users = getUsers();
    users[email] = [firstName, email, password];
    localStorage.setItem('users', JSON.stringify(users))

    // users: {abc@gmail:[username, email, password], xyz@gmail.com:[username, email, password]}
}

//function to get users from localStorage
const getUsers = () => {
    if(!localStorage.getItem('users')){
        localStorage.setItem('users', JSON.stringify({}))
    }

    return JSON.parse(localStorage.getItem('users'))
}





