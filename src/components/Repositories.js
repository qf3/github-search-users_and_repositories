import React, { PropTypes,Component } from 'react'
import { Badge } from 'react-bootstrap'

class Repositories extends Component{
	render(){
		const {results, times, searchItem} =this.props

		return(
			<div>
				{searchItem&&times>0?<div className='message'>We’ve found <Badge>{results.length}</Badge> repository results, it tooks <Badge>{times/1000}</Badge> seconds</div>:''}				
				<ul>
					{results.map((items,index)=>
						<li key={index} >
						<a href={items.html_url} title={items.description}>
							<h2>{items.full_name}</h2>
							<p><b>Description:</b>{items.description}</p>
							<p><b>Language:</b>{items.language}</p>
							<p><b>Stargazers:</b>{items.stargazers_count} <b>Watchers:</b>{items.watchers_count}</p>
							<p><b>Updated at:</b>{items.updated_at}</p>
						</a>
						</li>
					)}
				</ul>
			</div>
		)
	}
}

Repositories.propTypes = {
 	results:PropTypes.arrayOf(
		PropTypes.object.isRequired
	).isRequired,
 	times:PropTypes.number.isRequired,
 	searchItem:PropTypes.oneOfType([
 		PropTypes.string,
 		PropTypes.arrayOf(PropTypes.string)
 		]).isRequired
}

export default Repositories
