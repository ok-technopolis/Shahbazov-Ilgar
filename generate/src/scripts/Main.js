'use strict';


let inputHandler = require('./Handlers/InputHandler');
let deleteHandler = require('./Handlers/DeleteHandler');
let checkboxHandler = require('./Handlers/CheckboxHandler');
let selectAllHandler = require('./Handlers/SelectAllHandler');
let switchCategoryHandler = require('./Handlers/SwitchCategoryHandler');
let deleteDoneHandler = require('./Handlers/DeleteDoneHandler');

inputHandler();
deleteHandler();
checkboxHandler();
selectAllHandler();
switchCategoryHandler();
deleteDoneHandler();

