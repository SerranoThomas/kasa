import React from "react"
import { useParams } from "react-router";
import logements from "../../datas/logements.json"
import Dropdown from "../../components/Dropdown"
import Owner from "../../components/Owner";
import Tags from "../../components/Tags";
import Ratings from "../../components/Ratings";

function Accomodation(){
    //On extrait l'id de l'url avec useParams
    const {id} = useParams()
    //On enlève le ":" de l'id grâce à replace
    const cleanId = (id.replace(':',''))
    /* console.log(cleanId)
    console.log(logements)  */
    //Si En li
    //On récupère le logement en question avec une fonction filter
    const myAccomodation = logements.filter(logement => logement.id === cleanId)
    console.log(myAccomodation)
    
    return(
        <React.Fragment>
            {myAccomodation.map((accomodation)=>(
                <div key={accomodation.id} className="kasa__Accomodation">
                    <div className="kasa__Accomodation__essentials">
                        <div>
                            <div className="kasa__Accomodation__essentials-titles">
                                <h1>{accomodation.title}</h1>
                                <h2>{accomodation.location}</h2>
                            </div>
                            <div className="kasa__Accomodation__essentials-tags">
                                {accomodation.tags.map((tag,i)=>
                                    <Tags 
                                        key={`${tag}-${i}`} 
                                        tagName={tag}
                                    />
                                )}
                            </div>
                        </div>
        
                        <div className="kasa__Accomodation__essentials-owner">
                            <div className="kasa__Accomodation__essentials-owner-infos">
                                <Owner 
                                    name = {accomodation.host.name}
                                    picture = {accomodation.host.picture}
                                />
                            </div>
                            <div className="kasa__Accomodation__essentials-owner-rating">
                                <Ratings rating={accomodation.rating}></Ratings>
                            </div>
                        </div>
                    
                    </div>
                   
                    

                    <div className="kasa__Accomodation__secondary">
                        <div className="kasa__Accomodation__secondary-infos">
                            <Dropdown 
                            titre = "Description"
                            content = {accomodation.description}
                        />
                        </div>
                        <div className="kasa__Accomodation__secondary-infos">
                            <Dropdown 
                            titre = "Equipements"
                            content = 
                                {<ul>
                                    {accomodation.equipments.map((equipment) => 
                                    <li key={equipment}>{equipment} </li>)}
                                </ul>}
                        />
                        </div>
                       
                    </div>
                </div>
            ))}
        </React.Fragment>
            
        
        
    )
}

export default Accomodation