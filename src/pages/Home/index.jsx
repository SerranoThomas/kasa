import React from 'react'
import Banner from '../../components/Banner'
import Card from '../../components/Card'


import BannerImg from '../../assets/Banner.png'
import Accomodations from '../../datas/logements.json'



function Home() {
    const logementList = Accomodations
    console.log(logementList)
    
    return (
        <div className='kasa__Home'>
            
            <Banner image={BannerImg} titre={'Chez vous, partout et ailleurs'}/>
            
            <div className='kasa__Home-accomodations'>
            {logementList.map((accomodation) => (
                <Card
                key={accomodation.id}
                id={accomodation.id}
                cover={accomodation.cover}
                location={accomodation.location}
                />
                )
            )}
            </div>
        </div>
        
    )
}

export default Home