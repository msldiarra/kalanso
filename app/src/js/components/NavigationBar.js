/** @jsx React.DOM */

var React = require('react');

var NavigationBar= React.createClass({

    render: function() {
        return (
            <nav className="navbar navbar-inverse navbar-static-top" role="navigation">
                <div className="">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#"><i className="fa fa-building logo"></i></a>
                    </div>
                </div>
            </nav>
            );
    }
});

module.exports = NavigationBar;