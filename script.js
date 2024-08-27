const newTodoInput = document.getElementById('newTodo');
const addbtn = document.getElementById('addBtn');
const todolist = document.getElementById('todoList');
 

function addTodo(){
    const newTodoText = newTodoInput.value;
    newTodoInput.value='';

    const listItem =document.createElement('li');
    const completeCheckbox = document.createElement('input');
    const todoText = document.createElement('span');
    const deleteBtn = document.createElement('button');

    completeCheckbox.type = 'checkbox'

    listItem.appendChild(completeCheckbox)
    listItem.appendChild(todoText)
    listItem.appendChild(deleteBtn)


    todoText.textContent = newTodoText;
    deleteBtn.textContent ='Delete';
    todolist.appendChild(listItem);


    deleteBtn.addEventListener('click',function(){
        todolist.removeChild(listItem);
    }
    )
}
addbtn.addEventListener('click',addTodo)
