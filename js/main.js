function addTodo(){
    const input = document.getElementById("input");
    const text = input.value.trim("");

    if(text === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
    <span> ${text} </span>
     <button onclick = "deleteTodo(this)">
            <i class="fa-solid fa-trash"></i>
        </button>
    `;
    

    const ul = document.getElementById("userList"); 
    ul.appendChild(li);
    input.value = "";


}

function deleteTodo(button){
    const li = button.parentElement;
    li.remove();
}