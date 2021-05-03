import React from "react"
import Navbar from './Navbar'
import Booking from "../appointment/Booking"
import liImg from '../images/li.jpg'
import raImg from '../images/ra.jpg'




const Home = () => {


const landing = () => (
    <div id="home">
    <div className="landing">
        <div className="home-wrap">
            <div className="home-inner"></div>
        </div>
    </div>

    <div className="caption text-center">
        <h3>Bem vindo à</h3>
        <h3>Clínica Marques</h3>
        <a className="btn btn-outline-light btn-lg" href="#resources">Get started</a>
    </div>
    </div>
)

const features = () => (
    <div id="features" className="offset">
        <div className="jumbotron">
            <div className="narrow">
                <div className="col-12">
                    <h3 className="heading">Quem somos</h3>
                    <div className="heading-underline"></div>
                </div>

                <div className="row text-center">

                    <div className="col-md-12">
                        <div className="feature">
                            {/* <i className="fas fa-play-circle fa-4x"></i> */}
                            <h3>hey ho</h3>
                            <p>Lorem ipsum dolor sit amet,
                                 consectetur adipiscing elit,
                                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p>Lorem ipsum dolor sit amet,
                                 consectetur adipiscing elit,
                                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p>Lorem ipsum dolor sit amet,
                                 consectetur adipiscing elit,
                                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    
                    </div>

                </div>
            </div>
        </div>
    
)


const fixedBack = () => (
    <div id="resources" className="offset">
        <div className="fixed-background">
        
        <div className="row dark text-center">
                <div className="col-12">
                    <h3 className="heading">Serviços</h3>
                    <div className="heading-underline"></div>
                </div>

                <div className="row text-center">

                    <div className="col-md-4">
                        <div className="feature">
                            <i className="fas fa-play-circle fa-4x"></i>
                            <h3>Periodontia</h3>
                            <p>Lorem ipsum dolor sit amet,
                                 consectetur adipiscing elit,
                                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature">
                            <i className="fas fa-play-circle fa-4x"></i>
                            <h3>Periodontia</h3>
                            <p>Lorem ipsum dolor sit amet,
                                 consectetur adipiscing elit,
                                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature">
                            <i className="fas fa-play-circle fa-4x"></i>
                            <h3>Periodontia</h3>
                            <p>Lorem ipsum dolor sit amet,
                                 consectetur adipiscing elit,
                                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>


            </div>
        </div>
            
            <div className="fixed-wrap">
            <div className="fixed"></div>
        </div>
        </div>
        
    </div>
)


const prof = () => (
    <div id="prof" className="offset">

    <div className="jumbotron">
        <div className="col-12">
            <h3 className="heading">Profissionais</h3>
            <div className="heading-underline"></div>
        </div>

        <div className="row">
            <div className="col-md-6">
            <div className="row">
                <div className="col-md-4">
                    <img src={raImg} alt="Dr. Luiz Alberto Matozo"></img>
                </div>
                <div className="col-md-8">
                    <h5>Dr. Ramon Marques</h5>
                    <hr className="prof-hr"></hr>
                    <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p> 
                </div>
            </div>
            </div>

            <div className="col-md-6">
            <div className="row">
                <div className="col-md-4">
                    <img src={liImg} alt="Dra. Rosa Maria Matozo"></img>
                </div>
                <div className="col-md-8">
                    <h5>Dra. Linda Marques</h5>
                    <hr className="prof-hr"></hr>
                    <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>           
                </div>
            </div>
            </div>
        </div>

    </div>

    </div>

)


const appointment = () => (
    <div id="appointment" className="offset">
        <div className="fixed-background">
        
        <div className="dark text-center">
                <div className="col-12">
                    <h3 className="heading">Marque sua consulta</h3>
                    <div className="heading-underline"></div>
                </div>

                

                <div className="col-md-12">

                    {Booking()}

                   
                </div>

                 
 
        </div>
            
            <div className="fixed-wrap">
            <div className="smile"></div>
        </div>
        </div>
        
    </div>
)



const footer = () => (
    <div id="contact" className="offset">

    <footer>
    <div className="row justify-content-center">
        <div className="col-md-5 text-center">
            <strong>Contact Info</strong>
            <p>(51) 3343-46-01</p>
            <br></br>
            <p>email@email.com</p>
        </div>
    </div>
    </footer>

    </div>
)




    return (
        <div>
            
          {Navbar()}  
          {landing()}
          {features()}
          {fixedBack()}
          {prof()}
          {appointment()}
          {footer()}
            
        </div>

        
    )
}

export default Home