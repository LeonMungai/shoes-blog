import { useParams } from "react-router-dom";
import "./ArticleDetail.css";
import mockData from "../../data/articles.json";

export const ArticleDetail = () => {
  const { slug } = useParams();
  const data = JSON.parse(JSON.stringify(mockData));
  const article = data.find((article) => article.slug === slug);

  return (
    <div className="container">
      <div className="card">
        <img src={article.image} alt={article.slug} />
        <div className="body">
          <h2 className="title">{article.title}</h2>
          <p className="description">{article.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
