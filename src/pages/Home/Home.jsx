import ArticleCard from "../../components/ArticleCard/ArticleCard";
import mockData from "../../data/articles.json";
import "./Home.css";
export const Home = () => {
  const data = JSON.parse(JSON.stringify(mockData));

  return (
    <div className="articles">
      {data.map((data, index) => (
        <ArticleCard key={index} data={data} />
      ))}
    </div>
  );
};

export default Home;
