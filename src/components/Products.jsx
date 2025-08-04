import { useEffect, useState } from "react";
import Article from "./Article";
import Cart from "./Cart";
import Product from "./Product";
import { addToLS, getStoredCart, removeFromLS } from "../utilities/storage";

const Products = ({ productLists }) => {
  let [cartProducts, setCartProducts] = useState([]);

  const addToCartHandler = (product) => {
    setCartProducts((prevCartProducts) => [...prevCartProducts, product]);
    addToLS(product.prodId);
  };

  // used this useEffect hook to get the data from Local-Storage which is a side-effect:
  useEffect(() => {
    let savedCart = [];
    if (productLists.length) {
      let storedCart = getStoredCart();
      storedCart.forEach((id) => {
        let product = productLists.find((singleProduct) => singleProduct.prodId === id);
        savedCart.push(product);
      });
    }
    setCartProducts(savedCart);
  }, [productLists]);

  const productRemoveHandler = (productIndex) => {
    let remainingCartProducts = cartProducts.filter((_, index) => index !== productIndex);
    setCartProducts(remainingCartProducts);
    removeFromLS(productIndex);
  };

  console.log(cartProducts);

  return (
    <section className="bg-white py-10">
      <div className="container max-w-screen-xl mx-auto">
        <Article />
        <div className="mb-4 mt-4 mx-4 xl:mx-0">
          <h1 className="border-l-4 border-l-gray-500 pl-1.5 text-lg font-bold text-gray-500">
            Available Products: {productLists.length}
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mx-4 xl:mx-0">
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {productLists.map((product) => (
              <Product
                key={product.prodId}
                product={product}
                addToCartHandler={addToCartHandler}
              />
            ))}
          </div>
          <div className="w-full md:w-1/3 border border-gray-100 rounded-md p-4">
            <Cart
              cartProducts={cartProducts}
              productRemoveHandler={productRemoveHandler}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
