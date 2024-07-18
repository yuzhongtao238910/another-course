
import { createStore } from "./vanilla.js"
import { useSyncExternalStore } from "react"

const useStore = (store, selector) => {
	const state = useSyncExternalStore(store.subscribe, store.getState)
	if (selector && typeof selector === 'function') {
		return selector(state)
	}
	return state
}

const createImpl = createState => {
	const store = createStore(createState)
	return (selector) => {
		return useStore(store, selector)
	}
}




export const create = (createState) => {
	return createImpl(createState)
}