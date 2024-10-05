const postsEl = document.getElementById('posts');
const submitButton = document.getElementById('postSubmit');
const expandButton = document.getElementById('expandTable');
const expandTable = document.getElementById('collapseTable');
const populateDummies = true; // SET TO FALSE IF YOU WANT TO REMOVE DUMMY POSTS
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
function renderPosts(){
    const blogPosts = readPosts(); // get list of post objects from local storage
    if(populateDummies){
        for(dummy of dummyposts){
            blogPosts.unshift(dummy);
        }
    console.log(blogPosts);
    };
    for(postsObj of blogPosts){
        buildPost(postsObj);
    }
}

function submitPost(event) {
    console.log('HIT');
    event.preventDefault();
    const currentUser = checkCurrentUser();
    const formEl = document.querySelector('form');
    //create a new post by populating an object with parameters
    const imgSubmit = document.getElementById('postImage');
    const titleSubmit = document.getElementById('postTitle');
    const contentSubmit = document.getElementById('postContent');

    const blogPost = {
        image: imgSubmit.value,
        username: currentUser.username,
        title: titleSubmit.value,
        content: contentSubmit.value
    };

    storePost(blogPost);
    buildPost(blogPost);
    formEl.reset();
};

function buildPost(bp) {
    //make all the elements of the post
    const articleEl = document.createElement('article');
    const imgEl = document.createElement('img');
    const textBlockEl = document.createElement('div');
    const userEl = document.createElement('h3');
    const titleEl = document.createElement('h2');
    const contentEl = document.createElement('blockquote');
    //add all the content from the object to each element
    imgEl.src = bp.image;
    userEl.textContent = bp.username;
    titleEl.textContent = bp.title;
    contentEl.textContent = bp.content;
    //add tailwind classes
    articleEl.setAttribute('class', "scale-75 m-auto border-4 border-thepurple rounded-xl shadow-2xl bg-gradient-to-l from-thelightblue to-themediumblue2 via-themediumblue1");
    imgEl.setAttribute('class',"m-auto border-1 rounded-xl");
    textBlockEl.setAttribute('class',"bg-backgroundblue rounded-xl");
    userEl.setAttribute('class',"text-themediumblue1");
    titleEl.setAttribute('class',"bg-thepurple text-white rounded-xl text-xl");
    contentEl.setAttribute('class',"px-24 py-6 border-t-2 mx-6 text-lg");
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

renderPosts();

submitButton.addEventListener('click', submitPost);

//Modal js

//modal refs
const modal = document.getElementById('postModal');
const modalbtn = document.getElementById('modalBtn');
const modalClose = document.getElementById('modalClose');
//modal triggers
modalbtn.onclick = function() {
    modal.style.display = "block";
};

modalClose.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

//when the user clicks the x, close modal

//when the user clicks out of the modal, close modal