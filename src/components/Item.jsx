import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export const Item = ({item}) => {
    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.category}</Card.Subtitle>
                <Card.Text>{item.description}</Card.Text>
                <Link to={`/item/${item.id}`}>
                    <Button variant="primary">Mas detalle</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}