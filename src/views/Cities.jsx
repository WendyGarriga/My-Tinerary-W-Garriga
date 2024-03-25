import { useState, useEffect, useRef } from "react";
import { getCities } from "../services/citiesQuerys";
import CitiesCards from "../components/CitiesCards";
import { useSelector, useDispatch } from "react-redux";
import { load } from "../Redux/citiesActions";
import { filterByName } from "../Redux/citiesActions";

export const Cities = () => {
    const inputSearch = useRef(null);
    const dispatch = useDispatch()
    
    const {all, filtered, search} =useSelector((store)=> store.cities)

    useEffect (() =>{
        if (all.length == 0){
        getCities().then((data) =>{
         dispatch(load(data))
        })}
    
    }, [] );

     const handleInput = () => {
        dispatch(filterByName(inputSearch.current.value))
            
    }

    return (
        <>
        <main className='grow flex flex-col gap-5 justify-center items-center bg-cyan-600'>
        <div className="w-full flex justify-center flex-wrap gap-7 mb-12">
            <h2 className='w-full text-center text-4xl text-white font-bold mt-5 '>Cities</h2>
            <search className="w-full flex justify-center">
              <input 
              className="w-5/12 sm:w-80 border border-solid " 
              type="text" 
              name="Name_city"
              onInput={handleInput}
              ref={inputSearch}
              defaultValue={search}
              />
            </search>
            {filtered.length > 0 && 
            filtered.map((cities) => (
              <CitiesCards key={cities._id} cities={cities} />
            ))}
        </div>
        </main>
        </>
      )
    }
    


    export default Cities;