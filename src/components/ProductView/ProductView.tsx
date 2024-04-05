import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import useShoppingCartStore from "../../store/shoppingCartStore";
import ProductCarousel from "./ProductCarousel";
import minusImg from "../../assets/images/icon-minus.svg";
import plusImg from "../../assets/images/icon-plus.svg";
import shoppingCartImg from "../../assets/images/icon-cart.svg";
import shoeImg1Thumbnail from "../../assets/images/image-product-1-thumbnail.jpg";

function ProductView() {
  const [selectedProductAmount, setSelectedProductAmount] = useState(0);
  const [shoppingCartIsClicked, setShoppingCartIsClicked] = useState(false);
  const addProductToShoppingCart = useShoppingCartStore(
    (state) => state.addItem,
  );

  const handleProductAmountIncrease = () =>
    setSelectedProductAmount((state) => (state <= 4 ? state + 1 : state));

  const handleProductAmountDecrease = () =>
    setSelectedProductAmount((state) => (state > 0 ? state - 1 : state));

  const handleAddProductToShoppingCart = () => {
    if (selectedProductAmount > 0) {
      addProductToShoppingCart({
        image: shoeImg1Thumbnail,
        name: "Fall Limited Edition Sneakers",
        amount: selectedProductAmount,
        price: 125,
      });

      setShoppingCartIsClicked(true);
      setTimeout(() => {
        setShoppingCartIsClicked(false);
      }, 2000);
    }
  };

  return (
    <div className="my-2 lg:my-20 lg:flex">
      <ProductCarousel />
      <div
        className="
        mx-auto flex flex-col justify-center px-6 pb-20 pt-6 md:w-4/5 md:max-w-none md:flex-row 
        md:gap-x-10 md:px-12 md:py-6 lg:w-1/2 lg:max-w-[447px] lg:flex-col lg:justify-center lg:gap-x-0 lg:p-0"
      >
        <div className="md:w-2/3 lg:w-full">
          <p className="text-sm font-bold text-userOrange">SNEAKER COMPANY</p>
          <h1 className="mt-4 text-4xl font-bold text-userVeryDarkBlue">
            Fall Limited Edition Sneakers
          </h1>
          <p className="mt-8 text-black/80">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-between">
            <div className="flex items-center gap-x-4">
              <h2 className="text-3xl font-bold text-userVeryDarkBlue">
                $125.00
              </h2>
              <div className="leading-0 h-fit rounded-md bg-userPaleOrange px-2 py-[2px] font-bold text-userOrange md:px-2 md:py-1">
                <p>50%</p>
              </div>
            </div>
            <h2 className="font-bold text-userGrayishBlue line-through md:mt-2 lg:basis-full">
              $250.00
            </h2>
          </div>
        </div>
        <div className="mt-8 gap-x-4 *:rounded-lg *:p-4 md:flex md:w-1/3 md:flex-col md:justify-end md:gap-y-2 md:*:p-3 lg:w-full lg:flex-row">
          <div className="flex justify-between bg-userLightGrayishBlue font-bold shadow-md shadow-gray-200 lg:w-1/3">
            <button
              type="button"
              onClick={handleProductAmountDecrease}
              className="hover:brightness-125"
            >
              <img src={minusImg} alt="Decrease amount" />
            </button>
            <p>{selectedProductAmount}</p>
            <motion.button
              type="button"
              onClick={handleProductAmountIncrease}
              className="hover:brightness-125"
            >
              <img src={plusImg} alt="Increase amount" />
            </motion.button>
          </div>
          <motion.button
            type="button"
            whileTap={{ scale: 0.98 }}
            onClick={handleAddProductToShoppingCart}
            className="
            mt-4 flex w-full items-center justify-center gap-x-4 overflow-hidden bg-userOrange text-white shadow-2xl shadow-userOrange/80 hover:brightness-110 
            md:mt-0 md:flex-row
            lg:w-2/3
            "
          >
            <div className="relative">
              <motion.img
                src={shoppingCartImg}
                alt="Shopping cart"
                animate={{
                  y: shoppingCartIsClicked ? -50 : 0,
                }}
                transition={{ duration: 0.5, type: "spring", damping: 20 }}
                className="brightness-[10] filter"
              />
              {shoppingCartIsClicked && (
                <motion.div
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.3,
                    type: "spring",
                    bounce: 0.5,
                  }}
                  className="absolute top-0 flex h-full w-full items-center justify-center"
                >
                  <FontAwesomeIcon icon={faCheck} />
                </motion.div>
              )}
            </div>
            <p>Add to cart</p>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
