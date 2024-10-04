const myDoc = document;

function checkCurrentUser() {
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
return currentUser || [];
}

function setCurrentUser(userData) {
  localStorage.setItem('currentUser', JSON.stringify(userData));
}

function readUsers() {
  const users= JSON.parse(localStorage.getItem('users'));
  return users || [];
}

function readPosts() {
  const posts = JSON.parse(localStorage.getItem('posts'));
  return posts || [];
}

function storePost(blogPost) {
  const posts = readPosts();
  posts.push(blogPost);
  localStorage.setItem('posts', JSON.stringify(posts));
}
function storeUser(userData) {
  const users = readUsers();
  users.push(userData);
  localStorage.setItem('users', JSON.stringify(users));
}

  function alertWarning(message) {
    const headerEl = myDoc.querySelector('header');
    const alertEl = myDoc.createElement('div');
    alertEl.classList.add('alert', 'alertWarning');
    alertEl.innerHTML = `<span class="closebtn" onclick="this.parentElement.remove();">&times;</span> 
    ${message}`;
    headerEl.after(alertEl);
    setTimeout(() => {
      alertEl.style.opacity='0';
      alertEl.style.visibility='1';
    }, "3000");
    setTimeout(() => {
      alertEl.remove()
    }, "31000");
  }

  function alertSuccess(message) {
    const headerEl = myDoc.querySelector('header');
    const alertEl = myDoc.createElement('div');
    alertEl.classList.add('alert', 'alertSuccess');
    alertEl.innerHTML = `<span class="closebtn" onclick="this.parentElement.remove();">&times;</span> 
    ${message}`;
    headerEl.after(alertEl);
    setTimeout(() => {
      alertEl.style.opacity='0';
      alertEl.style.visibility='1';
    }, "3000");
    setTimeout(() => {
      alertEl.remove()
    }, "31000");
  }

  function alertCaution(message) {
    const headerEl = myDoc.querySelector('header');
    const alertEl = myDoc.createElement('div');
    alertEl.classList.add('alert', 'alertCaution');
    alertEl.innerHTML = `<span class="closebtn" onclick="this.parentElement.remove();">&times;</span> 
    ${message}`;
    headerEl.after(alertEl);
    setTimeout(() => {
      alertEl.style.opacity='0';
      alertEl.style.visibility='1';
    }, "3000");
    setTimeout(() => {
      alertEl.remove()
    }, "31000");
  }

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};