var React = require('react');
var InBtn = require('./InBtn.jsx');
var OutBtn = require('./OutBtn.jsx');
var XIcon = require('./XIcon.jsx');
var CheckIcon = require('./CheckIcon.jsx');


module.exports = React.createClass({
	render: function() {
		return <div className="title"><InBtn /><OutBtn /><XIcon /><CheckIcon /></div>;
	}
});