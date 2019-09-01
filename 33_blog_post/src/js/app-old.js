const submitBtn = document.getElementById('submit');
const form = document.getElementById('form');


loadEvents()
function loadEvents() {

  form.addEventListener('submit', getInput);
}

function getInput(e) {
  e.preventDefault();
  var title = document.getElementById('titleInput');
  var msg = document.getElementById('messageInput');

  validateInput(title, msg)

}


function validateInput(title, msg) {
  const errorWarning = document.querySelector('.error-warning');

  if(title.value=== '' || msg.value === '') {
    errorWarning.textContent = 'Digite o nome e conteúdo do post.'
  } else {
    showPosts(title, msg)
  }
}

function showPosts(title, msg) {
  const output = document.querySelector('.posts-output');
  var time = new Date();
  const h = time.getHours();
  const m = time.getMinutes();
  const d = time.getFullYear();
  const data = time.getTime()

  const postsArray = [];

  const objPost = {
    title: title.value,
    post: msg.value,
    id: data,
  }

  postsArray.push(objPost)
  console.log(postsArray)


  postsArray.map(post => {
    output.innerHTML += `
      <div class="post">
        <h4> ${post.title}  <span class="date"> ${d +' - '+ h +':'+ m} </span> </h4>
        <p> ${post.post} </p>
      </div>`;
  })


}



  // output.innerHTML += `<div class="post"><h4> ${postsArray[0].title.length > 45 ? postsArray.title.slice(0, 45) + '...' : postsArray.title }  <span class="date"> ${d +' - '+ h +':'+ m} </span> </h4> <p> ${postsArray.post} </p> </div>`;