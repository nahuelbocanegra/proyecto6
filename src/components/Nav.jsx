import { useState } from "react";
import { BrowserRouter as Route , Router , Routes , Link} from "react-router-dom";


import Inicio from "../pages/Inicio";
import Gastronomia from "../pages/Gastronomia";
import Relax from "../pages/Relax";
import Videos from "../pages/Videos";
import SobreMi from "../pages/SobreMi";
import Destinos from "../pages/Destinos";

function Nav(params) {
    const [visibility,setVisibility]=useState(false)


    return(
        
            <header>
                        <div className="inputSearch">
                            <span>
                                <input type="text" placeholder="Buscar"/>
                                <i className='bx bx-search-alt-2'></i>
                            </span>
                        </div>
                        <nav>
                            
                            <i onClick={()=>{setVisibility(!visibility)}} className='bx bx-menu'></i>
                            
                        <ul className={`${visibility? " ":"visiblity-var"}`}>

                                <li>
                                    <Link to="/">Inicio</Link>
                                </li>
                                <li>
                                    <Link to="/home/SobreMi">Sobre Mi</Link>
                                </li>
                                <li>
                                    <Link to="/home/Destinos">Destinos</Link>
                                </li>
                                <li>
                                    <Link to="/home/Gastronomia">Gastronomia</Link>
                                </li>
                                <li>
                                    <Link to="/home/Relax">Relax</Link>
                                </li>
                                <li>
                                    <Link to="/home/Videos">Videos</Link>
                                </li>
                                
                            </ul>
                        </nav>

                            
                        <div className="Social">
                            <i className='bx bxl-instagram'></i>
                            <i className='bx bxl-facebook'></i>
                            <i className='bx bxl-pinterest-alt'></i>
                            <i className='bx bxl-twitter'></i>
                        </div>
            </header>
   
      
       
    )
}
export default Nav;