import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Shop from "./components/Shop";

const INITIAL_PRODUCTS_NUMBER = 3;
const INITIAL_SHOP_NAME = "GIPPO";

export default function App() {
  const [isClicked, setIsClick] = useState(false);
  const [numOfProducts, setNumOfProducts] = useState(INITIAL_PRODUCTS_NUMBER);
  const [shopName, setShopName] = useState(INITIAL_SHOP_NAME);

  return <div key={uuidv4()} className="App">
    <header key={uuidv4()} className="App-header">
      <img key={uuidv4()} src="/logo.svg" className="App-logo" alt="logo" />
    </header>
    <hr />
    {isClicked
        ? <div key={uuidv4()} className="content">
          <button className="wideButton"
                  onClick={() => setIsClick(!isClicked)}
          >
            Repeat shopping
          </button>
          <Shop numOfProducts={numOfProducts} shopName={shopName} />
        </div>
        : <div key={uuidv4()} className="content">
          <button className="wideButton" onClick={() => {
            setIsClick(!isClicked);
            setShopName(prompt("Enter shop name:", INITIAL_SHOP_NAME));
            setNumOfProducts(prompt("Enter number of products (from 1 to 5):", INITIAL_PRODUCTS_NUMBER));
          }}>Go shopping
          </button>
        </div>
    }
  </div>
}