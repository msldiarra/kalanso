/** @jsx React.DOM */

var React = require('react'),
    MenuItem = require('./MenuItem'),
    StudentForm = require('./StudentForm');

var Application = React.createClass({

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
                    <div className="" role="main">
                        <StudentForm />
                    </div>
                </div>
            </div>
	);
    }
});

module.exports = Application;
