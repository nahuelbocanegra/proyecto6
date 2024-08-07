import { useState } from "react";

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
                    
                    <i className='bx bx-menu'></i>
                    
                    <ul>
                        <li>Inicio</li>
                        <li>Sobre mi</li>
                        <li>Destinos</li>
                        <li>Gastronomia</li>
                        <li>Relax</li>
                        <li>Videos</li>
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