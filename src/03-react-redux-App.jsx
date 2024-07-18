import React from 'react'
import store from './store'
import './App.css'
import Counter3 from './components/Counter3.jsx'
import Counter4 from './components/Counter4.jsx'
import { Provider } from 'react-redux'
class App extends React.Component {
	constructor(props) {
		super(props)
		// this.state = { number: store.getState().number }
	}
	// componentDidMount() {
	// 	this.unsubscribe = store.subscribe(() => {
	// 		this.setState({
	// 			number: store.getState().number,
	// 		})
	// 	})
	// }
	// componentWillUnmount() {
	// 	this.unsubscribe()
	// }

	render() {
		return (
			<Provider store={store}>
				<Counter3></Counter3>
				<hr />
				<Counter4></Counter4>
				<hr />
			</Provider>
		)
	}
}

export default App
