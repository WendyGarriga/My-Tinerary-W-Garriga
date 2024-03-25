import { createReducer } from "@reduxjs/toolkit"
import { filterByName, load } from "./citiesActions"

const initialState = {
	all: [],
	filtered: [],
    search: ""
}



const reducer = createReducer( initialState, (builder) => {
	builder.addCase (load, (state, action) => {
        const newState = {...state}
        newState.all = action.payload
        newState.filtered = action.payload
		return newState
	} ).addCase(filterByName, (state, action)=>{
		const aux = state.all.filter((cities) => {
		return cities.name.toLowerCase().startsWith(action.payload.toLowerCase().trim())})
		return {...state,filtered: aux, search: action.payload}
    })
})
export default reducer
