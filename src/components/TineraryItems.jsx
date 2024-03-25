import React from "react";

const TineraryItems = ({tineraries}) =>{
    function price (amount){
        let end = ""
        for (let i =0 ; i < amount ; i ++){
            end += "💶"
        }
        return end
    }

    return(
        <article className="m-3 mb-10 p-2 border border-solid rounded-lg" key={tineraries._id} >
            <h2 className="text-lg sm:text-xl md:text-2xl ">{tineraries.title}</h2>
            <h2 className="text-base sm:text-lg md:text-xl">Price: {price (tineraries.price)}</h2>
            <h3 className="after:text-sm sm:text-base md:text-lg">{tineraries.duration} Hours</h3>
            <h3 className="sm:text-base lg:text-lg">{tineraries.hashtags}</h3>
            <img className="border border-solid my-4 w-32 sm:w-64 rounded-lg" src={tineraries.guide_image}/>
            <h2 className="text-md sm:text-lg md:text-xl text-bold text-underline" >Guide: {tineraries.guide}</h2>
            <p className="text-base sm:text-lg md:text-xl p-3">{tineraries.description}</p>
            <div className="flex justify-around m-2">
            <img className="w-4/12 sm:w-3/12 mb-5 object-cover" src={tineraries.activities[0]}/>
            <img className="w-4/12 sm:w-3/12 mb-5 object-cover"src={tineraries.activities[1]}/>
            <img className="w-4/12 sm:w-3/12 mb-5 object-cover"src={tineraries.activities[2]}/>
            </div>
        </article>
    )
}

export default TineraryItems