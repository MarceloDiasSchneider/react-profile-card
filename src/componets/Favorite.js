function Favorite(props) {
  let starIcon = props.isFavorite ? "star-filled.svg" : "star-empty.svg";

  return (
    <img
      src={`../../images/${starIcon}`}
      className="card--favorite"
      onClick={props.handleClick}
      alt="star"
    />
  );
}

export default Favorite;
