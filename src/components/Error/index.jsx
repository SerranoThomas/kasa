import { Link } from "react-router-dom";

function Error(){
    return(
        <div className="kasa-error__container">
            <p className="kasa-error__container__number">404</p>
            <p className="kasa-error__container__text">Oups! La page que vous demandez n'existe pas.</p>
            <p className="kasa-error__container__link"><Link to='/'>Retourner à la page d'accueil</Link></p> 
        </div>
    )
}

export default Error