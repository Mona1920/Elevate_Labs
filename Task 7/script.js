// URL of the public API
const apiUrl = "https://jsonplaceholder.typicode.com/users";

// Variable to save the fetched data
let usersData = [];

// Function to fetch data from API
async function fetchUsers() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        usersData = await response.json();  // Save the data in usersData variable
        displayUsers(usersData);
    } catch (error) {
        console.error('Error fetching users:', error);
        document.getElementById('users').innerText = 'Failed to load users.';
    }
}

// Function to display the users in the page
function displayUsers(users) {
    const usersDiv = document.getElementById('users');
    usersDiv.innerHTML = ""; // Clear previous content

    users.forEach(user => {
        const userElement = document.createElement('p');
        userElement.textContent = `${user.name} (${user.email})`;
        usersDiv.appendChild(userElement);
    });
}

// Run fetchUsers on page load
fetchUsers();
