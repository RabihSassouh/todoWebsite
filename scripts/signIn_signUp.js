const signupBtn = document.getElementById("signupButton");
const signinBtn=document.getElementById("signinButton");
const nameInput = document.getElementById("name");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const usernameEmail = document.getElementById("username_email");
const passwordSignIn = document.getElementById("passwordSignIn");
const popup_signup=document.getElementById("popup_signup");
const cont=document.getElementById("container");

const signup = (nameValue, usernameValue, emailValue, passwordValue) => {
  const formdata = new FormData();
  formdata.append("name", nameValue);
  formdata.append("username", usernameValue);
  formdata.append("email", emailValue);
  formdata.append("password", passwordValue);

  const requestOptions = {
    method: "POST",
    body: formdata,
  };

  fetch("http://localhost/todoWebsite/php/signup.php", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.status === "success") {
        window.location.href = "../index.html";
      } else {
        console.error("Signup failed:", result.message);
      }
    })
    .catch((error) => console.error(error));
};

const handleSignup = (event) => {
  event.preventDefault();
  const nameValue = nameInput.value;
  const usernameValue = usernameInput.value;
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  signup(nameValue, usernameValue, emailValue, passwordValue);
};

signupBtn.addEventListener("click", handleSignup);

const signin = (username_emailValue, passwordSignInValue) => {
  const formdata = new FormData();
  formdata.append("username_email", username_emailValue);
  formdata.append("password", passwordSignInValue);

  const requestOptions = {
    method: "POST",
    body: formdata,
  };

  fetch("http://localhost/todoWebsite/php/signin.php", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.status === "logged in") {
        window.location.href = "../index.html";
      } else {
        console.error("Signin failed:", result.message);
      }
    })
    .catch((error) => console.error(error));
};


const handleSignin = (event) => {
    event.preventDefault();
    const usernameEmailValue = usernameEmail.value;
    const passwordSignInValue = passwordSignIn.value;
    signin(usernameEmailValue, passwordSignInValue); 
};

  
  signinBtn.addEventListener("click", handleSignin);
  
  
  popup_signup.addEventListener("click",(cont)=>{
     
    cont=document.querySelector.classList.remove("hidden");
  });