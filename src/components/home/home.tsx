import React from "react";
import { Link } from "react-router-dom";
import "./home.css"

const Home: React.FC = () =>{
    return(        
        <div className="menu-principal">
        <h1>Parque Aquático Sereia Velha </h1>
            <div className="collection home">
                <Link to={'menu-cliente'}className="collection-item pointer">Clientes</Link>
                <Link to={'/menu-listagens'}className="collection-item pointer">Listagens</Link>
                <Link to={'/cadastrar-hospedagem'}className="collection-item pointer">Hospedagem</Link>
            </div>
        </div>    
    )   
}
export default Home;