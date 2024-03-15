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

// const signin = (username_email, password) => {
//   const formdata = new FormData();
//   formdata.append("username_email", username_email);
//   formdata.append("password", password);

//   const requestOptions = {
//     method: "POST",
//     body: formdata,
//   };

//   fetch("http://localhost/todoWebsite/php/signin.php", requestOptions)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => console.error(error));
// };

// signin("rabih", "123456");

// const createTodo = async (formdata) => {
// const formdata = new FormData();
// // formdata.append("user_id", user_id);
// formdata.append("title", title);
// formdata.append("description", description);

// const requestOptions = {
//     body: formdata,
//     method: "POST",
// };

//     const result= await fetch("http://localhost/todoWebsite/php/create_todo.php", {
//         body: formdata,
//         method: "POST",
//     });
//       return await result.json();
//   };

// const test=new FormData();
// test.append("title","testtttttttt");
// test.append("description","twefkshdkhsk");
// createTodo(test).then((response)=>{
//     console.log(response);
// })

// const getUserId = () => {
//   const userId = localStorage.getItem("user_id");
//   if (userId) {
//     return parseInt(userId);
//   } else {
// console.error('User ID not found or invalid');
//     return null;
//   }
// };
// console.log(getUserId());
// // const user_id=getUserId();

// const formdata = new FormData();
// formdata.append("password", "123456");
// formdata.append("username_email", "rabih");

// const requestOptions = {
//   method: "GET",
// };

// fetch("http://localhost/todoWebsite/php/read_todo.php", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

// const readTodo = async () => {
//   try {
//     const result = await fetch(
//       "http://localhost/todoWebsite/php/read_todo.php",
//       {
//         method: "GET",
//       }
//     );
//     return await result.json();
//   } catch (error) {
//     console.log('errdkcnskjfnksor');
//   }
// };
// readTodo().then((response) => {
//   console.log(response);
// });
