// Exemple de operatii pe DOM

// Exemplu: CREATE new blog post
function createBlogPost(title, content) {
    const post = document.createElement('article');
    const postTitle = document.createElement('h2');
    const postContent = document.createElement('p');
  
    postTitle.textContent = title;
    postContent.textContent = content;
  
    post.appendChild(postTitle);
    post.appendChild(postContent);
  
    return post;
  }
  
  // Event listeners
  document.addEventListener('DOMContentLoaded', () => {
    // TBD: event listeners here:
    // - Click events on buttons
    // - Keyboard events for shortcuts
  });
  
  // AJAX operations
  // Use the Fetch API for GET, POST, PUT, DELETE requests
  // Exemplu: GET all blog posts
  async function getBlogPosts() {
    try {
      const response = await fetch('http://localhost:3000/posts');
      const posts = await response.json();
      return posts;
    } catch (error) {
      console.error('Error. Fetching blog posts esuat:', error);
    }
  }

// Display blog posts
function displayBlogPosts(posts) {
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = '';
  
    posts.forEach(post => {
      const postElement = createBlogPost(post.title, post.content);
      blogPostsContainer.appendChild(postElement);
    });
  }

// function renderPosts(posts) {
//     const postsContainer = document.querySelector('blog-posts');
//     postsContainer.innerHTML = "";
  
//     posts.forEach((post) => {
//       const postElement = document.createElement("div");
//       postElement.classList.add("post");
//       postElement.innerHTML = `
//         <h2><a href="blog-post.html?id=${post.id}">${post.title}</a></h2>
//         <p>${post.body}</p>
//       `;
//       postsContainer.appendChild(postElement);
//     });
//   }
  
  // getBlogPosts() to display them on the page
  document.addEventListener('DOMContentLoaded', async () => {
    const posts = await getBlogPosts();
    displayBlogPosts(posts);
    // renderPosts(posts);
  });
  
  