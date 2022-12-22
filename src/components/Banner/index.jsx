function Banner({ image, titre }){
    return(
        <div className='Container__banner'>
            <img src={image} alt="Bannière" />
            <p className="Container__banner__title">{titre}</p>        
        </div>
    )
}
export default Banner