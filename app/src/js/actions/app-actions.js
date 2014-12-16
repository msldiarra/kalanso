var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');

var AppActions = {
    addItem:function(student){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.ADD_STUDENT,
            student: student
        })
    }
}

module.exports = AppActions;