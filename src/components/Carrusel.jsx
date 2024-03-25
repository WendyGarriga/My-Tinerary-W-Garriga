import React, {useState} from "react"
import CarruselItems from "./CarruselItems"

export const Carrusel =({ city }) => {
    const [ cites , setCty ] = useState (city[0])
    const [ index , setIndex] = useState (0)
    const next = () => {
        let aux = index == 2 ? 0 : index +1
        setIndex(aux)
        setCty (city[aux])
    }
    const previous = () => {
        let aux = index == 0 ? 2 : index -1
        setIndex(aux)
        setCty(city[aux])
    }


    return (
        <div className = "flex flex-wrap justify-center h-full">
          <h2 className="text-3xl w-full text-center font-bold mt-8 mb-8">See the Populars</h2>
          <button className="text-3xl" onClick={previous}>👈(ﾟヮﾟ👈)</button>
          <CarruselItems cites={cites}/>
          <button className="text-3xl" onClick={next}>(👉ﾟヮﾟ)👉</button>
        </div>
    )
}


export default Carrusel


