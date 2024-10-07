// send user to the correct page they should be on based on the parameters in the function
sendUser();

function sendUser() {
    let currentUser = JSON.parse(localStorage.getItem(`currentUser`));

    // Checking if user exists in local storage

    if (currentUser && currentUser.username) {
        window.location.href = `./blogpage.html`
    } else {
        window.location.href = `./login.html`
    }
}