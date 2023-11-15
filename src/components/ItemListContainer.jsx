import Container from 'react-bootstrap/Container'
import { products } from "../data/products"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from './ItemList'

export const ItemListContainer = (props) => {
    const [items, setItems] = useState([])

    const {id} = useParams()
    
    useEffect(() => {
        const itemPromise = new Promise((res) => {
            setTimeout(() => {
                res(products)
            }, 2000)
        })

        itemPromise.then((response) => {
            if (!id) {
                setItems(response)
            } else {
                const filterByCategory = response.filter(
                    (item) => item.category === id
                )
                setItems(filterByCategory)
            }
        })
    }, [id])
    
    return (
        <Container>
            {props.greeting}
            <ItemList items={items}/>
        </Container>
    )
}