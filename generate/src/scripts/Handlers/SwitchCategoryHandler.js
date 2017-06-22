/**
 * Created by ilgar on 22.06.17.
 */
module.exports = function() {
    document.addEventListener("click", function () {
        var current = event.target;
        if (current.classList.contains("all")) {
            allItems(current);
        } else if (current.classList.contains("ready")) {
            readyItems(current);
        } else if(current.classList.contains("unready")) {
            unreadyItems(current);
        }
    });

    var allItems = function (item) {
        changeOnActive(item);
        showAll();
    };

    var readyItems = function (item) {
        changeOnActive(item);
        hideUnready();
    };

    var unreadyItems = function (item) {
        changeOnActive(item);
        hideReady();
    };

    var showAll = function() {
        var elements = document.getElementsByClassName("todo-item");
        for (var i=0; i<elements.length; i++) {
            elements[i].classList.remove("__hide");
        }
    };

    var hideUnready = function() {
        var elements = document.getElementsByClassName("todo-item");
        for (var i=0; i<elements.length; i++) {
            if (elements[i].classList.contains("__ready")) {
                elements[i].classList.add("__hide");
            } else {
                elements[i].classList.remove("__hide");
            }
        }
    };

    var hideReady = function() {
        var elements = document.getElementsByClassName("todo-item");
        for (var i=0; i<elements.length; i++) {
            if (!elements[i].classList.contains("__ready")) {
                elements[i].classList.add("__hide");
            } else {
                elements[i].classList.remove("__hide");
            }
        }
    };

    var changeOnActive = function (item) {
        var elements = document.getElementsByClassName("filter");
        for (var i=0; i<elements.length; i++){
            elements[i].classList.remove("__active");
        }
        item.classList.add("__active");
    }
}