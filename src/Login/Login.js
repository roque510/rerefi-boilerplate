import React    from "react";
import template from "./Login.jsx";

import * as firebase from "firebase";

class Login extends React.Component {



constructor(props) {
    super(props);
    this.state = { 
      name: "",
      password: "",
      email: "",
      auth: firebase.auth(),
      isActive: false

    };

    this.userLogin = this.userLogin.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);

  }



  register(e){

    e.preventDefault();

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((Luser) => {
        // [END createwithemail]
        // callSomeFunction(); Optional
        var user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: this.state.name
        }).then(function() {
            console.log("YES");
        }, function(error) {
            console.log("wat?");
        });        
    }, function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            console.error(error);
        }
        // [END_EXCLUDE]
    });
  }

  toggleClass(e){
    const container = document.querySelector('.container');

    if(container.classList.contains('active')){
      this.setState({'isActive':false});
      container.classList.remove('active');
    }
    else
    {
      this.setState({'isActive':true});
      container.classList.add('active');
    }
    
    
  }

  userLogin(e){
    e.preventDefault();

    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });

  }

  handleChange(event) {
    
    this.setState({[event.target.name]: event.target.value});
    //console.log("event",event.target.name);
  }
  render() {
    return template.call(this);
  }
}



export default Login;
