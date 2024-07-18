const bindActionCreator = (actionCreator, dispatch) => {
	return (...args) => {
		dispatch(actionCreator.apply(null, args))
	}
}
export function bindActionCreators(actionCreators, dispatch) {
	const boundActionCreators = {}
	for (let key in actionCreators) {
		const actionCreator = actionCreators[key]
		boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
	}
	return boundActionCreators
}
