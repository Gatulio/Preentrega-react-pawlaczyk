import { useContext, useState } from "react"
import { Container, Table, Button, Form } from "react-bootstrap" 
import { CartContext } from "../contexts/CartContext"
import { getFirestore, collection, addDoc } from "firebase/firestore"

const initialValues = {
    name: '',
    phone: '',
    email: ''
}

export const Cart = () => {
    const [ buyer, setBuyer] = useState({initialValues})

    const { clear, items, onRemove} = useContext(CartContext)

    const total = items.reduce(
        (acumulador, valorActual) => 
        acumulador + valorActual.quantity * valorActual.price,
        0
    )

    const handleChange = (event) => {
        setBuyer(buyer => {
            return {
                ...buyer,
                [event.target.name]: event.target.value
            }
        })
    }
    
    const sendOrder = () => {
        const order = {
            buyer,
            items,
            total
        }

        const db = getFirestore()
        const orderCollection = collection(db, 'orders')

        addDoc(orderCollection, order).then(({id}) => {
            if (id) {
                alert('Su orden: ' + id + ' se completo')
                setBuyer(initialValues)
                clear()
            }
        })
    }

    if (!items.length) {
        return <>Compra primero</>
    }
    return (
        <Container className='mt-4'>
            <h1>Carrito</h1>
            <Table striped='columns'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Imagen</th>
                        <th>Precio</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td><img src={item.pictureUrl} width={250} /></td>
                            <td>{item.price}</td>
                            <td onClick={() => onRemove(item.id)}>X</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total: {total}</td>
                    </tr>
                </tfoot>
            </Table>
            <button onClick={clear}>Vaciar Carrito</button>
            <Form>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={buyer.email} onChange={handleChange} name='email'/>  
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={buyer.name} onChange={handleChange} name='name'/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" value={buyer.phone} onChange={handleChange} name='phone'/>
            </Form.Group>
            
            <Button variant="primary" onClick={sendOrder}>
                Enviar
            </Button>
            </Form>
        </Container>
    )
}