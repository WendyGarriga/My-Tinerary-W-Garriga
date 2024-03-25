import React from 'react'
// import {cities} from '../data/data'

export const CarruselItems = ({ cites }) => {
    return (
        <div className='flex justify-center flex-wrap w-1/2 sm:2/3 2xl:w-2/5 gap-5 mb-16'>
            {cites.map((city) =>( 
                <article className=" rounded-top-2xl" key={city.name}>
                    <img className="w-40 h-40 sm:w-64 sm:h-72 object-cover rounded-t-lg " src={city.image} alt={'Image of'  + city.name}/>
                    <footer className="bg-cyan-800 text-black rounded-b-lg">
                        <h2 className="text-3xl p-2">{city.name}</h2>
                        <p className="text-2xl italic p-2">{city.country}</p>
                    </footer>
                </article>
        ))}
        </div>
        );
};

export default CarruselItems
