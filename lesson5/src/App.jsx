import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ProductList } from "./components/ProductList";
import { Basket } from "./components/Basket";
import { BasketItem } from "./components/BasketItem";

function App() {
  const [count, setCount] = useState(0);

  const [basket, setBasket] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 101,
      title: "Psychology",
      price: "40",
      photo: "https://images.booksense.com/images/551/458/9781465458551.jpg",
    },
    {
      id: 102,
      title: "Biology",
      price: "25",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsTmviKt3WfLAYOObkp0CM3tMDLk61Ql6u7w&s",
    },
    {
      id: 103,
      title: "Poetry",
      price: "44",
      photo:
        "https://www.adrionltd.com/111216-thickbox_default/the-poetry-book-big-ideas-simply-explained.jpg",
    },
    {
      id: 104,
      title: "Sociology",
      price: "15",
      photo:
        "https://m.media-amazon.com/images/I/81z-Pj9NxjL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 105,
      title: "Philosophy",
      price: "18",
      photo: "https://m.media-amazon.com/images/I/71DeE5ksYEL._UX250_.jpg",
    },
    {
      id: 106,
      title: "Politics",
      price: "55",
      photo:
        "https://educationalbookshop.com/cdn/shop/products/polbook_1024x1024@2x.jpg?v=1664452905",
    },
    {
      id: 107,
      title: "Religions",
      price: "15",
      photo: "https://images.booksense.com/images/433/408/9781465408433.jpg",
    },
    {
      id: 108,
      title: "Phisics",
      price: "10",
      photo:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1569197039l/51380777.jpg",
    },
  ]);
  const moveToCart = (id) => {
    let found = products.find((x) => x.id == id);
    let basketItem = basket.find((x) => x.id == id);

    if (basketItem) {
      setBasket(
        basket.map((x) => (x.id == id ? { ...x, count: x.count + 1 } : x))
      );
    } else {
      setBasket([...basket, { ...found, count: 1 }]);
    }
  };

  const decItem=(id)=>{
    let found = products.find((x) => x.id == id);
    let basketItem = basket.find((x) => x.id == id);
    setBasket(
      basket.map((x=>
        x.id===id && x.count>1 ? {...x,count:x.count-1}:x))
    );

  }
  const delItem=id=>{
    setBasket(basket.filter(item => item.id !== id));
   }
  
  return (
    <>
      <div className="row">
        <ProductList items={products} onMove={moveToCart} />
        <Basket items={basket} onAdd={moveToCart} onDecrease={decItem} onDelete={delItem}  />
        
      </div>
    </>
  );
}

export default App;
