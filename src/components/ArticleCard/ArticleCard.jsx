import { APP_ROUTES } from "../../constants";
import "./ArticleCard.css";

export const ArticleCard = (props) => {
  return (
    <div className="ArticleCard-container">
      <img
        src={props.data.image}
        alt="ArticleCard Image"
        className="ArticleCard-img"
      />
      <h1 className="ArticleCard-title">{props.data.title}</h1>
      <p className="ArticleCard-description">{props.data.content}</p>
      <a href={APP_ROUTES.ARTICLE(props.data.slug)} className="ArticleCard-btn">
        View More
      </a>
    </div>
  );
};

export default ArticleCard;
