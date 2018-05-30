import "./menuBar.css";
import React from "react";
import Logo from "../logo/logo";

function template() {
  return (
    <div className="menu-bar">
    	<Logo iconWidth="30" iconHeight="30" fontSize="20" className="f1"></Logo>
    	<div className="bar f1"></div>
      <ul className="snip1189 f20">
		  <li className="current"><a href="">Inicio</a></li>
		  <li><a href="">Perfil</a></li>
		  <li><a href="">Ligas</a></li>
		  <li><a href="">Apuestas</a></li>
		</ul>
		
		<div className="circular f1 dropdown-trigger" data-target='dropdown1'>
			<img src="https://i.pinimg.com/236x/e4/cf/16/e4cf164b7139de40ec72aca74a0b7887--leo-star-spirit-animal.jpg" alt="" className="circle right"/>
		</div>

		  <ul id='dropdown1' className='dropdown-content'>
		    <li><a href="">one</a></li>
		    
		    <li className="divider" tabIndex="-1"></li>
		    
		    
		    <li><a href="" onClick={this.props.signOut}><i className="material-icons">highlight_off</i>Sign Out</a></li>
		  </ul>
		
    </div>
  );
};

export default template;
