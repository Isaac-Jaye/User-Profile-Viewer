document.addEventListener('DOMContentLoaded', () => {
  const userList = document.getElementById('user-list');
  const userDetails = document.getElementById('user-details');

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'user-card';
        card.textContent = user.name;
        card.addEventListener('click', () => showUserDetails(user));
        userList.appendChild(card);
      });
    });

  function showUserDetails(user) {
    userDetails.innerHTML = `
      <h2>${user.name}</h2>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>Website:</strong> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
      <p><strong>Company:</strong> ${user.company.name}</p>
      <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
    `;
  }
});