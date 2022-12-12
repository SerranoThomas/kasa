import styled from 'styled-components'
import LogoW from '../../assets/Logo-Blanc.png'

const Styledfooter = styled.footer`
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding-top: 15px;
    position: fixed;
    bottom:0px;
    width:100%;
`

function Footer(){
    return(
        <Styledfooter>
            <img src={LogoW} alt='Logo-White'></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </Styledfooter>
    )
}

export default Footer
