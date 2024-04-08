const todoList = document.getElementById("todoList");
const newTodoInput = document.getElementById("newTodoInput");
const addTodoBtn = document.getElementById("addTodoBtn");

addTodoBtn.addEventListener("click", () => {
    const newTodoText = newToDoInput.value;

    if (newTodoText !== "") { // Corrected the condition here
        const newTodoItem = document.createElement("li");
        newTodoItem.innerText = newTodoText; // Corrected variable name

        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.innerText = "X";
        deleteTodoBtn.classList.add("delete-todo-btn");
        deleteTodoBtn.addEventListener("click", function () {
            newTodoItem.remove();
        });

        newTodoItem.appendChild(deleteTodoBtn);
        todoList.appendChild(newTodoItem); // Corrected variable name
        newTodoInput.value = "";
    }
});
