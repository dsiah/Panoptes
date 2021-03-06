/**
 * Card Component -- Passed Index Number and Text as Props
 */
var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
      <div className={"card " + "card-index" + this.props.index}>
        <div className="cardContent">
          {this.props.content}
        </div>
        <div className="cardButtons">
          <span className="btn left">&#10005;</span>
          <span className="btn right">&#10003;</span>
        </div>
		  </div>
    );
	}
});
