import Card from 'react-bootstrap/Card'
import { CartContext } from '../contexts/CartContext'
import { useContext } from 'react'

export const ItemDetail = ({item}) => {
    const {onAdd} = useContext(CartContext)
    
    const add = (quantity) => {
        onAdd(item, quantity)
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.description}</Card.Subtitle>
                <Card.Text>{item.fulldescription}</Card.Text>
                <Card.Text>{item.stock}</Card.Text> 
                <ItemCounter onAdd={add} stock={item.stock} initial={1}/>
            </Card.Body>
        </Card>
    )
}