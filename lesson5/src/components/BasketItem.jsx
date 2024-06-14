export const BasketItem=({title,price,id,count,onAdd,onDecrease,onDelete})=>{
    return <tr>
            <td>{title}</td>
            <td>{price}</td>
            <td> {count}</td>
            <td>{price*count}</td>
            <td >
                <button className="buttons" onClick={()=>onAdd(id)}>+</button>
                <button className="buttons" onClick={()=>onDecrease(id)}>-</button>
                <button className="button"onClick={()=>onDelete(id)}>x</button>
               
            </td>
        </tr>
    
}