import React from "react";

export const Home = () => {
  return (
    <div>
      <h1 className="Home-title">Shoes Haven</h1>
      <img
        src="https://images.unsplash.com/photo-1648210882746-fd5e312d3532?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmlrZSUyMGFmMXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Home-image"
        className="Home-img"
      />
      <footer>
      <i class="fab fa-facebook-square"></i>
      <i class="fab fa-twitter-square"></i>
      <i class="fab fa-pinterest-square"></i>
      <i class="fab fa-youtube-square"></i>
      </footer>
    </div>
  );
};

export default Home;
