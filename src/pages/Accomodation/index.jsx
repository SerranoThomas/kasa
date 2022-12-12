import { useParams } from "react-router";

function Accomodation(){
    const {id} = useParams
    return(
        <h1> Page accomodation {id}</h1>
    )
}

export default Accomodation