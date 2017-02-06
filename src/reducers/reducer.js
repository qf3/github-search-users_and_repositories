import { combineReducers } from 'redux'
import {SEARCH_START,SEARCH_PROCESS, SEARCH_FEEDBACK,SEARCH_END} from '../actions/action'

const searchRequest = (state={},action) =>{
	switch(action.type){
		case SEARCH_START:
			return {
				...state,
				
				startAt:Date.now()
			}
		default:
			return state
	}
}

const searchProgress = (state=0,action) =>{
	switch(action.type){
		case SEARCH_START:
			return 1
		case SEARCH_FEEDBACK:
			return 4
		case SEARCH_END:
			return 5
		default:
			return state
	}
}




const searchResponse = (state={
	isFetching:false,
	results:[],
	item:'',
	radioItem:'users',
	endAt:Date.now()
},action) => {
	switch (action.type){
		case SEARCH_START:
			return {
				...state,
				isFetching:true,
			}
		case SEARCH_PROCESS:
			return{
				...state,
				isFetching:false,
				results:action.results,
				item:action.textValue,
				radioItem:action.radioValue,
				endAt:Date.now()
			}

		default:
			return state
	}
}

const searchReducer = combineReducers({
	searchRequest,
	searchResponse,
	searchProgress
})

export default searchReducer