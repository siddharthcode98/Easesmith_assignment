import propTypes from "prop-types";
import { FiHeart } from "react-icons/fi";
import fiveStar from "../assets/fiveStar.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ModalContext } from "../context.js";

const ProductListItem = ({ details }) => {
  const { thumbnail, commonName, sunlight } = details;
  const { isOpen, setModal, setProductObj } = useContext(ModalContext);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/thankyou");
    setProductObj(details);
  };
  const handleModal = () => {
    setModal(!isOpen);
    setProductObj(details);
  };
  return (
    <div>
      <div
        className="product-item-top"
        style={{ backgroundImage: `url(${thumbnail}) ` }}
      >
        <div className="heart-container">
          <FiHeart />
        </div>
        <button
          className="view-product-btn"
          type="button"
          onClick={handleClick}
        >
          View Product
        </button>
      </div>
      <div className="product-item-bottom">
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
        <div className="product-item-button-container">
          <div className="add-to-cart">
            <button onClick={handleModal}>Add to Cart</button>
          </div>

          <div className="buy-on-rent">
            <button>Buy on Rent </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductListItem.propTypes = {
  details: propTypes.shape({
    commonName: propTypes.string.isRequired,
    thumbnail: propTypes.string.isRequired,
    sunlight: propTypes.array.isRequired,
  }),
};

export default ProductListItem;
