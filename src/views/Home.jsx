import Hero from "../components/Hero"
import { getCities} from "../services/citiesQuerys"
import Carrusel from "../components/Carrusel"
import { useEffect, useState } from "react"

const Home = () => {
    const [cities, setCty] = useState([])
    const [city, setCity] =useState([])

    useEffect(() =>{
        getCities().then((data) => {
        setCty(data)
        setCity([data.slice(5,9), data.slice(0,4), data.slice(11, 15)])
    })
},[] )

    return (
        <>
            <Hero/>
            <main className='grow bg-cyan-500'>
               {!(cities.length>0)? <h2 className="text-center text-2xl font-medium mt-10">Loading, Please Wait</h2> : <Carrusel city={city}/>}
            </main>

        </>
    
    ); 
}

  
export default Home;