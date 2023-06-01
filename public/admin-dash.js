document.getElementById('newPostButton').addEventListener('click', () => {
  location.href = `/blogpost-edit.html`;
});

fetch('/posts')
  .then(res => res.json())
  .then(posts => {
    const postsDiv = document.getElementById('posts');
    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.textContent = post.title;

      const trashIcon = document.createElement('img');
      trashIcon.src = "/trash2.png";
      trashIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        const confirmation = confirm('Vrei sa stergi acest post?');
        if (confirmation) {
          fetch(`/posts/${post.id}`, { method: 'DELETE' })
            .then(() => postDiv.remove());
        }
      });

      postDiv.appendChild(trashIcon);
      postsDiv.appendChild(postDiv);

      postDiv.addEventListener('click', () => {
        location.href = `/blogpost-edit.html?id=${post.id}`;
      });
    });
  });
