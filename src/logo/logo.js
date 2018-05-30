import React    from "react";
import template from "./logo.jsx";

class logo extends React.Component {
  render() {
    return template.call(this);
  }
}
logo.defaultProps = {
	iconWidth: '80',
	iconHeight: '80',
	fontSize: '48'
};
export default logo;
