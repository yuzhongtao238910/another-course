import React from 'react'
import store from '../store'

import { bindActionCreators } from '../self-redux'
import { ADD2, MINUS2 } from '../store/action-types'
function add() {
	return { type: ADD2 } // actionCreator 函数
}
function minus() {
	return { type: MINUS2 }
}
const actionCreators = {
	add,
	minus,
}
const boundActionCreators = bindActionCreators(actionCreators, store.dispatch)
class Counter2 extends React.Component {
	constructor(props) {
		super(props)
		this.state = { ...store.getState().Counter2 }
	}
	componentDidMount() {
		this.unsubscribe = store.subscribe(() => {
			this.setState({
				...store.getState().Counter2,
			})
		})
	}
	componentWillUnmount() {
		this.unsubscribe()
	}
	render() {
		return (
			<div>
				<p>{this.state.number}</p>
				<button onClick={boundActionCreators.add}>++</button>
				<button onClick={boundActionCreators.minus}>--</button>
			</div>
		)
	}
}
export default Counter2
