import React from "react";

export const CartModal = ({ cart, handleDeleteProduct }) => {
  return (
    <div className="w-full h-full overflow-hidden fixed top-0 flex justify-end bg-[rgba(0,0,0,0.4)]">
      <div className="bg-white p-2 h-full w-[700px] absolute r-0">
        {cart.map((item) => (
          <div key={item.id}>
            <img className="w-[100px] mb-5" src={item.image} alt={item.title} />
            <h3 className="font-bold text-md">{item.title}</h3>
            <p>{item.category}</p>
            <div className="flex items-center gap-3">
              <small>{item.quantity}</small>
              <p>{item.price}</p>
            </div>
            <button
              className="text-red-600"
              onClick={() => handleDeleteProduct(item.id)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
