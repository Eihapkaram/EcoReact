import React from "react";
import { useParams } from "react-router-dom";
import Products from "/src/Veiwes/Products";
import { getProduct, add } from "/src/Redux/Slices/ProductSlice";
import { addCart } from "/src/Redux/Slices/CartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
function Home() {
  const { id } = useParams();
  const [name, setName] = useState("eihap");
  const usedis = useDispatch();
  const product = useSelector((state) => state.pro.items);
  const [last, setLast] = useState("karam");
  useEffect(() => {
    usedis(getProduct());
  }, []);

  return (
    <div>
      <Products products={product} />
    </div>
  );
}

export default Home;
