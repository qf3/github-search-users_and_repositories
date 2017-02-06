import React, { Component,PropTypes } from 'react'
import { Badge } from 'react-bootstrap'


class Users extends Component{
	render(){
		const {results, times, searchItem}=this.props
		return(
			<div>
				{searchItem&&times>0?<div className='message'>We’ve found <Badge>{results.length}</Badge> users, it tooks <Badge>{times/1000}</Badge> seconds</div>:''}
				<ul>
					{results.map((items,index)=>	
						<li key={index}>
							<a className='outer' href={items.html_url} title={items.login}>
								<img src={items.avatar_url} alt={items.login} width={64} height={64}/>	
			  					<div className='inner'>
			  						<h3>Login:{items.login}</h3>
			  						<p>Id:{items.id}</p>
			  					</div>
			  				</a>
						</li>	
					)}
				</ul>
			</div>
		)
	}
}

Users.propTypes = {
 	results:PropTypes.arrayOf(
		PropTypes.object.isRequired
	).isRequired,
 	times:PropTypes.number.isRequired,
 	searchItem:PropTypes.string.isRequired
}

export default Users