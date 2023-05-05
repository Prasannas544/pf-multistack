import { useState } from 'react'
import './App.css'
import ReactAPP from './react_v/src/ReactAPP.tsx'
//import {AppComponent} from  './angular_v/src/app/app.component'

function App() {
  const [count, setCount] = useState(0)
  const [isReact, setIsReact] = useState(true);

  const handleClick = () => {
    setIsReact(!isReact);
  };

  return (
    <>
<button onClick={handleClick}> {isReact ? 'View Angular version' : 'View React version'}</button>

<div>{isReact ? <ReactAPP /> : 'Angular'}</div>
    </>
  )
}

export default App
