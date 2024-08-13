import { Link } from "react-router-dom"

function Aside(){
    return(
        <aside>
            <ul>
                <li className="li-aside li-aside-uno">
                    <div>
                        <Link to={"/home/Destinos"} >Destinos</Link>
                    </div>
                </li>
                <li className="li-aside li-aside-dos">
                    <div>
                        <Link to={"/home/Gastronomia"}>Gastronomia</Link>
                    </div>
                </li>
                <li className="li-aside li-aside-tres">
                    <div>
                        <Link to={"/home/Relax"}> Relax</Link>
                    </div>
                </li>
            </ul>
        </aside>
    )
}
export default Aside