import axios from "axios"
// import { cities } from "../data/data"

export const getCities = async () =>{
    try{
        const answer = await axios ("http://localhost:4000/api/cities")
        return answer.data.data
    }catch (error ){
        // console.error(`An error occurred getting the city, city id ${id}` , error)
        return []
    }
}

export const getCitiesById = async (_id) => {
    try {
        const response = await axios.get(`http://localhost:4000/api/cities/` + _id)
        return response.data.data
    } catch (error) {
        console.error(`An error occurred getting the details of the city, city id ${_id}`, error);
    }
} 