/**
 * Created by ilgar on 22.06.17.
 */
module.exports = function() {
    document.addEventListener("click", function () {
        if (event.target.className==="todos-actions-bar_clear-completed") {
            var elements = document.getElementsByClassName("todo-item");
            var length = elements.length;
            for (var i = 0; i < length;) {
                if (elements[i].classList.contains("__ready")) {
                    showCounter();
                    elements[i].parentNode.removeChild(elements[i]);
                } else {
                    i++;
                }
            }
        }

        function decrementCountTodos() {
            var element = document.getElementsByClassName("todos-actions-bar_counter");
            var countTodos = element[0].innerText.match(/[0-9]+/);
            return --countTodos;
        }

        //Отобразить количество задач
        function showCounter() {
            var element = document.getElementsByClassName("todos-actions-bar_counter");
            var countTodos = decrementCountTodos();
            if (countTodos === 1) {
                element[0].innerText = countTodos + " задача";
            } else if (countTodos >= 1 && countTodos <= 4) {
                element[0].innerText = countTodos + " задачи"
            } else {
                element[0].innerText = countTodos + " задач";
            }
        }
    });
};