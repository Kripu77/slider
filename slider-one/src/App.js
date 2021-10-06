import React, {useState} from 'react'
import "./CSS/index.css"
import data from "./Components/data"

const App = () => {
    const[quotes, setQuotes] = useState(data);
const [index, setIndex] = useState(0)


    return (
       <main>
           <h1 className="title">Inspiring Quotes</h1>
           <div className="container">
<h1> test</h1>
           </div>
       </main>
    )
}

export default App
