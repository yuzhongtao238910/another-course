// 整个应用的状态都在一个树里面
// state是只读的
// 单一的数据源
import './App.css'
import Counter1 from './components/Counter1.jsx'
import Counter2 from './components/Counter2.jsx'
import React from 'react'
import store from './store'
// import { bindActionCreators } from './self-redux'
// function add(obj) {
// 	return { type: ADD } // actionCreator 函数
// }
// function minus() {
// 	return { type: MINUS }
// }
// const actionCreators = {
// 	add,
// 	minus,
// }
// const boundActionCreators = bindActionCreators(actionCreators, store.dispatch)
// { add: () => dispatch({type: ADD})  , minus: () => dispatch({type: MINUS})}
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { number: store.getState().number }
	}
	componentDidMount() {
		this.unsubscribe = store.subscribe(() => {
			this.setState({
				number: store.getState().number,
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
				{/* <button onClick={() => store.dispatch(add())}>++</button>
				<button onClick={() => store.dispatch({ type: MINUS })}>--</button> */}
				{/* <button onClick={() => boundActionCreators.add({ num: 22 })}>++</button>
				<button onClick={boundActionCreators.minus}>--</button> */}
				<hr />
				{/* <Another></Another> */}
				<Counter1></Counter1>
				<hr />
				<Counter2></Counter2>
				<hr />
			</div>
		)
	}
}

// function App() {
//   return (
//     <div>
//       2
//     </div>
//   )
// }

export default App
