import { BsFillCartFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"


export const CartWidget = () => {

    // const { items } = useContext(CartContext)

    // const total = items.reduce((acumulator, valorActual) => acumulator + valorActual.quantity, 0)
    
    return (
        <Link to='/cart'>
            <img src={<BsFillCartFill/>} alt="carro" width={100} />
            <div>TOTAL</div>
        </Link>
 )
}