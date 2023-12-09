import Container from 'react-bootstrap/Container'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, getDoc, doc} from 'firebase/firestore'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)

    const {id} = useParams()
    
    useEffect(() => {
        const db = getFirestore()
        const refDoc = doc(db, "items", id)

        getDoc(refDoc).then((snapshot) => {
            setItem({ id: snapshot.id, ...snapshot.data() })
        })
    }, [id])
    
    return (
        <Container>
            {item ? <ItemDetail item={item}/> : <div>Cargando</div>}
        </Container>
    )
}