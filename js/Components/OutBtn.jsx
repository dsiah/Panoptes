var React = require('react');

module.exports = React.createClass({
	render: function() {
		return <div>
			<input className="source-btn out-btn" type="file" name="ofile" id="ofile"></input>
			<label htmlFor="file">Choose an Output Source</label></div>;
	}
});