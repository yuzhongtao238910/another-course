export function createStore(reducer) {
	let state
	const listeners = []
	const getState = () => {
		return state
	}
	// 订阅状态变化事件
	const subscribe = (listener) => {
		listeners.push(listener)
		return () => {
			let index = listeners.indexOf(listener)
			listeners.splice(index, 1)
		}
	}
	const dispatch = (action) => {
		state = reducer(state, action)
		listeners.forEach((l) => {
			l()
		})
	}
	dispatch({
		type: '@@REDUX/INIT',
	})
	return {
		getState,
		subscribe,
		dispatch,
	}
}
