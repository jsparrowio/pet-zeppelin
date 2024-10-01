const myDoc = document;
let posts = [];
let users = [];
let currentUser = [];
let currentElement;

readLocalStorage();
 
function readLocalStorage() {
    const storedPosts = JSON.parse(localStorage.getItem('posts'));
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedPosts) {
      posts = storedPosts;
    } else {
      posts = [];
    }
    if (storedUsers) {
        users = storedUsers;
      } else {
        users = [];
      }
      return;
  }
  // Creates a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
  function storeLocalStorage() {
    localStorage.setItem('posts', JSON.stringify(posts));
    localStorage.setItem('users', JSON.stringify(users));
  }

  function alertWarning(message) {
    const headerEl = myDoc.querySelector('header');
    const alertEl = myDoc.createElement('div');
    alertEl.classList.add('alertWarning');
    alertEl.innerHTML = `<span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
    ${message}`;
    headerEl.after(alertEl);
  }

  function alertSuccess(message) {
    const headerEl = myDoc.querySelector('header');
    const alertEl = myDoc.createElement('div');
    alertEl.classList.add('alertSuccess');
    alertEl.innerHTML = `<span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
    ${message}`;
    headerEl.after(alertEl);
  }

  function alertCaution(message) {
    const headerEl = myDoc.querySelector('header');
    const alertEl = myDoc.createElement('div');
    alertEl.classList.add('alertCaution');
    alertEl.innerHTML = `<span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
    ${message}`;
    headerEl.after(alertEl);
  }