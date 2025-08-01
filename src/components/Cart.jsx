import CartProduct from "./CartProduct";

const Cart = ({ cartProducts, productRemoveHandler }) => {
  return (
    <div className="bg-white flex flex-col gap-y-4">
      <h1 className="border-l-4 border-l-gray-500 pl-1.5 text-lg font-bold text-gray-500">
        Products In Cart : {cartProducts.length}
      </h1>
      {cartProducts.length === 0 ? (
        <p className="text-base text-gray-800 font-medium">
          No products added in cart!
        </p>
      ) : (
        <ul>
          {cartProducts.map((product, idx) => (
            <CartProduct
              key={idx}
              product={product}
              idx={idx}
              productRemoveHandler={productRemoveHandler}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
