var React = require('react');

module.exports = React.createClass({
	render: function() {
		return <div>
			<input className="source-btn in-btn" type="file" name="ifile" id="ifile"></input>
			<label htmlFor="ifile">Choose an Input Source</label>
		</div>;
	}
});