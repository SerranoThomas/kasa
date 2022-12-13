function Banner({ image, titre }){
    return(
        <div className='Container__banner'>
                <span className="Container__banner__title">{titre}</span>
                <img src={image} alt="Bannière" />
            </div>
    )
}
export default Banner