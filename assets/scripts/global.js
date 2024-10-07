// global variable to establish and call the DOM once to maintain page load efficency
const myDoc = document;

// functions to check and/or store the current active user based on login events
// checks for a current active user in the local storage based on currentUser data
function checkCurrentUser() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  return currentUser || [];
}

// sets a current active user to the local storage with a currentUser object when the user logs in
function setCurrentUser(userData) {
  localStorage.setItem('currentUser', JSON.stringify(userData));
}

// functions for login and user registration events
// reads any already registered users in local storage for both login validation and/or to push addition users to the array of objects that register
function readUsers() {
  const users = JSON.parse(localStorage.getItem('users'));
  return users || [];
}

// stores any data from the users array of objects when a new user registers
function storeUser(userData) {
  const users = readUsers();
  users.push(userData);
  localStorage.setItem('users', JSON.stringify(users));
}

// functions for blog posts
// reads any currently stored blog posts from the local storage; used for both post generation and to push any additional data to the array of objects
function readPosts() {
  const posts = JSON.parse(localStorage.getItem('posts'));
  return posts || [];
}

// stores any data from the blog posts array when a new post is created
function storePost(blogPost) {
  const posts = readPosts();
  posts.push(blogPost);
  localStorage.setItem('posts', JSON.stringify(posts));
}

// alert pop up functions; warning for critical events, caution for minor errors, success for successful events
function alertWarning(message) {
  const headerEl = myDoc.querySelector('header');
  const alertEl = myDoc.createElement('div');
  alertEl.classList.add('alert', 'alertWarning');
  alertEl.innerHTML = `<span class="closebtn" onclick="this.parentElement.remove();">&times;</span> 
    ${message}`;
  headerEl.after(alertEl);
  setTimeout(() => {
    alertEl.style.opacity = '0';
    alertEl.style.visibility = '1';
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
    alertEl.style.opacity = '0';
    alertEl.style.visibility = '1';
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
    alertEl.style.opacity = '0';
    alertEl.style.visibility = '1';
  }, "3000");
  setTimeout(() => {
    alertEl.remove()
  }, "31000");
}

// call this function on page load, see description of function below
headerUserInfo();

// function to set the header to contain the current users username on the header and generate a log out button
function headerUserInfo() {
  const currentUser = checkCurrentUser();
  if (currentUser.username !== undefined) {
    const welcomeUser = currentUser.username;
    const welcomeHeader = myDoc.querySelector('#userinfo');
    welcomeHeader.innerHTML = `<div class="mr-8 mt-4">Welcome, ${welcomeUser}!</span>`;
    const logoutButton = myDoc.createElement('input')
    logoutButton.setAttribute("type", "submit");
    logoutButton.setAttribute("value", "Logout");
    logoutButton.classList.add('flex', 'justify-end', 'self-end', 'border-solid', 'border-2', 'rounded-xl', 'px-2', 'mt-2', 'mb-2', 'hover:bg-white', 'bg-gradient-to-r', 'from-thepurple', 'to-thedarkblue', 'via-themediumblue', 'text-white', 'hover:scale-105', 'active:scale-95');
    welcomeHeader.appendChild(logoutButton);
    logoutButton.addEventListener('click', logout);
  }
}

// function for the logout button in the header
function logout() {
  localStorage.removeItem('currentUser');
  redirectPage('./login.html')
}

// function for anywhere we need to redirect the user to a different page
function redirectPage(url) {
  location.assign(url);
};