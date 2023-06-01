document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");

  const form = document.querySelector("#edit-form");
  const titleInput = document.querySelector("#title");
  const contentInput = document.querySelector("#content");

  if (postId) {
    fetchPost(postId);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (postId) {
      editPost(postId, titleInput.value, contentInput.value);
    } else {
      createPost(titleInput.value, contentInput.value);
    }
  });

  document.querySelector("#delete-btn").addEventListener("click", () => {
    document.querySelector("#modal").style.display = "block";
  });

  document.querySelector("#confirm-delete-btn").addEventListener("click", () => {
    deletePost(postId);
  });

  document.querySelector("#cancel-delete-btn").addEventListener("click", () => {
    document.querySelector("#modal").style.display = "none";
  });
});

function fetchPost(postId) {
  fetch(`http://localhost:3000/posts/${postId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("bad response");
      }
      return response.json();
    })
    .then((post) => {
      document.querySelector("#title").value = post.title;
      document.querySelector("#content").value = post.content;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function editPost(postId, title, content) {
  fetch(`http://localhost:3000/posts/${postId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("response bad");
      }
      alert("post updatat cu succes");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function createPost(title, content) {
  fetch('http://localhost:3000/posts', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("response bad");
      }
      alert("post creat cu succes");
      window.location.href = "/admin-dash.html";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function deletePost(postId) {
  fetch(`http://localhost:3000/posts/${postId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("response bad");
      }
      alert("Post sters");
      window.location.href = "/admin-dash.html"; // redirect la admin
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
