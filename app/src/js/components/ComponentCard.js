/** @jsx React.DOM */

var React = require('react');

var ComponentCard = React.createClass({

    render: function() {
        return (
            <div className="card col-md-4">
                <div className="top"></div>
                <div className="card-name">
                    Nouvel étudiant
                </div>
            </div>
            );
    }
});

module.exports = ComponentCard;
