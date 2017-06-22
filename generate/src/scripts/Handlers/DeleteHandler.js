/**
 * Created by ilgar on 22.06.17.
 */
module.exports = function() {
    document.addEventListener("click", function () {
        var currentItem = event.target;
        if (currentItem.classList.contains("remove_item")) {
            currentItem.parentNode.parentNode.outerHTML="";
            showCounter();
        }

        function decrementCountTodos() {
            var element = document.getElementsByClassName("todos-actions-bar_counter");
            var countTodos = element[0].innerText.match(/[0-9]+/);
            return --countTodos;
        }

        //Отобразить количество задач
        function showCounter() {
            var element = document.getElementsByClassName("todos-actions-bar_counter");
            var counter = decrementCountTodos();
            if (counter === 1) {
                element[0].innerText = counter + " задача";
            } else if (counter >= 1 && counter <= 4) {
                element[0].innerText = counter + " задачи"
            } else {
                element[0].innerText = counter + " задач";
            }
        }
    });
};