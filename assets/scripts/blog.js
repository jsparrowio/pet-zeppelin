const postsEl = document.getElementById('posts');
const submitButton = document.getElementById('postSubmit');
const expandButton = document.getElementById('expandTable');
const expandTable = document.getElementById('collapseTable');

function renderPosts() {
    // TODO: Clear all elements attached to main?
    const blogPosts = readPosts(); // get list of post objects from local storage
    for (postsObj in blogPosts) {
        buildPost(postsObj);
    }
}

function submitPost(event) {
    event.preventDefault();
    //const formEl = document.querySelector('form');
    //create a new post by populating an object with parameters
    const imgSubmit = document.getElementById('postImage');
    const titleSubmit = document.getElementById('postTitle');
    const contentSubmit = document.getElementById('postContent');

    const blogPost = {
        image: imgSubmit,
        username: currentUser.username,
        title: titleSubmit,
        content: contentSubmit
    };

    storePost(blogPost);
    buildPost(blogPost);
    //formEl.reset();
};

function buildPost(blogPost) {
    //make all the elements of the post
    const articleEl = document.createElement('article');
    const imgEl = document.createElement('img');
    const userEl = document.createElement('h3');
    const titleEl = document.createElement('h2');
    const contentEl = document.createElement('blockquote');
    //add all the content from the object to each element
    imgEl.src = blogPost.image;
    userEl.textContent = blogPost.username;
    titleEl.textContent = blogPost.title;
    contentEl.textContent = blogPost.content;
    //append everything together
    articleEl.appendChild(imgEl);
    articleEl.appendChild(userEl);
    articleEl.appendChild(titleEl);
    articleEl.appendChild(contentEl);
    //check if the posts div is empty, if not, then put the next added post above the first post
    if (postsEl.hasChildNodes()) {
        postsEl.insertBefore(articleEl, postsEl.firstChild);
    } else {
        postsEl.appendChild(articleEl);
    }

}

submitButton.addEventListener('submit', submitPost);

let tableShow = false;

function expandForm(event) {
    event.preventDefault();
    if (tableShow) {
        expandTable.setAttribute('class', 'collapse m-auto');
        tableShow = false;
        console.log('TABLESHOW FALSE');
    } else {
        expandTable.setAttribute('class', 'm-auto');
        tableShow = true;
        console.log('TABLESHOW TRUE');
    }
};

expandButton.addEventListener('click', expandForm);
//TODO add event listner for submit button on post