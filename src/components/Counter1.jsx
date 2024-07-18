import React from 'react'
// import { bindActionCreators } from '../self-redux'
// import store from '../store'
import { connect } from 'react-redux'
import { ADD1, MINUS1 } from '../store/action-types'
function add() {
	return { type: ADD1 } // actionCreator 函数
}
function minus() {
	return { type: MINUS1 }
}
const actionCreators = {
	add,
	minus,
}
// const boundActionCreators = bindActionCreators(actionCreators, store.dispatch)
class Counter1 extends React.Component {
	constructor(props) {
		super(props)
		this.state = { ...store.getState().Counter1 }
	}
	componentDidMount() {
		this.unsubscribe = store.subscribe(() => {
			this.setState({
				...store.getState().Counter1,
			})
		})
	}
	componentWillUnmount() {
		this.unsubscribe()
	}
	render() {
		console.log(this.state)
		return (
			<div>
				<p>{this.state.number}</p>
				<button onClick={boundActionCreators.add}>++</button>
				<button onClick={boundActionCreators.minus}>--</button>
			</div>
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter1)
