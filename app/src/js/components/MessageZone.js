/** @jsx React.DOM */

var React = require('react');

var MessageZone = React.createClass({

    render: function() {
	return (
        <div className="alert alert-success hidden" role="alert">Continuez. Tout se passe bien jusqu'ici.</div>
    	);
    }  
});

module.exports = MessageZone;
