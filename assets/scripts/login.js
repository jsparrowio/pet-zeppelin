const myDoc = document;
const loginbutton = myDoc.getElementById('loginSubmit');
const usernameEl = myDoc.getElementById('loginUsername');
const passwordEl = myDoc.getElementById('loginPassword');


//Event listener for clicking submit button
loginbutton.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("DING");
    //TODO IF LocalStorage doesn't have an object that contains a matching username
    const fetchProfile = JSON.parse(localStorage.getItem(usernameEl.value));
    if(fetchProfile===null){
        //Create a new profile
        newProf = newProfile();
        localStorage.setItem(usernameEl.value,JSON.stringify(newProf));
        localStorage.setItem('currentUser',JSON.stringify(newProf));
        //GO to main page maybe make this current profile?
    }
    else{
        //check to see if password matches
        if(fetchProfile.password === passwordEl.value){
            localStorage.setItem('currentUser',JSON.stringify(fetchProfile));
            //LOGIN SUCCESS <-- what does this mean? Current Profile = this profile object?
            //GO to main page
        }
        else{
            alert("wrong password stupid")
            //change paragraph element in login to say 'invalid username or password'
        }
    }
});

function newProfile() {
    const profile = {
        username: usernameEl.value,
        password: passwordEl.value
    }
    return profile;
}