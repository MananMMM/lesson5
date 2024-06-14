export const ProductItem =({title,id,price,photo,onMove})=>{
    return <div>
        <h4>Product Item </h4>
<img src={photo}></img>
<p>{title}</p>
<p> <strong>{price}$</strong></p>
<button onClick={()=>onMove(id)}>Move</button>
       
         </div>
}