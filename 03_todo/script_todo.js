// 요소 선택 및 배열 선언
const todoList = document.getElementById('todo-list');
const todoForm = document.getElementById('todo-form');
let todoArray = [];

// displayTodos 함수
function displayTodos(){
  // console.log(todoArray.length);
  todoList.innerHTML = "";
  todoArray.forEach(function(todo, index) {
    const todoItem = document.createElement('li');
    const todoDelBtn = document.createElement('span');
    todoItem.innerText = todo.todoText;
    // todoDelBtn.type = 'checkbox';
    todoDelBtn.innerText = 'x';
    todoItem.classList.add(todo.todoIsFinished ? 'done' : 'yet')
    todoItem.appendChild(todoDelBtn);
    todoList.appendChild(todoItem);
    todoItem.addEventListener('click', function() {
      handleTodoItemClick(todo.todoId);
    })
    todoDelBtn.addEventListener('click', function() {
      handleTodoDelBtnClick(todo.todoId);
    })
  })
}

// handleTodoDelBtnClick 함수
function handleTodoDelBtnClick(clickedId){
  // alert('deleted!!!');
  todoArray = todoArray.filter((item) => item.todoId !== clickedId);
  displayTodos();
  saveTodos();
}

// handleTodoItemClick 함수
function handleTodoItemClick(clickedId){
  todoArray = todoArray.map((item) => item.todoId !== clickedId ? 
    item : { ...item, todoIsFinished: !item.todoIsFinished } 
  )
  displayTodos();
  saveTodos();
}

// saveTodos 함수
function saveTodos(){
  // console.log(todoArray.length);
  const todoString = JSON.stringify(todoArray);
  localStorage.setItem('myTodos', todoString);
}

// loadTodos 함수
function loadTodos(){
  const myTodos = localStorage.getItem("myTodos");
  todoArray = myTodos !== null ? JSON.parse(myTodos) : todoArray;
  displayTodos();
}

let count = 0;
// 할일 입력 후 제출하면 발생하는 이벤트 핸들링
todoForm.addEventListener('submit', function(e){
  e.preventDefault(); // 리다이렉팅 방지
  if(todoForm.todo.value.length === 0) {
    console.log('no input');
    return;
  };
  // console.log(this);
  const toBeAdded = {
    todoText: todoForm.todo.value,
    todoId: new Date().getTime(),
    todoIsFinished: false,
  }
  todoArray.push(toBeAdded);
  todoForm.todo.value = "";
  displayTodos();
  saveTodos();
})

loadTodos() // 시작할 때 한번만!