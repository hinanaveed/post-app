// Select the necessary elements
const postInput = document.getElementById('postInput');
const addPostBtn = document.getElementById('addPostBtn');
const postsContainer = document.getElementById('postsContainer');

// Add event listener to the "Add Post" button
addPostBtn.addEventListener('click', () => {
  const postContent = postInput.value.trim();

  if (postContent !== '') {
    // Create a new post element
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    // Add the post content
    postElement.innerHTML = `
      <p>${postContent}</p>
      <button class="deleteBtn">&times;</button>
    `;

    // Add event listener to the delete button
    postElement.querySelector('.deleteBtn').addEventListener('click', () => {
      postElement.remove();
    });

    // Append the post to the container
    postsContainer.appendChild(postElement);

    // Clear the input field
    postInput.value = '';
  }
});

