const myDoc = document;
const blimpBtn = myDoc.getElementById('postPet');
const postsDiv = myDoc.getElementById('posts');

//TODO: Add functionality to postPets buton.
//Button function should: 
//Remove h3 from DOM
//Remove post button from DOM
//Create and append title Input to DOM with custom ID
//Create and append textbox to DOM with custom ID
//Create and append image input box to DOM with specific ID
//Create and append submitblog button to DOM

blimpBtn.addEventListener('click', function () {
    const npb = myDoc.getElementById("noPets");
    const pP = myDoc.getElementById("postPet");
    const petBlogForm = myDoc.createElement("div");
    npb.remove();
    pP.remove();
    petBlogForm.id = "petPost";
    const petImgInp = myDoc.createElement('input');
    petImgInp.id = "petImage";
    petImgInp.type = "file";
    const blogTitleInp = myDoc.createElement('input');
    blogTitleInp.id = "blogTitle";
    const petBlogText = myDoc.createElement('input');
    petBlogText.id = "blogContent";
    petBlogText.type = "textbox";
    const petBlogSubmit = myDoc.createElement('input');
    petBlogSubmit.type = "image";
    petBlogSubmit.id = "submitpost";
    petBlogSubmit.src ='C:\Users\zlaco\bootcamp\projects\project1\pet-zeppelin\assets\Group4PetZep.png';
    petBlogForm.appendChild(petImgInp);
    petBlogForm.appendChild(blogTitleInp);
    petBlogForm.appendChild(petBlogText);
    petBlogForm.appendChild(petBlogSubmit);
    postsDiv.appendChild(petBlogForm)
});