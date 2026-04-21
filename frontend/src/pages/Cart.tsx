
import { useCart } from "../context/useCart";

const Cart = () => {
  const { cart, dispatch, totalPrice } = useCart();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <p className="text-gray-600">Qty: {item.quantity}</p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() =>
                    dispatch({ type: "INCREASE", payload: item.id })
                  }
                  className="px-3 py-1  text-black rounded hover:bg-green-300 transition"
                >
                  +
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "DECREASE", payload: item.id })
                  }
                  className="px-3 py-1 text-black rounded hover:bg-yellow-500 transition"
                >
                  -
                </button>
                <button
                  onClick={() => dispatch({ type: "REMOVE", payload: item.id })}
                  className="px-3 py-1 text-black rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-4">
            <h2 className="text-2xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
