import React from "react"
import { Link, withRouter } from "react-router-dom";
import "../fixed.css";
import "../styles.css";




const Navbar = () => (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <div className="container-fluid">
                <a className="navbar-brand ef" href="/#home">LOGO</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a
                                className="nav-link"
                                //style={isActive(history, "/shop")}
                                href="#home"
                            >
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link"
                                //style={isActive(history, "/shop")}
                                href="#features"
                            >
                                Quem somos
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link"
                                //style={isActive(history, "/shop")}
                                href="#resources"
                            >
                                Serviços
                            </a>
                        </li>

                        
                    </ul>
                   
                </div>
            </div>        
        </nav>


    
        

    )


export default Navbar;