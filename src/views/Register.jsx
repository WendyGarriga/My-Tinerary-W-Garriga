import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import getCountries from "../services/countryQuerys.js";
import regiQuerys from "../services/regiQuerys.js";
import alerts from "../helpers/alerts"

function Register (){ 
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        country: "",

    })
    const [countries, setCountries] = useState([])
    const navigate = useNavigate()
    useEffect ( () =>{
        getCountries().then(setCountries)
}, [])

   
    function handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        const aux = {...formData}
        aux[name] = value
        setFormData(aux);
    }
    

    function handleSubmit(e){
        e.preventDefault();
        const aux = {...formData}
        for (const key in aux) {
            if (!aux[key]) delete aux[key]
        }
        regiQuerys.register(aux).then((response) => {
            if(response.status == 201){
                alerts.success("Created Account")
                navigate("/Login")
            }else{
                alerts.error(response.statusMsg)
            }
        })
    }

    return(
            <main className="grow flex flex-col justify-center items-center gap-7 bg-cyan-400">
                <h2>Register</h2>
                <div className="flex flex-col items-center border rounded-2xl w-10/12 border-cyan-800 h-fit ">
                    <form onSubmit={handleSubmit} onInput={handleInput} className="flex flex-col items-center gap-5 py-5 w-full"> 
                        <label>Name:
                           <input className="w-10/12 h-10 rounded-3xl ps-4" type="text" placeholder="Tomas" name="first_name"/> 
                        </label>
                       <label>Last Name:
                           <input className="w-10/12 h-10 rounded-3xl ps-4" type="text" placeholder="Anderson" name="last_name"/> 
                       </label>
                        <label>E-Mail:
                           <input className="w-10/12 h-10 rounded-3xl ps-4" type="email" placeholder="neo@matrix.com" name="email"/> 
                        </label>
                        <label>Password:
                            <input className="w-10/12 h-10 rounded-3xl ps-4" type="password" placeholder="Password" name="password"/> 
                        </label>
                        <select className="w-10/12 h-10 rounded-3xl ps-4" name="country" defaultValue={formData.country}>
                            {countries.length > 0 &&
                            countries.map((country) => (
                                <option key={country} value={country}>
                                  {country}

                                </option>
                             ))}
                        </select>
                        <input className="w-10/12 h-10 rounded-3xl ps-4" type="text" name="image" placeholder="Url image"/>
                        <input className="flex justify-center cursor-pointer w-50 h-10 border border-solid w-32 sm:w-52 rounded bg-cyan-300 text-black " type="submit" value="Send"/>
                    </form>
                   <Link className="flex justify-center cursor-pointer w-50 h-10 border border-solid w-32 sm:w-52 rounded bg-cyan-300 text-black " to="/Login">Login</Link>
                </div>
            </main>
                )
    
    }
    

    export default Register


    