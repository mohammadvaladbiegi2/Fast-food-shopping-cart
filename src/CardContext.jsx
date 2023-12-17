import { useContext, useState, createContext, useCallback } from "react";
import Data from "./data";

const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [data, setData] = useState(Data);

  const totalByQuantity = data.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);

  const handleQuantityChange = useCallback(
    (itemId, newQuantity) => {
      if (newQuantity >= 0) {
        setData((prevItems) => {
          return prevItems.map((item) => {
            if (item.id === itemId) {
              return { ...item, quantity: newQuantity };
            }
            return item;
          });
        });
      }
    },
    [setData]
  );

  const deleteHandel = useCallback(
    (id) => {
      let deletitem = data.filter((item) => item.id !== id);
      setData(deletitem);
    },
    [data, setData]
  );

  const contextValue = {
    data,
    handleQuantityChange,
  };
  return (
    <CardContext.Provider
      value={{ data, setData, totalByQuantity, contextValue, deleteHandel }}
    >
      {children}
    </CardContext.Provider>
  );
};

const useCardContext = () => {
  return useContext(CardContext);
};

export { CardProvider, useCardContext };
