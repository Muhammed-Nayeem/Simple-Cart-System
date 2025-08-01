const Button = ({ children, product, addToCartHandler }) => {
  return (
    <>
      <button
        onClick={() => addToCartHandler(product)}
        className="bg-green-600 text-white px-2 py-1 rounded-md cursor-pointer hover:bg-green-700 mt-4"
      >
        {children}
      </button>
    </>
  );
};

export default Button;
