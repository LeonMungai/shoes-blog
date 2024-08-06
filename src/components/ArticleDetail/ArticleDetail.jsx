import React from "react";
import "./ArticleDetail.css";

export const ArticleDetail = () => {
  return (
    <div className="ArticleDetail-container">
      <img
        src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmlrZSUyMGFmMXxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
      />
      <h1 className="ArticleDetail-title">AirForce1</h1>
      <p className="ArticleDetail-description">
        This shoe offers flexibility and can be rocked with any outfit
      </p>

    </div>
  );
};

export default ArticleDetail;
