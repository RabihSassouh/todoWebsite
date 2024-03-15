
// // Function to add a new todo
// function addTodo() {
//     const todoInput = document.getElementById("todoInput");
//     const todoText = todoInput.value.trim();
//     if (todoText !== "") {
//         const todoList = document.getElementById("todoList");
//         const newTodo = document.createElement("li");
//         newTodo.textContent = todoText;

//         // Create buttons for editing, deleting, and marking as done
//         const editButton = document.createElement("button");
//         editButton.textContent = "Edit";
//         editButton.addEventListener("click", function() {
//             const newText = prompt("Edit todo:", todoText);
//             if (newText !== null && newText.trim() !== "") {
//                 newTodo.textContent = newText.trim();
//             }
//         });

//         const deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";
//         deleteButton.addEventListener("click", function() {
//             todoList.removeChild(newTodo);
//         });

//         const doneButton = document.createElement("button");
//         doneButton.textContent = "Done";
//         doneButton.addEventListener("click", function() {
//             newTodo.classList.toggle("completed");
//         });

//         // Append buttons to the todo item
//         newTodo.appendChild(editButton);
//         newTodo.appendChild(deleteButton);
//         newTodo.appendChild(doneButton);
        
//         todoList.appendChild(newTodo);
//         todoInput.value = "";
//     }
// }

// // Add event listener for the "Add" button
// const addButton = document.querySelector("button");
// addButton.addEventListener("click", addTodo);



const createTodo = async (formdata) => {
const formdata = new FormData();
// formdata.append("user_id", user_id);
formdata.append("title", title);
formdata.append("description", description);

const requestOptions = {
    body: formdata,
    method: "POST",
};

    const result= await fetch("http://localhost/todoWebsite/php/create_todo.php", {
        body: formdata,
        method: "POST",
    });
      return await result.json();
  };

const test=new FormData();
test.append("title","testtttttttt");
test.append("description","twefkshdkhsk");
createTodo(test).then((response)=>{
    console.log(response);
})

const getUserId = () => {
  const userId = localStorage.getItem("user_id");
  if (userId) {
    return parseInt(userId);
  } else {
console.error('User ID not found or invalid');
    return null;
  }
};
console.log(getUserId());
// const user_id=getUserId();

const formdata = new FormData();
formdata.append("password", "123456");
formdata.append("username_email", "rabih");

const requestOptions = {
  method: "GET",
};

fetch("http://localhost/todoWebsite/php/read_todo.php", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

const readTodo = async () => {
  try {
    const result = await fetch(
      "http://localhost/todoWebsite/php/read_todo.php",
      {
        method: "GET",
      }
    );
    return await result.json();
  } catch (error) {
    console.log('errdkcnskjfnksor');
  }
};
readTodo().then((response) => {
  console.log(response);
});
