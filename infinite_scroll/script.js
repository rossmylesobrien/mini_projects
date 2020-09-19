const postContainer = document.getElementById('posts-container');
const loading = document.getElementById('loading');
const filter = document.getElementById('filter');

let limit = 3;
let page = 1;

// Fetch the posts from the API
async function getPosts(){
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`); // Include the limit and page variable

  const data = await response.json();
  return data; // This is a promise as well
}

// Show posts in DOM
async function showPosts(){
  const posts = await getPosts();

  posts.forEach(post => {
    const postEl = document.createElement('div');

    postEl.classList.add('post');
    postEl.innerHTML = `
      <div class="number">${post.id}</div>
      <div class="post-info">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
      </div>
    `;
    postContainer.appendChild(postEl);
  })
}


// Show initial posts
showPosts();
