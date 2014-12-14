/** @jsx React.DOM */

var React = require('react');

var MenuItem= React.createClass({

    render: function() {
        return (
            <nav className="row" role="navigation">
                <div className="row menu-item">
                    <div className="col-md-4 action"><i className="fa fa-graduation-cap fa-lg"></i> </div>
                    <div id="student" className="col-md-8 menu-label">Nouvel étudiant</div>
                </div>
            </nav>
            );
    }
});

module.exports = MenuItem;