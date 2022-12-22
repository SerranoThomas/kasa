import { Link } from "react-router-dom"

function Card({cover, location, id}){
    console.log({location})
    return(

        <Link to={`/Accomodation/:${id}`}className="kasa__card">
            <img src={cover} alt="localisation" />
            <div className="kasa__card-location">{location}</div>
        </Link>
    )
}

export default Card