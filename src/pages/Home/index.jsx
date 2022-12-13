import React from 'react'
import Banner from '../../components/Banner'
import Card from '../../components/Card'


import BannerImg from '../../assets/Banner.png'
import datas from '../../datas/logements.json'



function Home() {
    const logementList = datas
    console.log(logementList)
    
    return (
        <div className='kasa-Home__container'>
            
            <Banner image={BannerImg} titre={<h1>Chez vous, partout et ailleurs</h1>}/>
            
            <div>
            {logementList.map((accomodation) => (
                <Card
                key={accomodation.id}
                label={accomodation.location}
                />
                )
            )}
            </div>
        </div>
        
    )
}

export default Home