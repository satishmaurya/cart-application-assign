import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import TopNav from "./modules/TopNav";
import CartList from "./modules/CartList";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(2);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          // comment this live json due to cors error using same as local json
          // "https://dnc0cmt2n557n.cloudfront.net/products.json",
          "/products.json",
          { headers: {"Access-Control-Allow-Origin": "*"} }
        );
        const { products } = response;
        setData(products);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <>
      <TopNav price={price} data={data} />
      <div className="container">
      {loading && <div>Loading...</div>}
        {!loading &&
          data.map((item) => (
            <CartList
              id={item.id}
              productName={item.title}
              productDesc={item.desc}
              price={item.price}
              currency={item.currency}
              image={item.image}
              setPrice={setPrice}
            />
          ))}
      </div>
    </>
  );
};

export default App;
