function Owner({name,picture}){
    return(
        <div>
            <div>{name}</div>
            <img src={picture} alt='propriétaire de la propriété'/>
        </div>
    )
}

export default Owner
    
