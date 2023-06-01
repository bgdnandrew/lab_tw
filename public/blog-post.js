document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");
  
    fetchPost(postId);
  });
  
  function fetchPost(postId) {
    fetch("http://localhost:3000/posts/" + postId)
      .then((response) => {
        if (response.ok) {
          console.log(postId);
          console.log(response);
          return response.json();
        } else {
          throw new Error("Eroare. Failed fetch.");
        }
      })
      .then((post) => {
        renderPost(post);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  
  function renderPost(post) {
    const postContainer = document.querySelector("#post");
  
    postContainer.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
    `;
  }
  