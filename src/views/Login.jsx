import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import regiQuerys from "../services/regiQuerys.js"
import alerts from "../helpers/alerts.js"
import {login} from "../Redux/usActions.js"
import { useDispatch } from "react-redux";

function Login (){ 
    const [formData, setFormData] = useState({
        email: "",
        password: "",


    })

    const navigate =useNavigate
    const dispatch = useDispatch

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
        regiQuerys.login(aux).then((response) => {
            if(response.status == 200){
                dispatch(login(response.data))
                alerts.success("Welcome" + response.data.first_name)
                navigate("/")
            }else{
                alert(response.statusMsg)
            }
        })
    }
    return(
        <main className="grow flex flex-col justify-center items-center gap-7 bg-cyan-400">
            <h2>Login</h2>
            <div className="flex flex-col items-center border rounded-2xl w-10/12 border-cyan-800 h-fit ">
                <form onSubmit={handleSubmit} onInput={handleInput} className="flex flex-col items-center gap-5 py-5 w-full"> 
                    <label>E-Mail:
                        <input className="w-10/12 h-10 rounded-3xl ps-4" type="email" placeholder="neo@matrix.com" name="email"/> 
                    </label>
                    <label>Password:
                        <input className="w-10/12 h-10 rounded-3xl ps-4" type="password" placeholder="Password" name="password"/> 
                    </label>
                    <input className="flex justify-center cursor-pointer w-50 h-10 border border-solid w-32 sm:w-52 rounded bg-cyan-300 text-black " type="submit" value="Login"/>
                    <Link className="flex justify-center cursor-pointer w-50 h-10 border border-solid w-32 sm:w-52 rounded bg-cyan-300 text-black " to="/Register">Register</Link>
                </form>
            </div>
        </main>
    )
    }

export default Login