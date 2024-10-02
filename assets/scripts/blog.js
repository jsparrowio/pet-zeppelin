const postsEl = myDoc.getElementById('posts');
const submitButton = myDoc.getElementById('postSubmit');

function renderPosts(){
    // TODO: Clear all elements attached to main?
    const blogPosts = 'THIS IS NOT THE REAL VALUE'; // get list of post objects from local storage
    for(postObj in blogPosts){
        buildPost(postObj);
    }
}

function submitPost(){
    let post = [];
    // create a new post by populating an object with parameters
    const imgSubmit = myDoc.getElementById('postImage');
    const titleSubmit = myDoc.getElementById('postTitle');
    const contentSubmit = myDoc.getElementById('postContent');
    
    const newPost = {
        image: imgSubmit, 
        username: currentUser.username,
        title: titleSubmit, 
        content: contentSubmit 
    };
    post = ''; //TODO Add readStorage fuction to add parsed array of post objects
    post.push(newPost);
    // TODO add storeLocalStorage function here
    buildPost(newPost);
};

function buildPost(singleObject){
    //make all the elements of the post
    const articleEl = myDoc.createElement('article');
    const imgEl = myDoc.createElement('img');
    const userEl = myDoc.createElement('h3');
    const titleEl = myDoc.createElement('h2');
    const contentEl = myDoc.createElement('blockquote');
    //add all the content from the object to each element
    imgEl.src = singleObject.image;
    userEl.textContent = singleObject.username;
    titleEl.textContent = singleObject.title;
    contentEl.textContent = singleObject.content;
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

submitButton.addEventListener('click', submitPost());
//TODO add event listner for submit button on post