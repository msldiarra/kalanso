/** @jsx React.DOM */

var React = require('react');


var StudentForm = React.createClass({

    registerStudent: function(e){

        e.preventDefault();

        var newStudent = {
            fullName : this.refs.fullName.getDOMNode().value,
            course : this.refs.course.getDOMNode().value,
            birthDate : this.refs.birthDate.getDOMNode().value,
            birthPlace : this.refs.birthPlace.getDOMNode().value,
            phoneNumber : this.refs.phoneNumber.getDOMNode().value,
            email : this.refs.email.getDOMNode().value
        }

        this.props.onNewStudent(newStudent);
        this.refs.studentForm.getDOMNode().reset();
    },

     getDefaultProps: function() {
         return {
             activeMenu : ""
         }
     },

     render: function() {

        var inlineStyles = {
            display: this.props.activeMenu === "NewStudent"? 'block':"none"
        }

	    return (
      	   <div className="component" style={inlineStyles}>
              <div className="margin-top-30">
                  <form id="student_form" ref="studentForm" >
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
                              <input type="text" ref="fullName" className="lg" placeholder="Nom complet" autofocus></input>
                          </div>
                      </div>
                      <div className="row margin-bottom-30">
                          <div className="">
                              <input type="text" ref="course" className="lg" placeholder="Cursus" ></input>
                          </div>
                      </div>
                      <div className="row margin-bottom-30">
                          <div className="">
                              <input type="text" ref="birthDate" className="lg" placeholder="Date de naissance" ></input>
                          </div>
                      </div>
                      <div className="row margin-bottom-30">
                          <div className="">
                              <input type="text" ref="birthPlace" className="lg" placeholder="Lieu de naissance" ></input>
                          </div>
                      </div>
                      <div className="row margin-bottom-30">
                          <div className="">
                              <input type="text" ref="phoneNumber" className="lg" placeholder="Téléphone" ></input>
                          </div>
                      </div>
                      <div className="row margin-bottom-30">
                          <div className="">
                              <input type="text" ref="email" className="lg" placeholder="Adresse éléctroniqe" ></input>
                          </div>
                      </div>

                      <div className="row margin-bottom-30">
                          <div className="">
                              <button type="button" onClick={this.registerStudent} >Enregitrer les informations</button>
                          </div>
                      </div>
                   </form>

             </div>

	       </div>
    	);
    }
});

module.exports = StudentForm;
