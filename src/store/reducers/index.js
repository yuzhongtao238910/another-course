import Counter1 from './counter1'

import Counter2 from './counter2'
import { combineReducers } from '../../self-redux'

// { counter1: {number: 0}, counter2: {number: 0}}
export const rootReducer = combineReducers({
	Counter1,
	Counter2,
})
