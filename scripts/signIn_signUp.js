const signupBtn = document.getElementById("signupButton");
const nameInput = document.getElementById("name");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

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
