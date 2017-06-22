/**
 * Created by ilgar on 22.06.17.
 */
module.exports = function() {
    var input = document.getElementsByClassName("todo-add_input")[0];
    input.addEventListener("keydown", function (event) {
        if (event.keyCode===13) {
            todoOn();
            todoItem(input.value);
            clearInputField();
        }
    });

    //Отобразить Action-bar
    var todoOn = function() {
        var main = document.getElementsByClassName("todos-main")[0]     ;
        main.classList.add("__has-todos");
    };

    //Очистить поле ввода
    var clearInputField = function () {
        input.value="";
    };

    //Создать todoItem
    var todoItem = function(value) {
        var todoList = document.getElementsByClassName("todos-list")[0];
        var todoItem = document.createElement("div");
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = "<div class='input-checkbox'> <input type='checkbox' class='input-checkbox_target' aria-label='Пометить как невыполненное'> <div class='input-checkbox_visual'> <div class='input-checkbox_visual_icon'></div> </div> </div> <div class='action todo-item_remove-action'> <div class='action_visual'></div> <button class='action_target remove_item' aria-label='Удалить todo'></button> </div> <div class='todo-item_text-w'> <div class='todo-item_text' contenteditable='true'>"+value+"</div> </div>";
        todoList.appendChild(todoItem);
        showCounter();
    };

    function incrementCountTodos() {
        var element = document.getElementsByClassName("todos-actions-bar_counter");
        console.log(element[0]);
        var countTodos = element[0].innerText.match(/[0-9]+/);
        return ++countTodos;
    }

    //Отобразить количество задач
    function showCounter() {
        var element = document.getElementsByClassName("todos-actions-bar_counter");
        var countTodos = incrementCountTodos();
        if (countTodos === 1) {
            element[0].innerText = countTodos + " задача";
        } else if (countTodos >= 1 && countTodos <= 4) {
            element[0].innerText = countTodos + " задачи"
        } else {
            element[0].innerText = countTodos + " задач";
        }
    }
};