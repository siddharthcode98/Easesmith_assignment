import propTypes from "prop-types";

const NurseryListItem = ({ details }) => {
  return (
    <li className="nursery-list-item">
      <img src={details.thumbnail} alt="thumbnail-image" />
      <p>{details.commonName}</p>
    </li>
  );
};

NurseryListItem.propTypes = {
  details: propTypes.shape({
    commonName: propTypes.string.isRequired,
    thumbnail: propTypes.string.isRequired,
  }),
};

export default NurseryListItem;
