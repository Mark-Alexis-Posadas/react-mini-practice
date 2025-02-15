import React from "react";

export const CartModal = ({ cart, handleDeleteProduct, setIsToggleCart }) => {
  return (
    <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.4)] z-50">
      <div className="bg-white rounded-lg w-[700px] max-h-[80vh] overflow-y-auto p-6 shadow-lg">
        <button
          className="absolute top-4 right-4 text-xl font-semibold text-gray-600 hover:text-gray-900"
          onClick={() => setIsToggleCart(false)}
        >
          X
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center text-lg">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <img
                  className="w-[100px] h-[100px] object-cover rounded-md"
                  src={item.image}
                  alt={item.title}
                />
                <div className="flex-1 ml-4">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <div className="flex items-center justify-between mt-2">
                    <small className="text-sm">{item.quantity} x</small>
                    <p className="text-sm font-bold">${item.price}</p>
                  </div>
                </div>
                <button
                  className="text-red-600 font-semibold text-sm hover:text-red-800 transition duration-300"
                  onClick={() => handleDeleteProduct(item.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="flex justify-end mt-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
