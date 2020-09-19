const postContainer = docuemnt.getElementById('posts-container');
const loading = docuemnt.getElementById('loading');
const filter = docuemnt.getElementById('filter');

let limit = 3;
let page = 1;

async function getPosts(){
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`); // Include the limit and page variable

  const data = await response.json();
  return data; // This is a promise as well
}
