export const combineReducers = (reducers) => {
	return function combination(state = {}, action) {
		let nextState = {}
		// 派发动作后，不知道动作是给谁的，就会全部的派发一遍
		for (let key in reducers) {
			// 获取这个key对应的老的状态
			let prevStateForKey = state[key]
			let reducerForKey = reducers[key]
			let nextStateForKey = reducerForKey(prevStateForKey, action)
			nextState[key] = nextStateForKey
		}

		return nextState
	}
}
