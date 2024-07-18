import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './03-react-redux-App'
// import { createStore } from "./self-redux"

// const counter = document.getElementById("counter")
// const addButton = document.getElementById("add-button")
// const minusButton = document.getElementById("minus-button")
// const ADD = "ADD"
// const MINUS = "MINUS"
// const initialState = {number: 0}
// function reducer(state = initialState, action) {
//     switch (action.type) {
//         case ADD:
//             return {
//                 number: state.number + 1
//             }
//         case MINUS:
//             return {
//                 number: state.number - 1
//             }
//         default:
//             return state
//     }
// }
// const store = createStore(reducer)

// function render() {
//     counter.innerHTML = store.getState().number
// }
// render()
// store.subscribe(render)
// minusButton.onclick = () => {
//     store.dispatch({
//         type: MINUS
//     })
// }
// addButton.onclick = () => {
//     store.dispatch({
//         type: ADD
//     })
// }

const root = createRoot(document.getElementById('root'))
root.render(<App />)
