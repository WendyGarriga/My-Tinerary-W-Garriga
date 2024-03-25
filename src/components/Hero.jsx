import {Link} from "react-router-dom"

const Hero =() => {
    return(
        <section className=" flex gap-50 flex-col justify-evenly items-center h-96 background-cyan800 z-20 bg-[url('/public/Bann.jpg')] bg-cover bg-center">
            <h2 className="text-4xl font-bold  p-2">My Tinerary</h2>
            <h3 className= "text-3xl w-20 p-0.5 sm:w-auto sm:text-3xl font-bold text-white ">Find your own paradise</h3>
            <Link className="rounded border py-2 px-4 bg-cyan-500 bg-opacity-40 " to="./Cities"> See the cities</Link>
        </section>
    )
}

export default Hero;