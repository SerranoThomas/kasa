import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
const NumeroError = styled.p`
    font-weight: 700;
    font-size: 10em;
    margin: 0.3em;
`

const TextError= styled.p`
    font-weight: 500;
    font-size: 2em;
    padding-bottom: 2em;
`
const LinkError= styled(Link)`
    color: #FF6060;
    padding-bottom: 10em;
`
function Error(){
    return(
        <ErrorContainer>
            <p className="Test">Test sass</p>
            <NumeroError>404</NumeroError>
            <TextError>Oups! La page que vous demandez n'existe pas.</TextError>
            <LinkError to='/'>Retourner à la page d'accueil</LinkError>
            
        </ErrorContainer>
    )
}

export default Error