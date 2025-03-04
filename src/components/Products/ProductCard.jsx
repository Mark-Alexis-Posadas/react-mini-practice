const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-700">${product.price}</p>
        <p className="text-gray-500">{product.category}</p>
        <p className="text-gray-500">Stock: {product.stock}</p>
        <p className="text-yellow-500">Rating: {product.rating} ⭐</p>
      </div>
    </div>
  );
};

export default ProductCard;
