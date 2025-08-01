import Button from "./Button";

const Product = ({ product, addToCartHandler }) => {
  return (
    <div className="bg-white shadow-md p-6 border border-gray-100 rounded-md">
      <h1 className="text-lg font-bold text-gray-700 mb-1">
        {product?.prodName}
      </h1>
      <p className="text-base font-medium text-gray-600 mb-1">
        Color: {product?.color}
      </p>
      <p className="text-base font-medium text-gray-600 mb-1">
        Price: ${product?.price}
      </p>
      <Button product={product} addToCartHandler={addToCartHandler}>
        Add To Cart
      </Button>
    </div>
  );
};

export default Product;
