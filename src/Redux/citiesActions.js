import { createAction } from "@reduxjs/toolkit"

export const load = createAction ("loadCities" , (cities) => {
	return{
		payload: cities
	}
})

export const filterByName = createAction ("filterByName", ( value ) => { 
	return{
	    payload: value

}
})
