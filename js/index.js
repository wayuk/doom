(function() {

  var _form, _todoList;

  window.onload = function() {
    if (document.readyState === 'complete') {
      init();
    }
  }

  function init() {

    _form = document.getElementsByTagName('form')[0],
    _todoList  = document.getElementsByClassName('todo-list')[0];

    // Bind to submit event
    _form.addEventListener('submit', newTodo);

  }

  function deleteTodo(e) {

    e.preventDefault();
    e.currentTarget.parentElement.remove();

  }

  function newTodo(e) {

    e.preventDefault();

    var form      = e.currentTarget,
        todoInput = form.querySelector('input.todo-text'),
        todoText  = todoInput.value.trim();

    if (todoText === '') {
      return;
    }

    var todo = document.createElement('li');
        todo.innerHTML = '<input type="checkbox" name="todo" value="' + todoText + '"> ' + todoText + ' <button type="button" class="close-btn">x</button>'

    _todoList.appendChild(todo);

    // add Listeners
    var closeButton = todo.querySelector('.close-btn');
        closeButton.addEventListener('click', deleteTodo);

    todoInput.value = '';
    todoInput.focus();

  }

})();
