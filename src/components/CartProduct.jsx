const CartProduct = ({ product, idx, productRemoveHandler }) => {
  return (
    <li className="bg-white shadow rounded p-2 mb-4 flex flex-col sm:flex-row justify-between gap-4">
      <h3>
        {idx + 1}. {product.prodName}
      </h3>
      <p>Price: ${product.price}</p>
      <button
        onClick={() => productRemoveHandler(idx)}
        className="bg-red-600 text-white text-sm px-2 py-0.5 rounded-md cursor-pointer hover:bg-red-700"
      >
        Remove
      </button>
    </li>
  );
};

export default CartProduct;
