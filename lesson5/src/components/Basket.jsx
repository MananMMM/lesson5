import { BasketItem } from "./BasketItem"
export const Basket=({items,onAdd,onDecrease,onDelete})=>{
    return <div >
        <h2>Basket</h2>
        <button className="sale">Sale</button>
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Subtotal</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>

{
items.map(elm=><BasketItem key={elm.id} {...elm}  onAdd={onAdd} onDecrease={onDecrease} onDelete={onDelete}
/>)
}
            </tbody>
        </table>
    </div>
}