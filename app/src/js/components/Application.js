/** @jsx React.DOM */

var React = require('react'),
    jQuery = require('jquery'),
    MenuItem = require('./MenuItem'),
    StudentForm = require('./StudentForm'),
    AppStore = require('../stores/app-store.js');

var Application = React.createClass({

    onNewStudent: function(newStudent){
        AppStore.saveSudent(newStudent);
    },

    getInitialState: function() {
        return {
            activeMenu : "NewStudent"
        }
    },

    render: function() {

	    return (
            <div className="container-fulid">
                <div className="col-lg-2 no-padding">
                    <div className="menu col-lg-10">
                        <div className="row logo">
                            <i className="fa fa-building fa-lg"></i> <span className="logo-text">WalanSoft</span>
                        </div>
                        <MenuItem />
                    </div>
                </div>
                <div className="content col-lg-10">
                    <div><StudentForm activeMenu={this.state.activeMenu} onNewStudent={this.onNewStudent}/></div>
                </div>
            </div>
	);
    }
});

module.exports = Application;
