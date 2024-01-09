function validateForm(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
  
    // Simple validation: Check if fields are empty
    if (username === '') {
      usernameError.textContent = 'Please enter a username';
    } else {
      usernameError.textContent = '';
    }
  
    if (password === '') {
      passwordError.textContent = 'Please enter a password';
    } else {
      passwordError.textContent = '';
    }
  
    // Here you'd typically send the data to the server for further processing
    // For example, you'd use AJAX or fetch() to send the login data to a server endpoint for authentication and hashing
    // Password hashing should be done on the server side for security reasons
  }