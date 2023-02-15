// signin form validation and submission
const signinForm = document.querySelector('#signin-form');

signinForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = signinForm.email.value;
  const password = signinForm.password.value;

  // client-side validation
  if (!email || !password) {
    return alert('Please fill in all fields');
  }

  // AJAX code to send user input to the server and check if the user exists or not
  fetch('/api/signin', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      if (response.status === 200) {
        // on successful signin, set a session cookie and redirect the user to the homepage
        document.cookie = `user=${email}`;
        window.location.href = '/';
      } else {
        return response.json();
      }
    })
    .then((data) => alert(data.message))
    .catch((error) => console.error(error));
});

// signup form validation and submission
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = signupForm.name.value;
  const email = signupForm.email.value;
  const password = signupForm.password.value;

  // client-side validation
  if (!name || !email || !password) {
    return alert('Please fill in all fields');
  }

  // AJAX code to send user input to the server and check if the user exists or not
  fetch('/api/signup', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      if (response.status === 200) {
        // on successful signup, set a session cookie and redirect the user to the homepage
        document.cookie = `user=${email}`;
        window.location.href = '/';
      } else {
        return response.json();
      }
    })
    .then((data) => alert(data.message))
    .catch((error) => console.error(error));
});
