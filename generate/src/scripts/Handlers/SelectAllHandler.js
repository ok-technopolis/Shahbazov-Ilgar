/**
 * Created by ilgar on 22.06.17.
 */
module.exports = function() {
    var isClicked = false;
    document.addEventListener("click", function () {
        if (event.target.classList.contains("s-todos-select-all")) {
            var items = document.getElementsByClassName("todo-item");
            var checkboxes = document.getElementsByClassName("input-checkbox_target");
            if(isClicked===false) {
                for (var i=0; i<items.length; i++) {
                    checkboxes[i].checked=true;
                    items[i].classList.add("__ready");
                }
                isClicked=true;
            } else {
                for (var i=0; i<items.length; i++) {
                    checkboxes[i].checked=false;
                    items[i].classList.remove("__ready");
                }
                isClicked=false;
            }
        }

    })
}