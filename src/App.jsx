import Cities  from "./views/Cities";
import Citiyes from "./views/Citiyes";
import Home from "./views/Home";
import Layout from "./views/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from "./views/Register";
import { useEffect } from "react";
import regiQuerys from "./services/regiQuerys";
import {useDispatch } from "react-redux";
import {login} from "./Redux/usActions"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Login from "./views/Login";
import alerts from "./helpers/alerts";
import WithUser from "./guard/withUser";

function App() {
  const dispatch = useDispatch()

  useEffect(() =>{ 
    regiQuerys.tokenLogin().then((res) =>{
      if (res.status == 200) {
        dispatch(login(res.data))
        alerts.success("Welcome, have a beautiful day " + res.data.first_name )
      }else {

      }
    })
  }, [])

  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cities" element={<Cities/>}/>
            <Route path="/cities/:id" element={<Citiyes/>}/>
            <Route element = {<WithUser/>} >
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/> 
            </Route>
          </Routes>
        </Layout>
      <ToastContainer/>
    </BrowserRouter>
    
  )
}
export default App
