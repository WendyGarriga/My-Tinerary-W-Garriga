import { useNavigate, useParams, Link } from "react-router-dom"
import { getCitiesById } from "../services/citiesQuerys"
import { useEffect, useState } from "react";
import TineraryItems from "../components/TineraryItems"

const Citiyes=() => {
    const params = useParams();
    const [city, setCity] = useState ({})
    const [loading, setLoading] = useState(true)
    const [itineraries, setTineraries] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        getCitiesById(params.id).then((res) => {
            if (res._id){
                setCity(res)
            }else {
                alert("404 element not found")
                navigate("/Cities")
            }
            setTineraries(res.itineraries)
        } )
        .finally(() => setLoading(false))
    },[])

    if (loading) {
        return(
            <>
                <main className="grow flex flex-col items-center gap-5 justify-center bg-cyan-600">
                    <div>
                        <h2 className="pt-20 text-4xl text-white">Loading...Please wait</h2>
                    </div>
                </main>
            </>
        )
    }
    
    return (
        <>
        <main className='grow bg-cyan-400'>
            <div className='flex flex-col justify-center items-center mt-7'>
                <h1 className='text-3xl sm:text-5xl mb-2'>{city.name}</h1>
                <h2 className='text-xl sm:text-3xl mb-3'>{city.country}</h2>
                <img className='w-11/12 h-[450px] object-cover' src={city.image} alt="" />
            </div>
                <h1 className='text-xl sm:text-2xl md:text-3xl mx-10 my-8'>Itineraries:</h1>
                    {itineraries.length > 0 ? (
                        itineraries.map((itineraries) => (
                            <div key={itineraries._id} className='mx-10 my-7 flex flex-col gap-5'>
                                <TineraryItems tineraries={itineraries} />
                            </div>
                        ))  
                        ) : (
                            <h1 className='text-center text-2xl m-10'>There are no itineraries for this city yet (#｀-_ゝ-) </h1>
                            )}
                            <Link to={"/Cities"} className=" text-2xl font-bold flex justify-center hover:underline">Return to Cities</Link>
        </main>
        </>
      )
    }

    export default Citiyes
 
