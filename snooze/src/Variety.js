import React from "react";
import Joke from "./Joke";


function Variety({data, setData}) {


    const Puns= data.filter((item) => {
        console.log(data)
        const puns =[]

        if (item.category === "Pun") {
            (puns.push(item))
        }
        setData(puns.map((item) => <Joke key={item.id} setup={item.setup} delivery={item.delivery} category={item.category}/>))
    })
    
    const Chritsmas = data.filter((item) => {
        const Chris =[]
        if (item.category === "Christmas") {
            Chris.push(item)
        }
        setData(Chris.map((item) => <Joke setup={item.setup} delivery={item.delivery} category={item.category}/>))
    })
    
    const Dark = data.filter((item) => {
        const dark =[] 
        if (item.category === "Dark") {
            dark.push(item)
        }
        setData(dark.map((item) => <Joke setup={item.setup} delivery={item.delivery} category={item.category}/>))
    })
    
    const Misc = data.filter((item) => {
        const misc =[] 
        if (item.category === "Misc") {
            misc.push(item)
        }
        setData(misc.map((item) => <Joke setup={item.setup} delivery={item.delivery} category={item.category}/>))
    })
    
    const Programming = data.filter((item) => {
        const programming =[] 
        if (item.category === "Programming") {
            programming.push(item)
        }
        setData(programming.map((item) => <Joke setup={item.setup} delivery={item.delivery} category={item.category}/>))
    })
    

    return(
        <div>
         {Puns}
         {Chritsmas}
         {Programming}
         {Dark}
         {Misc}
        </div>

    )
}

export default Variety;