export const SEARCH_START = 'SEARCH_START'
export const SEARCH_PROCESS = 'SEARCH_PROCESS'
export const SEARCH_FEEDBACK = 'SEARCH_FEEDBACK'
export const SEARCH_END = 'SEARCH_END'

export const searchStart = (textValue,radioValue)  => ({
	type:SEARCH_START,
	textValue,

	
})

export const searchProcess = (textValue,radioValue,results) => ({
	type:SEARCH_PROCESS,
	textValue,
	radioValue,
	results

})

export const searchFeedback = ()=>({
	type:SEARCH_FEEDBACK
})

export const searchEnd = ()=>({
	type:SEARCH_END
})

export const fetchResults=(textValue,radioValue )=> dispatch =>{
	dispatch(searchStart(textValue))
	return fetch(`https://api.github.com/search/${radioValue}?q=${textValue}`)
		.then(response => response.json())
		.then(json => dispatch(searchProcess(textValue,radioValue,json.items)))
		.then(() => dispatch(searchFeedback()))
		.then(()=>{
			setTimeout(()=>{
				dispatch(searchEnd())
			},1000)
		})
		// .then(json=>console.log(json.items))
		// .then(json=>console.log(json))
		.catch(error => console.log(error))
}

