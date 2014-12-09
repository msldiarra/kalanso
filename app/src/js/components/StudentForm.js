/** @jsx React.DOM */

var React = require('react');

var StudentForm = React.createClass({

    render: function() {
	return (
      	   <div className="">
              <div className="margin-top-30">
                  <form id="student_form" className="form-horizontal">
                      <div className="row margin-bottom-20">
                          <div className="col-xs-6">
                              <span className="form-title">Nouvel étudiant</span>
                          </div>
                      </div>
                      <div className="row margin-bottom-30">
                          <div className="col-xs-6">
                              <input type="text" className="form-control" placeholder="Prénom" autofocus></input>
                          </div>
                          <div className="col-xs-6">
                              <input type="text" className="form-control" placeholder="Nom de famille"></input>
                          </div>
                      </div>

                      <div className="row margin-bottom-30">
                          <div className="col-xs-6">
                              <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-calendar"></i></div>
                                <input type="text" className="form-control" placeholder="Date de naissance"></input>
                              </div>
                          </div>
                          <div className="col-xs-6">
                              <div className="input-group">
                                  <div className="input-group-addon"><i className="fa fa-map-marker"></i></div>
                                  <input type="text" className="form-control" placeholder="Lieu de naissance"></input>
                              </div>
                          </div>
                      </div>

                      <button type="button" className="btn btn-primary">  ENREGISTRER  </button>

                   </form>

             </div>

	       </div>
    	);
    }
});

module.exports = StudentForm;
