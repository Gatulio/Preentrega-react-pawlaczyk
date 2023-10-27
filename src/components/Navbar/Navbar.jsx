import { CartWidget } from "../CartWidget"
import {BsFillCartFill} from "react-icons/bs"
import "./navbar.css"

export const Navbar = () => {
    
    return(
        <>
            <nav className="nav">
                <div>Comercio</div>
                <ul className="ul">
                    <li>Inicio</li>
                    <li>Lista</li>
                    <li>Contacto</li>
                </ul>
                <CartWidget icon={<BsFillCartFill/>} />
            </nav>
        </>
    )
}