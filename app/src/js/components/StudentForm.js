/** @jsx React.DOM */

var React = require('react');

var StudentForm = React.createClass({

    render: function() {
	return (
      	   <div className="component">
              <div className="margin-top-30">
                  <form id="student_form" className="">
                      <div className="row margin-bottom-30">
                          <div className="">
                              <span className="title">Nouvel étudiant</span>
                          </div>
                      </div>
                      <div className="row margin-bottom-30">
                          <div id="photo" className="photo">
                              <i className="fa fa-camera-retro"></i>
                          </div>
                      </div>
                      <div className="row margin-bottom-30">
                          <div className="">
                              <input type="text" className="lg" placeholder="Nom complet" autofocus></input>
                          </div>
                      </div>
                      <div className="row margin-bottom-30">
                          <div className="">
                              <input type="text" className="lg" placeholder="Cursus" ></input>
                          </div>
                      </div>
                      <div className="row margin-bottom-30">
                          <div className="">
                              <input type="text" className="lg" placeholder="Date de naissance" ></input>
                          </div>
                      </div>
                      <div className="row margin-bottom-30">
                          <div className="">
                              <input type="text" className="lg" placeholder="Lieu de naissance" ></input>
                          </div>
                      </div>
                      <div className="row margin-bottom-30">
                          <div className="">
                              <input type="text" className="lg" placeholder="Téléphone" ></input>
                          </div>
                      </div>
                      <div className="row margin-bottom-30">
                          <div className="">
                              <input type="text" className="lg" placeholder="Adresse éléctroniqe" ></input>
                          </div>
                      </div>

                      <div className="row margin-bottom-30">
                          <div className="">
                              <button type="button" className="">Enregitrer les informations</button>
                          </div>
                      </div>
                   </form>

             </div>

	       </div>
    	);
    }
});

module.exports = StudentForm;
