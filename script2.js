// User storage (this should ideally be on a backend database)
const users = {};

// Show Sign Up Form
document.getElementById('showSignUp').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
});

// Show Login Form
document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
});

// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the login form
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Check if the user exists
    if (users[username] && users[username].password === password) {
        document.getElementById('loginMessage').textContent = 'Login successful!';
        document.getElementById('loginMessage').style.color = 'green';
        window.location.href = 'index.html';
        // Redirect to another page or perform other actions
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid username or password.';
    }
});

// Handle Sign Up Form Submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the sign-up form
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Check if the username already exists
    if (users[username]) {
        document.getElementById('signupMessage').textContent = 'Username already exists. Please choose another.';
    } else {
        // Store the user data
        users[username] = { email: email, password: password };
        document.getElementById('signupMessage').textContent = 'Sign up successful!';
        document.getElementById('signupMessage').style.color = 'green';
        // Clear the sign-up form
        document.getElementById('signupForm').reset();
    }
});
