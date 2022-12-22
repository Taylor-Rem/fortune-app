let authSection = document.getElementById('auth-section');
let loginForm = document.getElementById('login-form');
let emailLogin = document.getElementById('email-login');
let passwordLogin = document.getElementById('password-login');
let signupForm = document.getElementById('signup-form');
let emailSignup = document.getElementById('email-signup');
let passwordSignup = document.getElementById('password-signup');
let firstNameSignup = document.getElementById('first-name-signup');
let lastNameSignup = document.getElementById('last-name-signup');

const baseUrl = 'http://localhost:4000';

const logIn = (event) => {
  event.preventDefault();
  let postBody = {
    email: emailLogin.value,
    password: passwordLogin.value,
  };
  axios
    .post(`${baseUrl}/login`, postBody)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
const signUp = (event) => {
  event.preventDefault();
  let postBody = {
    email: emailSignup.value,
    password: passwordSignup.value,
    firstName: firstNameSignup.value,
    lastName: lastNameSignup.value,
  };
  axios
    .post(`${baseUrl}/signup`, postBody)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

loginForm.addEventListener('submit', logIn);
signupForm.addEventListener('submit', signUp);
