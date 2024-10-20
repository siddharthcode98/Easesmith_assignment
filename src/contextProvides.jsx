import { useState } from "react";
import { ModalContext } from "./context.js";

// eslint-disable-next-line react/prop-types
export default function ContextProvider({ children }) {
  const [isOpen, setModal] = useState(false);
  const [productObj, setProductObj] = useState({});
  return (
    <ModalContext.Provider
      value={{ isOpen, setModal, productObj, setProductObj }}
    >
      {children}
    </ModalContext.Provider>
  );
}
