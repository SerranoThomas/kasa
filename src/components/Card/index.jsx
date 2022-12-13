function Card({cover, location}){
    console.log({location})
    return(
        <div className="kasa-card__container">
            <img src={cover} alt="localisation" />
            <span>{location}</span>
        </div>
    )
}

export default Card