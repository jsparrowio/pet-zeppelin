
const setBtn = myDoc.getElementById("settingsDropdownBtn")
const setLi = myDoc.getElementById("setList");
const editButton = myDoc.getElementById("editAboutMe");
const editBox = myDoc.getElementById("editBox");
const aboutMe = myDoc.getElementById("aboutMeBox");
const newAM = myDoc.getElementById("editAMBox");
const submitAMbutton = myDoc.getElementById('submitAM');

const renderAM = function() {
  
  const AMEl = myDoc.createElement('h2');
  AMEl.textContent = JSON.parse(localStorage.getItem('About Me'));
  aboutMe.appendChild(AMEl);

}
renderAM;

let showEditBox = false;
const editToggle = function (event) {
  event.preventDefault();
  if (showEditBox) {
      editBox.setAttribute('class', 'hidden');
      showEditBox = false;
      console.log('TABLESHOW FALSE');
  } else {
      editBox.setAttribute('class', 'visible');
      showEditBox = true;
      console.log('TABLESHOW TRUE');
  }
};

editButton.addEventListener('click', editToggle);

const submitAM = function (event) {
  event.preventDefault();
  if (newAM.value === "") {
    alert('Please Set About Me!');
  } else {
  localStorage.setItem('About Me', JSON.stringify(newAM.value));
  editToggle();
}};

submitAMbutton.addEventListener('click', submitAM);

























// const blimpBtn = myDoc.getElementById('postPet');
// const postsDiv = myDoc.getElementById('posts');

// //TODO: Add functionality to postPets buton.
// //Button function should:
// //Remove h3 from DOM
// //Remove post button from DOM
// //Create and append title Input to DOM with custom ID
// //Create and append textbox to DOM with custom ID
// //Create and append image input box to DOM with specific ID
// //Create and append submitblog button to DOM
// blimpBtn.addEventListener('click', function () {
//     const npb = myDoc.getElementById("noPets");
//     const pP = myDoc.getElementById("postPet");
//     const petBlogForm = myDoc.createElement("div");
//     npb.remove();
//     pP.remove();
//     petBlogForm.id = "petPost";
//     const petImgInp = myDoc.createElement('input');
//     petImgInp.id = "petImage";
//     petImgInp.type = "file";
//     const blogTitleInp = myDoc.createElement('input');
//     blogTitleInp.id = "blogTitle";
//     const petBlogText = myDoc.createElement('textarea');
//     petBlogText.id = "blogContent";
//     petBlogText.type = "textbox";
//     const petBlogSubmit = myDoc.createElement('button');
    
//     // type was set so image still, change to button for now
//     petBlogSubmit.type = "button";
    
//     petBlogSubmit.id = "submitPet";
//     petBlogSubmit.textContent = "work goddammit";
//     petBlogForm.appendChild(petImgInp);
//     petBlogForm.appendChild(blogTitleInp);
//     petBlogForm.appendChild(petBlogText);
//     petBlogForm.appendChild(petBlogSubmit);
//     postsDiv.appendChild(petBlogForm)

//     // nest this function 
//     petBlogSubmit.addEventListener('click', function () {
//       console.log("yay!");
//   })
// });


// //TODO: Save image, title and textarea inputs to localstorage


