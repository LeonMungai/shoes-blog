import React from "react";
import "./ArticleCard.css";
import { Section } from "lucide-react";

export const ArticleCard = () => {
  return (
    <div className="ArticleCard-container">
      <img
        src="https://images.unsplash.com/photo-1584386450584-c6d766612a45?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5pa2UlMjBhZjF8ZW58MHx8MHx8fDA%3D"
        alt="ArticleCard Image"
        className="ArticleCard-img"
      />
      <h1 className="ArticleCard-title">Shoes Haven</h1>
      <p className="ArticleCard-description">
        This is where <strong>Footwear</strong> designs meet{" "}
        <strong>Comfort</strong>
      </p>
      <a href="about" className="ArticleCard-btn">
        View More
      </a>
    </div>
  );
};

export default ArticleCard;
