import { useState } from "react";

function Nav(params) {
    const [visibility,setVisibility]=useState(false)


    return(
       <header>
                <div>
                    <input type="text" />
                    <i class='bx bx-search-alt-2'></i>
                </div>
                <nav>
                    <span>
                        <i class='bx bx-menu'></i>
                    </span>
                    <ul>
                        <li>Inicio</li>
                        <li>Sobre mi</li>
                        <li>Destinos</li>
                        <li>Gastronomia</li>
                        <li>Relax</li>
                        <li>Videos</li>
                    </ul>
                </nav>
                <div>
                    <i class='bx bxl-instagram'></i>
                    <i class='bx bxl-facebook'></i>
                    <i class='bx bxl-pinterest-alt'></i>
                    <i class='bx bxl-twitter'></i>
                </div>
       </header>
                
       
    )
}
export default Nav;