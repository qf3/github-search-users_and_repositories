import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

import Repositories from './Repositories';
import Users from './Users';

class SearchItems extends Component {

	render() {
		const{ isFetching, radioItem, ...info} = this.props
		return(
			<div>
				{isFetching?<h2 style={{textAlign:'center', marginTop:'3em'}}>Loading...</h2>: 
					radioItem==='users'?
					<Users  {...info}/>:<Repositories {...info}/>
				}
			</div>
		);
	}
}

SearchItems.propTypes = {
 	isFetching:PropTypes.bool.isRequired,
 	radioItem:PropTypes.string.isRequired,
 
}


/* container */
const mapStateToProps = state =>{
	const{	searchRequest, searchResponse} = state

	return{
		isFetching:searchResponse.isFetching,
		searchItem:searchResponse.item,
		radioItem:searchResponse.radioItem,
		results:searchResponse.results,
		times:searchResponse.endAt-searchRequest.startAt
	}
}

export default connect(mapStateToProps)(SearchItems);

/*
export default SearchItems;*/
