/**
 * Day 5 - User Directory & Filter
 * Fetches user data from JSONPlaceholder API, renders details using
 * createElement/textContent, handles loading/success/error feedback,
 * and provides instant client-side case-insensitive filtering.
 */

// Stored array of loaded users
let users = [];

// DOM Element references
const loadButton = document.getElementById('load-users');
const filterInput = document.getElementById('filter-input');
const statusParagraph = document.getElementById('status');
const usersList = document.getElementById('users-list');

/**
 * Draws any array of users into the #users-list <ul> element.
 * Securely constructs the DOM using document.createElement and textContent.
 *
 * @param {Array<Object>} list - The array of user objects to render.
 */
function renderUsers(list) {
  // Clear any existing list items
  usersList.textContent = '';

  // Handle empty list / no matching users
  if (!list || list.length === 0) {
    const noMatchItem = document.createElement('li');
    noMatchItem.className = 'no-match-item';
    noMatchItem.textContent = 'No users match your filter.';
    usersList.appendChild(noMatchItem);
    return;
  }

  // Render each user card
  list.forEach((user) => {
    const card = document.createElement('li');
    card.className = 'user-card';

    // Name
    const nameHeading = document.createElement('h3');
    nameHeading.className = 'user-name';
    nameHeading.textContent = user.name || 'Unnamed User';
    card.appendChild(nameHeading);

    // Email
    const emailParagraph = document.createElement('p');
    emailParagraph.className = 'user-detail user-email';
    const emailLabel = document.createElement('span');
    emailLabel.className = 'detail-label';
    emailLabel.textContent = 'Email: ';
    const emailValue = document.createElement('span');
    emailValue.textContent = user.email || 'N/A';
    emailParagraph.appendChild(emailLabel);
    emailParagraph.appendChild(emailValue);
    card.appendChild(emailParagraph);

    // City (from user.address.city)
    const cityParagraph = document.createElement('p');
    cityParagraph.className = 'user-detail user-city';
    const cityLabel = document.createElement('span');
    cityLabel.className = 'detail-label';
    cityLabel.textContent = 'City: ';
    const cityValue = document.createElement('span');
    cityValue.textContent = (user.address && user.address.city) ? user.address.city : 'N/A';
    cityParagraph.appendChild(cityLabel);
    cityParagraph.appendChild(cityValue);
    card.appendChild(cityParagraph);

    // Company name (from user.company.name)
    const companyParagraph = document.createElement('p');
    companyParagraph.className = 'user-detail user-company';
    const companyLabel = document.createElement('span');
    companyLabel.className = 'detail-label';
    companyLabel.textContent = 'Company: ';
    const companyValue = document.createElement('span');
    companyValue.textContent = (user.company && user.company.name) ? user.company.name : 'N/A';
    companyParagraph.appendChild(companyLabel);
    companyParagraph.appendChild(companyValue);
    card.appendChild(companyParagraph);

    // Append completed user card to the list
    usersList.appendChild(card);
  });
}

/**
 * Asynchronously fetches user data from JSONPlaceholder API.
 * Uses fetch, async/await, and try/catch/finally to manage loading state,
 * error handling, and button disabled states.
 */
async function loadUsers() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  try {
    // 1. Loading state: disable button, update status, clear previous list
    loadButton.disabled = true;
    statusParagraph.className = 'status-loading';
    statusParagraph.textContent = 'Loading users...';
    usersList.textContent = '';

    // 2. Fetch data
    const response = await fetch(apiUrl);

    // 3. Check response.ok
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // 4. Parse JSON and store users
    const data = await response.json();
    users = Array.isArray(data) ? data : [];

    // 5. Success state
    statusParagraph.className = 'status-success';
    statusParagraph.textContent = `Successfully loaded ${users.length} users.`;

    // 6. Render users (respecting any existing text in the filter input)
    const currentQuery = filterInput.value.trim().toLowerCase();
    if (currentQuery) {
      const filtered = users.filter((user) =>
        user.name && user.name.toLowerCase().includes(currentQuery)
      );
      renderUsers(filtered);
    } else {
      renderUsers(users);
    }
  } catch (error) {
    // 7. Error state
    statusParagraph.className = 'status-error';
    statusParagraph.textContent = `Error: ${error.message}`;
    usersList.textContent = '';
  } finally {
    // 8. Re-enable button regardless of outcome
    loadButton.disabled = false;
  }
}

// Attach click event listener to load button
loadButton.addEventListener('click', loadUsers);

// Attach input event listener to filter box for instant, client-side search
filterInput.addEventListener('input', (event) => {
  const searchTerm = event.target.value.trim().toLowerCase();

  // If users have not been loaded yet, show message if typing
  if (users.length === 0) {
    if (searchTerm.length > 0) {
      renderUsers([]);
    } else {
      usersList.textContent = '';
    }
    return;
  }

  // Filter stored array by name (case-insensitive) without making a new network request
  const filteredUsers = users.filter((user) =>
    user.name && user.name.toLowerCase().includes(searchTerm)
  );

  renderUsers(filteredUsers);
});
