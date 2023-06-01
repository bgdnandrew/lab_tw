document.addEventListener("DOMContentLoaded", () => {
  fetchPosts();
});

function fetchPosts() {
  fetch("http://localhost:3000/posts")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to fetch posts");
      }
    })
    .then((posts) => {
      renderPosts(posts);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function renderPosts(posts) {
  const postsContainer = document.querySelector("#blog-posts");
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("article");
    postElement.innerHTML = `
      <h2><a href="blog-post.html?id=${post.id}">${post.title}</a></h2>
      <p>${post.content}</p>
    `;
    postsContainer.appendChild(postElement);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "s") {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.textContent = "Easter egg!";
    document.body.appendChild(modal);
    setTimeout(() => {
      modal.remove();
    }, 2000);
  }
});

  