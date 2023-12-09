import { useState } from "react"

export const ItemCounter = ({ onAdd, stock, initial}) => {
    const [count, setCount] = useState(initial)

    const handleIncrease = () => {
        if (stock > count) {
            setCount((prev) => prev + 1)
        }
    }

    const handleDecrease = () => {
        if (count > 1) {
            setCount((prev) => prev - 1)
        }
    }

    const handleAdd = () => {
        onAdd(count)
        setCount(initial)
    }

    return (
        <>
            <br />
            <br />
            <div style={{display: flex}}>
                <div onClick={handleDecrease}>-</div>
                <mark>{count}</mark>
                <div onClick={handleIncrease}>+</div>
            </div>
            <br />
            <button onClick={handleAdd}>Agregar</button>
        </>
    )
}