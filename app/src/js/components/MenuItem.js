/** @jsx React.DOM */

var React = require('react');

var MenuItem= React.createClass({

    render: function() {
        return (
            <nav className="" role="navigation">
                <div className="item">
                    <div><i className="fa fa-plus-square fa-lg action"></i> </div>
                    <div className="label">Nouvel étudiant</div>
                </div>
            </nav>
            );
    }
});

module.exports = MenuItem;