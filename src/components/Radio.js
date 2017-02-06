import React, { Component, PropTypes } from 'react';
import { Radio} from 'react-bootstrap';
class SearchRadio extends Component {

	render() {
		const{ values, check, onChange }=this.props;
		return(
		  <div className='radio'>
		  	{values.map((value,index) =>
		  		<Radio inline style={{margin:'0 2em'}} key={index} type='radio' name='search' value={value} checked={check[index]} onChange={event => onChange(event.target.value)}>
		  			{value}
		  		</Radio>
		  	)}
		  </div>
		);
	}
}


SearchRadio.propTypes = {
	values:PropTypes.arrayOf(
		PropTypes.string.isRequired
	).isRequired,
	check:PropTypes.arrayOf(
		PropTypes.bool.isRequired
	).isRequired,
	onChange:PropTypes.func.isRequired
}

export default SearchRadio;
