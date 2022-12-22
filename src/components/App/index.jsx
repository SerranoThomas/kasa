import React from 'react'
import {  BrowserRouter, Routes,  Route} from "react-router-dom";

//Importations des 4 pages du site
import Home from '../../pages/Home'
import Error from '../Error';
import About from '../../pages/About'
import Accomodation from '../../pages/Accomodation';

//Importation du Header et du Footer
import Header from '../Header'
import Footer from '../Footer'

function App(){
  return(
    <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home />} /> 
                <Route path="*" element={<Error />}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/accomodation/:id' element={<Accomodation/>}></Route>
            </Routes>
            <Footer/>
    </BrowserRouter>
  )  
}
export default App