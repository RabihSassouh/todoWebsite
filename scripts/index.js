// const signup= (name, username, email, password)=> {

// const formdata = new FormData();
// formdata.append("name", name);
// formdata.append("username", username);
// formdata.append("email", email);
// formdata.append("password", password);

// const requestOptions = {
//   method: "POST",
//   body: formdata,
// };


// fetch("http://localhost/todoWebsite/php/signup.php", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));
// }

// signup("rabihh","rabihh","rabihh@gami","123456")


const signin= (username_email,password)=>{
const formdata = new FormData();
formdata.append("username_email", username_email);
// formdata.append("email", email);
formdata.append("password", password);

const requestOptions = {
  method: "POST",
  body: formdata,
};

fetch("http://localhost/todoWebsite/php/signin.php", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}
signin("rabih6","123456");