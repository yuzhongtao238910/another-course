export const createStore = createState => {

	let state
	const listeners = new Set()

	const getState = () => {
		return state
	}

	const setState = partial => {
		
		const nextState = typeof partial === "function" ? partial(state) : partial
		if (!Object.is(nextState, state)) {
			const previousState = state
			state = Object.assign({}, previousState, nextState)
			listeners.forEach(listener => {
				listener(state, previousState)
			})
		}
	}
	const subscribe = listener => {
		listeners.add(listener)
		return () => {
			listeners.delete(listener)
		}
	}


	const store = {
		getState,
		setState,
		subscribe
	}

	state = createState(setState, getState)


	return store
}