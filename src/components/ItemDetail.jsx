import Card from 'react-bootstrap/Card'

export const ItemDetail = ({item}) => {
    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.description}</Card.Subtitle>
                <Card.Text>{item.fulldescription}</Card.Text>
            </Card.Body>
        </Card>
    )
}