import Container from 'react-bootstrap/Container'
import { products } from "../data/products"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)

    const {id} = useParams()
    
    useEffect(() => {
        const itemPromise = new Promise((res) => {
            setTimeout(() => {
                res(products)
            }, 2000)
        })

        itemPromise.then((response) => {
            const filterById = response.find(
                (item) => item.id === Number(id))
            setItem(filterById)
        })
    }, [id])
    
    return (
        <Container>
            {item ? <ItemDetail item={item}/> : <div>Cargando</div>}
        </Container>
    )
}