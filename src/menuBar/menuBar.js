import React    from "react";
import M    from "materialize-css";
import template from "./menuBar.jsx";

class menuBar extends React.Component {

	componentDidMount(){
		var elem = document.querySelector('.dropdown-trigger');
  		var instance = M.Dropdown.init(elem);
  		console.log(instance);
	}

  render() {
    return template.call(this);
  }
}

export default menuBar;
