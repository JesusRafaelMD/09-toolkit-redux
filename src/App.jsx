
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment, decrement, incrementBy } from './store/slices/counter'

function App() {
  
  const { counter } = useSelector( state => state.counter )  
  
  const dispatch = useDispatch();

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>count is: {counter}</p>
        <button onClick={() => {dispatch(increment())}}>
          Increment
        </button>
        <button onClick={() => {dispatch(decrement())}}>
          Decrement
        </button>
        <button onClick={() => {dispatch(incrementBy(5))}}>
          Increment by 2
        </button>
       
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
