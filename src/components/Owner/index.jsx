function Owner({name,picture}){
    return(
        <div className="owner">
            <div className="owner__name">{name}</div>
            <img src={picture} alt='propriétaire' className="owner__picture"/>
        </div>
    )
}

export default Owner
    
