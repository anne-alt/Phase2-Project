import React from "react";
import Joke from "./Joke";


function Variety({data, setData}) {


    const Puns= data.filter((item) => {
        console.log(data)
        const puns =[]

        if (item.category === "Pun") {
            (puns.push(item))
        }
        const punts =(puns.map((item) => <Joke key={item.id} setup={item.setup} delivery={item.delivery} category={item.category}/>))
        setData(punts)
        return (punts)
    })
    
    const Chritsmas = data.filter((item) => {
        const Chris =[]
        if (item.category === "Christmas") {
            Chris.push(item)
        }
        const Chrix = (Chris.map((item) => <Joke setup={item.setup} delivery={item.delivery} category={item.category}/>))
        setData(Chrix)
        return (Chrix)
    })
    
    const Dark = data.filter((item) => {
        const dark =[] 
        if (item.category === "Dark") {
            dark.push(item)
        }
        const darks = (dark.map((item) => <Joke setup={item.setup} delivery={item.delivery} category={item.category}/>))
        setData(darks)
        return(darks)
    })
    
    const Misc = data.filter((item) => {
        const misc =[] 
        if (item.category === "Misc") {
            misc.push(item)
        }
        const miscs = (misc.map((item) => <Joke setup={item.setup} delivery={item.delivery} category={item.category}/>))
        setData(miscs)
        return (miscs)
    })
    
    const Programming = data.filter((item) => {
        const programming =[] 
        if (item.category === "Programming") {
            programming.push(item)
        }
        const programs = (programming.map((item) => <Joke setup={item.setup} delivery={item.delivery} category={item.category}/>))
        setData(programs)
        return(programs)
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