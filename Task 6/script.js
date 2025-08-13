document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Stop form submission

  // Clear previous errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';

  // Get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let isValid = true;

  // Name validation (not empty)
  if (name === '') {
    document.getElementById('nameError').textContent = 'Please enter your name.';
    isValid = false;
  }

  // Email validation (simple regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    document.getElementById('emailError').textContent = 'Please enter your email.';
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email.';
    isValid = false;
  }

  // Message validation (not empty)
  if (message === '') {
    document.getElementById('messageError').textContent = 'Please enter your message.';
    isValid = false;
  }

  if (isValid) {
    alert('Thank you for contacting us, ' + name + '!');
    this.reset(); // Clear the form
  }
});
