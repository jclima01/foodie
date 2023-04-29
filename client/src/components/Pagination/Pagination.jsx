import React from "react";
import s from "./Pagination.module.css";
export default function Pagination({ recipesPerPage, recipes, pagination }) {
  const numeroDePaginas = [];
  for (let i = 1; i <= Math.ceil(recipes / recipesPerPage); i++) {
    numeroDePaginas.push(i);
  }
  return (
    <div className={s.paginationContainer}>
      {numeroDePaginas?.map((numero) => (
        <button
          key={numero}
          className={s.btn}
          onClick={() => pagination(numero)}
        >
          {numero}
        </button>
      ))}
    </div>
  );
}
