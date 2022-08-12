import { useState, useEffect, memo } from "react";
import { apiGetProductsAll } from "../../assets/api/api";

import RenderTip from "../../RenderTip";

// @flow
type ProductType = {
  id: String,
  category: String,
  description: String,
  imageUrl: String,
  origin_price: String,
  price: String,
  title: String,
  unit: String,
};
const initCategory = ["全部商品"];
const arrayPush = (prev, item) => {
  return [...prev, item];
};

const Products = () => {
  const [category, setCategory] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    apiGetProductsAll().then((res) => {
      if (res.data.success) {
        const data: ProductType[] = res.data.products;
        data.sort((a, b) => {
          return ("" + a.category).localeCompare(b.category);
        });
        const categorys = Array.from(new Set(data.map((item) => item.category)));
        setCategory(categorys);
        setList(data);
      }
    });
  }, []);

  return (
    <div className="container">
      <RenderTip name="Products" />
      <div className="row">
        <div className="col-3">
          {category.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
        <div className="col-9">
          {list.map((item) => (
            <div key={item.id}>{item.title}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Products, () => true);
