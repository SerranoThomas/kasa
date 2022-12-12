import React from 'react'
import {  BrowserRouter, Routes,  Route} from "react-router-dom";
import { createGlobalStyle } from 'styled-components';

//Importations des 4 pages du site
import Home from '../../pages/Home'
import Error from '../Error';
import About from '../../pages/About'
import Accomodation from '../../pages/Accomodation';

//Importation du Header et du Footer
import Header from '../Header'
import Footer from '../Footer'

//Création d'un layout
const GlobalStyle = createGlobalStyle`
    body{
        width : 100%;
        font-family : Montserrat;
        color: #FF6060;        
    }
`

function App(){
  return(
    <BrowserRouter>
        <GlobalStyle/>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home />} /> 
                <Route path="*" element={<Error />}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/Accomodation/:id' element={<Accomodation/>}></Route>
            </Routes>
            <Footer/>
    </BrowserRouter>
  )  
}
export default App