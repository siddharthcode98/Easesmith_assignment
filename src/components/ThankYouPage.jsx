import { useNavigate, useLocation } from "react-router-dom";
import image from "../assets/plantingImage.png";
import { useEffect } from "react";

export default function ThankYouPage() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  //handles scroll to top when user enters into this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <div className="thankyou-image-container">
        <h1>Thank you.....!!!</h1>
        <p>
          <em>“A beautiful plant is like having a friend around the house.”</em>
          <br />
          <strong>– Beth Ditto</strong>
        </p>
        <img src={image} alt="plating image" className="thankyou-image" />
        <button
          type="button"
          className="continue-shopping"
          onClick={handleClick}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
