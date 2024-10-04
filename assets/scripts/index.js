let currentUser = JSON.parse(localStorage.getItem(`currentUser`));

// Checking if user exists in local storage

if (currentUser && currentUser.username) {
    window.location.href = `./blogpage.html`
} else {
    window.location.href = `./login.html`
}
