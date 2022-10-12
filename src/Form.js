import React, {useState} from "react";
import About from "./About";

function Form({data, setData}) {

    const [setup, setSetUp] = useState("")
    const [delivery, setDelivery] = useState("")
    const [category, setCategory] = useState("")
  
    function HandleSubmit(e) {
      e.preventDefault()
      const collection = {setup, delivery,category}
       fetch("http://localhost:3000/jokes"
       , {
        method : "POST",
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         },
         body : JSON.stringify(collection)
       })
       setSetUp("")
       setDelivery("")
       setCategory("")
       const poster = [...data, collection]
       setData(poster)
    }

    return (
        <div className="forms" >
            <About/>
        <form onSubmit={HandleSubmit}>
              <h2>Show me what you got!</h2>
              <input
                placeholder="say something.."
                className="input"
                name="setup"
                type="text"
                value={setup}
                onChange={(event) => setSetUp(event.target.value)}/>
              <input
                placeholder="hit it!"
                className="input"
                name="delivery"
                type="text"
                value={delivery}
                onChange={(event) => setDelivery(event.target.value)}/>
              <input
                placeholder="Pun, Christmas, Dark, Programming, Misc"
                className="input"
                name="category"
                type="text"
                value={category}
                onChange={(event) => setCategory(event.target.value)}/>  
            <button type="submit" className="input" id="formbutton">Pun it!</button>
        </form>
        </div>
    )
}

export default Form;