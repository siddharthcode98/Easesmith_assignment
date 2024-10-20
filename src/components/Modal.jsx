import { useContext } from "react";
import fiveStar from "../assets/fiveStar.png";
import { IoCloseCircleOutline } from "react-icons/io5";
import { ModalContext } from "../context.js";

export default function Modal() {
  const { isOpen, setModal, productObj } = useContext(ModalContext);
  const { thumbnail, commonName, sunlight } = productObj;
  const handleModal = () => {
    setModal(!isOpen);
  };
  return (
    <div>
      <div className="modal-overlay"></div>
      <div className="modal">
        <button
          onClick={handleModal}
          type="button"
          className="modal-closing-btn"
        >
          <IoCloseCircleOutline
            size={30}
            style={{ stroke: "var(--green-color-dark)" }}
          />
        </button>
        <p className="your-cart">Your Cart</p>
        <div className="modal-product">
          <img
            src={thumbnail}
            alt="thumbnail-modal"
            className="thumbnail-modal"
          />

          <div className="modal-text">
            <h2>{commonName}</h2>
            <p className="sunlight-type">{sunlight.join()}</p>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <img src={fiveStar} alt="five-star-image" />
              <p className="rating">4.9</p>
            </div>
            <p className="price">
              <s className="old-price">Rs.499/-</s>
              Rs.399/-
            </p>
            <button type="button">Proceed</button>
          </div>
        </div>
      </div>
    </div>
  );
}
