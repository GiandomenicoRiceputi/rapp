
import './App.css'
import {useState} from "react";

function App() {
    const [showFace, setShowFace] = useState<boolean>(false)


    const showFaceHandler = ():void => {
        setShowFace(!showFace)
    }

  return (
    <div className="App">
        <h1>Want to laugh ? click the button below</h1>
        <button onClick={showFaceHandler} style={{marginLeft: '0.2em'}}>{showFace ? 'Hide' : 'Reveals'}</button>
        <br/>
        {showFace && <img src="https://images.unsplash.com/photo-1515536765-9b2a70c4b333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" /> }
    </div>
  )
}

export default App
