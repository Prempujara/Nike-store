// Signup Form Validation
document.getElementById('signupForm')?.addEventListener('submit', function (e) {
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;
    const errorDiv = document.getElementById('error');

    if (password !== confirmPassword) {
        e.preventDefault();
        errorDiv.textContent = 'Passwords do not match!';
    } else {
        errorDiv.textContent = '';
    }
});

// Login Form Validation
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const errorDiv = document.getElementById('error');

    if (!username || !password) {
        e.preventDefault();
        errorDiv.textContent = 'Please fill in all fields!';
    } else {
        errorDiv.textContent = '';
    }
});