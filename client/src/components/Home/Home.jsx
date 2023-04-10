import React from "react";
import GridCards from "../GridCards.jsx/GridCards";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section>
        <button>Recetas</button>
        <Link to="/addRecipe">
          <button>Crea tu receta</button>
        </Link>
      </section>
      <section>
        <GridCards />
      </section>
    </div>
  );
};

export default Home;
