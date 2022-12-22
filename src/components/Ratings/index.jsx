import RedStar from "../../assets/Star.png"
import GreyStar from "../../assets/Star-grey.png"

function Ratings({rating}){
    const range = [1,2,3,4,5]

    return(
        <div>
            {range.map((rangeElem)=>
                rating >= rangeElem ? <span key={rangeElem}><img src={RedStar} alt='étoile rose'/></span> : <span><img src={GreyStar} alt='étoile grise'/></span>  
            )
            }
        </div>

    )
}

export default Ratings