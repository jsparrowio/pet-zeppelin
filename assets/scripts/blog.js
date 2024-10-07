// global variables for page settings
const populateDummies = true; // SET TO FALSE IF YOU WANT TO REMOVE DUMMY POSTS

// global vaiables for document query selectors as several functions use these
// uses myDoc variable established in global.js to ensure page load efficency by only calling the DOM once
const postsEl = myDoc.getElementById('posts');
// modal selector variables
const modal = myDoc.getElementById('postModal');
const modalbtn = myDoc.getElementById('modalBtn');
const modalClose = myDoc.getElementById('closeModal');
const imgSubmit = myDoc.getElementById('postImage');
const titleSubmit = myDoc.getElementById('postTitle');
const contentSubmit = myDoc.getElementById('postContent');
const submitButton = myDoc.getElementById('postSubmit');
// object containing the "dummy posts" that will generate on page load to display a "full" feed of blog posts
const dummyposts = [
    {
        "image": "https://i.ibb.co/cXPpCtX/rio-Profile.jpg",
        "username": "captaincrimes",
        "title": "just got done shoplifting",
        "content": "oh boy, just got home from another day of shopliftin!"
    },
    {
        "image": "https://i.ibb.co/0DGYJQH/PXL-20240801-203701698.jpg",
        "username": "mattatoes",
        "title": "Two silly Dogs",
        "content": "Two knuckleheads laying down nose to nose. They're just tuckered out from a long day of doing nothing at all."
    },
    {
        "image": "https://i.ibb.co/8B3CRpV/gonzo1.jpg",
        "username": "jsparrowio",
        "title": "i iz tired",
        "content": "i iz so tired, i take nap now. gooodddniggghttt"
    }
]

// call this function on page load, see description of function below
checkActiveUser();

// function to check for an active user by checking for currentUser data in local storage
// if no active user, redirect to the login page
function checkActiveUser() {
    const activeUser = checkCurrentUser();
    if (activeUser.username === undefined || !activeUser) {
        redirectPage('./login.html');
    }
}

// call this function on page load, see description of function below
renderPosts();

// reads local storage to check if there are any stored posts; first generates dummy posts (if set to true), then generates any posts from local storage
function renderPosts() {
    const blogPosts = readPosts(); // get list of post objects from local storage
    if (populateDummies) {
        for (dummy of dummyposts) {
            blogPosts.unshift(dummy);
        }
    };
    for (postsObj of blogPosts) {
        buildPost(postsObj);
    }
}

// function that post data from any user input from the modal form that is then passed to two other functions to be generated and stored
function submitPost(event) {
    event.preventDefault();
    const currentUser = checkCurrentUser();
    const formEl = myDoc.querySelector('form');
    //create a new post by populating an object with parameters
    const blogPost = {
        image: imgSubmit.value,
        username: currentUser.username,
        title: titleSubmit.value,
        content: contentSubmit.value
    };
    //store the new post in the list of posts. This doesn't update the currently rendered posts...
    storePost(blogPost);
    //...so we append the new post to the top of the feed and clear the form.
    buildPost(blogPost);
    formEl.reset();
    modal.style.display = "none";
    alertSuccess('Post has published to the feed!');
};

// function that creates the post element from the data given from the previous function
function buildPost(bp) {
    //make all the elements of the post
    const articleEl = myDoc.createElement('article');
    const imgEl = myDoc.createElement('img');
    const textBlockEl = myDoc.createElement('div');
    const userEl = myDoc.createElement('h3');
    const titleEl = myDoc.createElement('h2');
    const contentEl = myDoc.createElement('blockquote');
    //add all the content from the object to each element
    imgEl.src = bp.image;
    userEl.textContent = bp.username;
    titleEl.textContent = bp.title;
    contentEl.textContent = bp.content;
    //add tailwind classes
    articleEl.setAttribute('class', "scale-75 m-auto border-4 border-thepurple rounded-xl shadow-2xl bg-gradient-to-l from-thelightblue to-themediumblue2 via-themediumblue1");
    imgEl.setAttribute('class', "m-auto border-1 rounded-xl");
    textBlockEl.setAttribute('class', "bg-backgroundblue rounded-xl");
    userEl.setAttribute('class', "text-themediumblue1");
    titleEl.setAttribute('class', "bg-thepurple text-white rounded-xl text-xl");
    contentEl.setAttribute('class', "px-1 py-6 border-t-2 mx-auto text-lg sm:text-small");
    //append everything together
    articleEl.appendChild(imgEl);
    textBlockEl.appendChild(userEl);
    textBlockEl.appendChild(titleEl);
    textBlockEl.appendChild(contentEl);
    articleEl.appendChild(textBlockEl);
    //check if the posts div is empty, if not, then put the next added post above the first post
    if (postsEl.hasChildNodes()) {
        postsEl.insertBefore(articleEl, postsEl.firstChild);
    } else {
        postsEl.appendChild(articleEl);
    }

};

// Modal js
// modal triggers to either display the modal on the page or hides it
modalbtn.onclick = function () {
    modal.style.display = "block";
};


// when the user clicks the x, close modal
modalClose.onclick = function () {
    modal.style.display = "none";
};

// when the user clicks outside of the modal, close modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// event listener for blog post modal for when the user clicks submit; either takes action in the submitPost function or alerts the user to finish filling out all fields
submitButton.addEventListener('click', function (event) {
    if (imgSubmit.value && titleSubmit.value && contentSubmit.value) {
        console.log("submitting post...");
        submitPost(event);
    } else {
        event.preventDefault();
        alertCaution("Please fill out all fields!");
    }
});

