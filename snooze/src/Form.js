import React, {useState} from "react";

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
        <form onSubmit={HandleSubmit}>
            <div>
            <h2>Show me what you got!</h2>
            <input
            placeholder="say something.."
            name="setup"
            type="text"
            value={setup}
            onChange={(event) => setSetUp(event.target.value)}/>
            <input
            placeholder="hit it!"
            name="delivery"
            type="text"
            value={delivery}
            onChange={(event) => setDelivery(event.target.value)}/>
            <input
            placeholder="Pun, Christmas, Dark, Programming, Misc"
            name="category"
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}/>
            </div>   
            <button type="submit">Pun it!</button>
        </form>
    )
}

export default Form;