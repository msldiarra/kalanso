var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = "change";


function _addStudent(student){

    console.log('student', student);

    $.ajax({
        url: 'http://localhost:8080/student',
        type: 'POST',
        crossDomain: true,
        dataType: "jsonP",
        jsonpCallback: 'jsonPCallback',
        data: "fullName="+student.fullName+"&birthDate="+student.birthDate,
        success: function(data) {
            console.log("adding student :" + student.fullName)
            console.log("received : "+ data + " from server")
        }
    });




}


var AppStore = merge(EventEmitter.prototype, {

    emitChange:function(){
        this.emit(CHANGE_EVENT)
    },

    addChangeListener:function(callback){
        this.on(CHANGE_EVENT, callback)
    },

    removeChangeListener:function(callback){
        this.removeListener(CHANGE_EVENT, callback)
    },

    saveSudent: function (student){
        _addStudent(student);
    },

    dispatcherIndex:AppDispatcher.register(function(payload){
        var action = payload.action; // this is our action from handleViewAction

        switch(action.actionType){

            case AppConstants.ADD_STUDENT:
                _addStudent(payload.action.student);
                break;
        }

        AppStore.emitChange();

        return true;
    })
})

module.exports = AppStore;