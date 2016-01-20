var React = require('react');
var InBtn = require('./InBtn.jsx');
var OutBtn = require('./OutBtn.jsx');
var XIcon = require('./XIcon.jsx');
var CheckIcon = require('./CheckIcon.jsx');
var Card = require('./Card.jsx');

module.exports = React.createClass({
	render: function() {
		return <div className="title">
			<Card content="HELLO!" index="1" />
		</div>;
	}
});
