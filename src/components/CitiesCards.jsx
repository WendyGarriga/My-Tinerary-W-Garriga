import { Link } from "react-router-dom";

const CitiesCards = ({cities}) => {
    return(
        <article className="border-black rounded-border-lg" key={cities.name}>
            <img className="w-40 h-[400px] object-cover rounded-t-lg" src={cities.image} alt={"Image of " + cities.name}/>
            <footer className="bg-cyan-800 text-black ps-1 w-full rounded-b-lg">
                <h2 className="text-2xl font-bold">{cities.name}</h2>
                <p className="text-xl italic">{cities.title}</p>
                <Link to={"/Cities/" + cities._id} className="text-black text-lg underline">Details</Link>

            </footer>
        </article>
    )
}

export default CitiesCards;