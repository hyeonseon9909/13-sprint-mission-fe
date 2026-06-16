import { useEffect, useState } from "react";
import 

const BASE_URL = "https://panda-market-api.vercel.app/api/products";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);
  return (
    <ul>
      {products.map((item) => (
        <li key={item.id}>
          <div>{item.name}</div>
          <div>{item.price}원</div>
          <div>{item.favoriteCount}</div>
        </li>
      ))}
    </ul>
  );
}
