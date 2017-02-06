import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {fetchResults} from '../actions/action';

import SearchRadio from './Radio'
import { Button, Grid, Row, Col, FormControl, FormGroup,  Form} from 'react-bootstrap';

class TextInput extends Component {
	constructor(){
		super()
		this.state = {
			value:'',
			radioValue:'users',
			checked:[true,false]
		}
	}
	handlerTextInput= event =>{
		this.setState({
			value:event.target.value
		})
		let kc = event.which || event.keyCode; 
		if (kc===13) {
			event.preventDefault();
			if (!this.state.value.trim()) {
				return
			}else{
				this.props.dispatch(fetchResults(this.state.value,this.state.radioValue.toLowerCase()))
			}
		}	
	}
	postTextInput = () =>{
		if (!this.state.value.trim()) {
			return
		}
		
		this.props.dispatch(fetchResults(this.state.value,this.state.radioValue.toLowerCase()))
		}


	handlerRadio= radio =>{

		this.setState({
			radioValue:radio,
			checked:this.state.checked.map(c=>!c)
		})
		
	}
	render() {

		return(
		  <Grid>
	
		  	<Row>
		  		<Col className='textInput'>
		  		<Form inline >
		  		<FormGroup bsSize="large">
		  		<FormControl placeholder="Search for sth" type='text' value={this.state.value} onChange={this.handlerTextInput} onKeyPress={(e)=>this.handlerTextInput(e)}/>
				</FormGroup>
		  		<Button bsSize="large" onClick={this.postTextInput} >Search</Button>
		  		</Form>
		  		</Col>
		  	</Row>

		  	<Row >
		  	<Col className='SearchRadio'>
		  		<SearchRadio values={['Users','Repositories']} check={this.state.checked} onChange={this.handlerRadio}/>
		  	</Col>
		  	</Row>
		  	
		  </Grid>
		);
	}
}



TextInput.propTypes = {
	dispatch: PropTypes.func.isRequired
}
export default connect()(TextInput);


