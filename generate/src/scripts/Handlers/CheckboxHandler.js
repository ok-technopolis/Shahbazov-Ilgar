/**
 * Created by ilgar on 22.06.17.
 */
module.exports = function() {
    document.addEventListener("click", function () {
        var currentCheckbox = event.target;
        var currentItem = currentCheckbox.parentNode.parentNode;
        if(currentCheckbox.classList.contains("input-checkbox_target")) {
            if (currentItem.classList.contains("__ready")) {
                currentItem.classList.remove("__ready");
            } else {
                currentItem.classList.add("__ready");
            }
        }
    })
}