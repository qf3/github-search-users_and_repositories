import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux';

class ProgressBar extends Component{
	constructor(){
		super()
		this.state={
			opacity:1
		}
	}

	render(){
		 const{stage} = this.props;
		return(
			<div>
 			<div className={stage===1?`progress stage`:stage===4?`progress stage4`:stage===5?`progress stage5`:`progress`}></div>
 			</div>
 				
		)
	}
}

ProgressBar.propTypes = {
  stage: PropTypes.number.isRequired
}

/* container */
const mapStateToProps = state =>{
	const{ searchProgress} = state

	return{
		stage:searchProgress,
	}
}


export default connect(mapStateToProps)(ProgressBar);

