/** @jsx React.DOM */

var React = require('react'),
    NavigationBar = require('./NavigationBar'),
    ComponentCard = require('./ComponentCard'),
    MessageZone = require('./MessageZone'),
    StudentForm = require('./StudentForm');

var Students = React.createClass({

    render: function() {
	return (
            <div className="">
                <NavigationBar />
                <div className="container-fluid">
                    <div className="components col-md-4">
                        <ComponentCard />
                        <ComponentCard />
                        <ComponentCard />
                    </div>
                    <div className="col-md-8 content">
                        <div className="" role="main">
                            <MessageZone />
                            <StudentForm />
                        </div>
                    </div>
                </div>
            </div>
	);
    }
});

module.exports = Students;
