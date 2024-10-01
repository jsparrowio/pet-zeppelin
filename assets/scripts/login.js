const loginbutton = myDoc.getElementById('loginSubmit');
const usernameEl = myDoc.getElementById('loginUsername');
const passwordEl = myDoc.getElementById('loginPassword');


//Event listener for clicking submit button
loginbutton.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("DING");
    //TODO IF LocalStorage doesn't have an object that contains a matching username
    if (users.length > 0 && users) {
    let i = 0;
    for (i = 0; i < users.length; i++) {
    if(users[i].username.includes(usernameEl.value)){
        //check to see if password matches
        if(users[i].password === passwordEl.value){
            const currentUser = {
                username: usernameEl.value,
                password: passwordEl.value
            }
            localStorage.setItem('currentUser',JSON.stringify(currentUser));
            alertSuccess('Login successfull!');
            return;
            //LOGIN SUCCESS <-- what does this mean? Current Profile = this profile object?
            //GO to main page
        }
        else {
            alertWarning('Wrong password stupid');
            //change paragraph element in login to say 'invalid username or password'
            return;
        }
    }
  }
if(i === users.length){
    //Create a new profile
    newProfile();
    alertSuccess('New user registered!');
    //GO to main page maybe make this current profile?
    return;
}
}  else {
    console.log('New User Registered!');
    //Create a new profile
    newProfile();
    alertSuccess('New user registered!');
    return;
    //GO to main page maybe make this current profile?
}
});

function newProfile() {
    users.push({
        username: usernameEl.value,
        password: passwordEl.value
    })
    const currentUser = {
        username: usernameEl.value,
        password: passwordEl.value
    }
    localStorage.setItem('currentUser',JSON.stringify(currentUser));
    storeLocalStorage();
    return users;
}