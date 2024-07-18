import { useState } from 'react'
import './App.css'
import { create } from "./self-zustand"


const usePersonStore = create((set) => ({
  age: 1,
  name: "apple",
  setAge: () => {
    set({
      age: 1
    })
  },
  addAge: () => {
    set((state) => ({
      age: state.age + 1
    }))
  },
  minusAge: () => {
    set((state) => ({
      age: state.age - 1
    }))
  },
  promiseAddAge: () => {
    new Promise((resolve, reject) => {
      resolve()
    }).then(() => {
      setTimeout(() => {
        set((state) => ({
          age: state.age + 1
        }))
      }, 2000)
    })
  },
  asyncAddAge: async () => {
    const res = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(999)
      }, 2000)
    })
    set((state) => ({
      age: state.age + res
    }))
  },
}))

function App() {
  // const {age, name, setAge, addAge, minusAge, promiseAddAge, asyncAddAge } = usePersonStore()
  const {age, name, setAge, addAge, minusAge, promiseAddAge, asyncAddAge } = usePersonStore(state => {
    console.log(state, 50)
    return {
      age: state.age,
      name: state.name,
      setAge: state.setAge,
      addAge: state.addAge,
      minusAge: state.minusAge,
      promiseAddAge: state.promiseAddAge,
      asyncAddAge: state.asyncAddAge
    }
  })
  return (
    <div>
      {age} - {name}
      <hr />
      <button onClick={ setAge }>setAge</button>
      <button onClick={ addAge }>addAge</button>
      <button onClick={ minusAge }>minusAge</button>
      <button onClick={ promiseAddAge }>promiseAddAge</button>
      <button onClick={ asyncAddAge }>asyncAddAge</button>
    </div>
  )
}

export default App
