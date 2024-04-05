import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AnimatePresence, motion } from "framer-motion";
import useShoppingCartStore, { Item } from "../../store/shoppingCartStore";
import cartImg from "../../assets/images/icon-cart.svg";
import trashcanImg from "../../assets/images/icon-delete.svg";

function ShoppingCartItem({ item }: { item: Item }) {
  const removeItemFromCart = useShoppingCartStore((state) => state.removeItem);

  const handleRemoveItemFromCart = () => removeItemFromCart(item);

  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.3,
        bounce: 0.6,
        mass: 0.5,
        type: "spring",
      }}
      className="flex w-full items-center justify-between"
    >
      <div className="flex items-center gap-x-4">
        <img
          src={item.image}
          alt="Product thumbnail"
          className="h-[52px] w-[52px] rounded-md"
        />
        <div className="flex flex-col gap-x-2 text-sm">
          <p>{item.name}</p>
          <p>
            {`$${item.price} x ${item.amount}`}{" "}
            <span className="ml-2 font-bold">{`$${item.price * item.amount}`}</span>
          </p>
        </div>
      </div>
      <button type="button" onClick={handleRemoveItemFromCart}>
        <img src={trashcanImg} alt="Remove item" />
      </button>
    </motion.div>
  );
}

function ShoppingCart() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const shoppingCartItems = useShoppingCartStore((state) => state.items);

  const handleCartClick = () => setIsCartOpen((prev) => !prev);

  return (
    <div className="z-50 md:relative">
      <button
        type="button"
        onClick={handleCartClick}
        className="group relative rounded-full p-3"
      >
        {shoppingCartItems.length > 0 && (
          <div
            className="
              group-hover: absolute right-1 top-2 z-50 h-fit scale-125 rounded-full bg-userOrange px-2 text-[8px] font-bold              text-white"
          >
            {shoppingCartItems.length}
          </div>
        )}
        <img
          src={cartImg}
          alt="Shopping cart"
          className="group-hover:brightness-50"
        />
      </button>
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, type: "spring" }}
            className="
          absolute left-1/2 top-16 w-[94%] -translate-x-1/2 overflow-hidden rounded-md bg-white
          shadow-2xl md:-left-14 md:top-16 md:w-[350px] lg:left-6"
          >
            <h2 className="px-4 py-3 font-bold">Cart</h2>
            <hr />
            <div
              className={`
            flex h-44 w-full flex-col items-center justify-center gap-y-4 ${
              !shoppingCartItems.length ? "h-44" : "h-auto px-4 py-8"
            }`}
            >
              {!shoppingCartItems.length ? (
                <p>Your cart is empty.</p>
              ) : (
                <>
                  {shoppingCartItems.map((x) => (
                    <ShoppingCartItem key={uuidv4()} item={x} />
                  ))}
                  <button
                    type="button"
                    className="w-full rounded-lg bg-userOrange py-3 text-white"
                  >
                    Checkout
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ShoppingCart;
