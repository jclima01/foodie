import React from "react";
import GridCards from "../GridCards.jsx/GridCards";

const Home = () => {
  return (
    <div>
      <section>
        <button>Recetas</button>
        <button>Crea tu receta</button>
      </section>
      <section>
        <GridCards/>
      </section>
    </div>
  );
};

export default Home;
