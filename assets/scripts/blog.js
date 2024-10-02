const postsEl = myDoc.getElementById('posts');
const submitButton = myDoc.getElementById('postSubmit');

function renderPosts(){
    // TODO: Clear all elements attached to main?
    const blogPosts = readPosts(); // get list of post objects from local storage
    for(postsObj in blogPosts){
        buildPost(postsObj);
    }
}

function submitPost(event){
    event.preventDefault();
    //const formEl = myDoc.querySelector('form');
    //create a new post by populating an object with parameters
    const imgSubmit = myDoc.getElementById('postImage');
    const titleSubmit = myDoc.getElementById('postTitle');
    const contentSubmit = myDoc.getElementById('postContent');
    
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

function buildPost(blogPost){
    //make all the elements of the post
    const articleEl = myDoc.createElement('article');
    const imgEl = myDoc.createElement('img');
    const userEl = myDoc.createElement('h3');
    const titleEl = myDoc.createElement('h2');
    const contentEl = myDoc.createElement('blockquote');
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
    if(postsEl.hasChildNodes()){
        postsEl.insertBefore(articleEl,postsEl.firstChild);
    } else {
        postsEl.appendChild(articleEl);
    }

}

submitButton.addEventListener('submit', submitPost);
//TODO add event listner for submit button on post