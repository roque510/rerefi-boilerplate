import React    from "react";
import * as firebase from 'firebase';
import {} from '../Firebase.js';
import _ from 'lodash';



import "./Home.css";
import MenuBar from "../menuBar/menuBar";
import { connect } from 'react-redux';

import { getPartidos } from '../Actions/torneoActions';
import { Field, reduxForm, reset } from 'redux-form';

function mapStateToProps(state) {
  return {
    torneos: state.torneos
  };
}


class Home extends React.Component {
	constructor(){
		super();

		// this.state = {
		// 	torneos :
		// 	{ '12312312':
		// 		{
		// 			equipo1: 'Madrid',
		// 			equipo2:'Barca'
		// 		},
		// 		'435345345':
		// 			{
		// 				equipo1: 'Olimpia',
		// 				equipo2:'Motagua'
		// 			},

		// 		'3838394':
		// 		{
		// 			equipo1: 'PSG',
		// 			equipo2:'Milan'
		// 		}
		// 	}
		// }

		this.increment = this.increment.bind(this);
	}

	increment() {
		this.props.dispatch({ type: 'INCREMENT' });
	}

	signOut(e) {
	    e.preventDefault();
	    firebase.auth().signOut().then(function() {
	      // Sign-out successful.
	      alert("BYE!");
	    }).catch(function(error) {
	      // An error happened.
	      alert("Yikes somethng HAPPEND",error);
	    });
	  }

	componentDidMount(){
		var user = firebase.auth().currentUser;
		if (user != null) {
		  user.providerData.forEach(function (profile) {
		    console.log(user);
		  });
		}
	}

	componentWillMount() {
		this.props.getPartidos();
	}

  render() {
    return (
  	
    <div className="home">
    	<MenuBar signOut={this.signOut}></MenuBar>
    	<h1>Welocme, {this.props.name}</h1>
      	<p>Renderizar SASS file de materialize para tener colores primarios y secundarios acorde al color pallete</p>
      	{ _.map(this.props.torneos, (torneo, key) => {
      		return (
      			<div key={key}>
	      			<h1>{key}</h1>
	      			<div>{torneo.equipo1}</div>
	      			<div>{torneo.equipo2}</div>
      			</div>
      		);

      	} )}
      	<button onClick={this.increment}>Change Name</button>
    </div>
    
  );
  }
}

let form = reduxForm({
	form: 'NewPost'
})(Home);

form = connect(mapStateToProps,{ getPartidos })(form);

export default connect(mapStateToProps,{ getPartidos })(Home);;
