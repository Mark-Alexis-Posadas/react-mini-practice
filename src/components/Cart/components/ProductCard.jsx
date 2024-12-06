export const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <div className="p-4 rounded shadow-custom-shadow flex flex-col items-center justify-between">
      <img
        src={product.image}
        alt={product.image}
        className="w-[100px] object-cover mb-3"
      />
      <h1 className="bold text-sm">{product.title}</h1>
      <p className="text-gray-400">{product.description}</p>
      <div className="flex items-center justify-between w-full">
        <span>{product.category}</span>
        <span>{product.price}</span>
      </div>

      <button
        className="text-white bg-green-600 p-2 rounded"
        onClick={() => handleAddToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
};
