const postContainer = document.getElementById('posts-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

let limit = 5;
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

// Show loader & fetch more posts
function showLoading(){
  loading.classList.add('show');

  setTimeout(() => {
    loading.classList.remove('show');

    setTimeout(() => {
      page++;
      showPosts();
    }, 300);
  }, 1000);

}

// Add event listener on window
window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement; // Destructuring allows us to get the variables from an object.

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});
