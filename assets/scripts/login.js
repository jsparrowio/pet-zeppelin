// global document selectors to be used by the two functions on this page
const loginbutton = myDoc.getElementById('loginSubmit');
const usernameEl = myDoc.getElementById('loginUsername');
const passwordEl = myDoc.getElementById('loginPassword');

// event listener for clicking submit button
loginbutton.addEventListener('click', function (event) {
    event.preventDefault();
    // checks to ensure there is present values in the login form
    if (usernameEl.value !== '' && passwordEl.value !== '') {
        const users = readUsers();
        // checks every user object to see if the username and password match together, if not alerts that the username/password is incorrect
        if (users.length > 0 && users) {
            let i = 0;
            for (i = 0; i < users.length; i++) {
                if (users[i].username.includes(usernameEl.value)) {
                    if (users[i].password === passwordEl.value) {
                        const userData = {
                            username: usernameEl.value,
                            password: passwordEl.value
                        }
                        setCurrentUser(userData);
                        alertSuccess('Login successfull!');
                        redirectPage('./blogpage.html')
                        return;
                    }
                    else {
                        alertWarning('Incorrect username or password!');
                        return;
                    }
                }
            }
            // if we have ran through the entire array and there are no matches, register a new user
            if (i === users.length) {
                newProfile();
                alertSuccess('New user registered!');
                redirectPage('./blogpage.html')
                return;
            }
        } else {
            // if there are NO users registered, immediatly register a new user
            console.log('New User Registered!');
            newProfile();
            alertSuccess('New user registered!');
            redirectPage('./blogpage.html')
            return;
        }
    } else {
        alertCaution('Please enter both a username and a password');
        return;
    }
});

// function to register a new user and store the data in local storage including any already registered user data
function newProfile() {
    const userData = {
        username: usernameEl.value,
        password: passwordEl.value
    }
    setCurrentUser(userData);
    storeUser(userData);
    return userData;
}
