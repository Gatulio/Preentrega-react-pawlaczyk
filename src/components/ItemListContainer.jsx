import Container from 'react-bootstrap/Container'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from './ItemList'
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'

export const ItemListContainer = (props) => {
    const [items, setItems] = useState([])

    const {id} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const refCollection = !id
            ? collection(db, "items")
            : query(collection(db, 'items'), where('categoryId', '==', id))
        getDocs(refCollection).then((snapshot) => {
            if (snapshot.size === 0) console.log('sin resultados')
            else
                setItems(
                    snapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data()}
                    })
                )
        })
    }, [id])

    return (
        <Container>
            {props.greeting}
            <ItemList items={items}/>
        </Container>
    )
}