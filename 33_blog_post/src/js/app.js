// const submitBtn = document.getElementById('submit');
// const form = document.getElementById('form');
const postsOutput = document.querySelector('.posts-output');

loadEvents()
function loadEvents() {
  document.getElementById('form').addEventListener('submit', newPost);
  // remove
  postsOutput.addEventListener('click', removePost)

  document.addEventListener('DOMContentLoaded', localStorageOnLoad)
}


function newPost(e) {
  e.preventDefault();

  let postTitle = document.getElementById('titleInput').value;
  let postText = document.getElementById('messageInput').value;
  let output = '';
  output += `
    <div class="post">
      <header>
        <h4> ${postTitle} <span class="date">  2019 - 23:11</span> </h4>
        <span class="remove-post">x</span>
      </header>

      <p> ${postText} </p>
    </div>
  `;
  postsOutput.innerHTML += output;

  // add localStorage;
  const myposts = {
    title: postTitle,
    text: postText
  }
  addPostLocalStorage(myposts);
}

function removePost(e) {
  if(e.target.classList.contains('remove-post')) {
    console.log('yes');
    e.target.parentElement.parentElement.remove();
  } else {
    console.log('no');
  }
}

function addPostLocalStorage(myposts) {
  let posts = getPostLocalStorage()

  posts.push(myposts)
  console.log(myposts)
  localStorage.setItem( 'posts', JSON.stringify(myposts))
}

function getPostLocalStorage() {
  let posts;
  const postsLS = localStorage.getItem('posts');

  if( postsLS === null ) {
    posts = [];
  } else {
    posts = JSON.parse( postsLS );
  }
  return posts;
}


function localStorageOnLoad() {
  let posts = getPostLocalStorage();

  Object.keys(posts).forEach(function(post) {
    console.log(post);
    let output = '';
    output += `
      <div class="post">
        <header>
          <h4> ${post.title} <span class="date">  2019 - 23:11</span> </h4>
          <span class="remove-post">x</span>
        </header>
        <p> ${post.text} </p>
      </div>
    `;
    postsOutput.innerHTML += output;
  });
}


  // // create remove btn
  // const removeBtn = document.createElement('a');
  // removeBtn.classList = 'remove-post';
  // removeBtn.textContent = 'x';

  // // create post card
  // const h4 = document.createElement('h4');
  // const p = document.createElement('p');
  // h4.textContent = postTitle;
  // p.textContent = postText;

  // // add to postText.;
  // h4.appendChild(removeBtn);
  // postsOutput.append(h4, p);


// function getInput(e) {
//   e.preventDefault();
//   var title = document.getElementById('titleInput');
//   var msg = document.getElementById('messageInput');

//   validateInput(title, msg)

// }

// function validateInput(title, msg) {
//   const errorWarning = document.querySelector('.error-warning');

//   if(title.value=== '' || msg.value === '') {
//     errorWarning.textContent = 'Digite o nome e conteúdo do post.'
//   } else {
//     showPosts(title, msg)
//   }
// }

// function showPosts(title, msg) {
//   const output = document.querySelector('.posts-output');
//   var time = new Date();
//   const h = time.getHours();
//   const m = time.getMinutes();
//   const d = time.getFullYear();
//   const data = time.getTime()

//   const postsArray = [];

//   const objPost = {
//     title: title.value,
//     post: msg.value,
//     id: data,
//   }

//   postsArray.push(objPost)
//   console.log(postsArray)


//   postsArray.map(post => {
//     output.innerHTML += `
//       <div class="post">
//         <h4> ${post.title}  <span class="date"> ${d +' - '+ h +':'+ m} </span> </h4>
//         <p> ${post.post} </p>
//       </div>`;
//   })


// }
