const mainEl = myDoc.querySelector('main');

function renderPosts(){
    // TODO: Clear all elements attached to main?
    const blogPosts = 'THIS IS NOT THE REAL VALUE'; // get list of post objects from local storage
    for(postObj in blogPosts){
        buildPost(postObj);
    }
}
// TODO: Add a fuction for making a post, that add the post parameters to an object, adds that to the post array, 
//      then rerenders the posts to add the most recent post
//      parameters: image input, post title, post content
function submitPost(){
    // create a new post by populating an object with parameters
    const imgSubmit = myDoc.getElementById('postImage');
    const titleSubmit = myDoc.getElementById('postTitle');
    const contentSubmit = myDoc.getElementById('postContent');
    
    const newPost = {
        image: imgSubmit, 
        username: currentUser.username,
        title: titleSubmit, 
        content: contentSubmit 
    }
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
    articleEl.appendChild(imgEl);
    articleEl.appendChild(imgEl);
    articleEl.appendChild(imgEl);
    //TODO use .insertBefore to add element group to main

}

//TODO add event listner for submit button on post