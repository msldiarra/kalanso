/** @jsx React.DOM */

var React = require('react'),
    MenuItem = require('./MenuItem'),
    MessageZone = require('./MessageZone'),
    StudentForm = require('./StudentForm');

var Students = React.createClass({

    render: function() {
	    return (
            <div className="layout">
                <div className="menu">
                    <div className="logo">
                        <i className="fa fa-building fa-lg"></i> <span className="logo-text">KALANSO</span>
                    </div>
                    <MenuItem />
                </div>
                <div className="content">
                    <div className="" role="main">

                    </div>
                </div>
            </div>
	);
    }
});

module.exports = Students;
