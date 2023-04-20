import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesByQuery } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");
  const recipes = useSelector((state) => state.recipes);
  const navigate = useNavigate()
  const handleInputChange = (e) => {
    setSearchKey(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getRecipesByQuery(searchKey));
    return recipes

  };
  return (
    <div>
      <h1>search recipes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="input"
          id="form2Example1"
          className="form-control"
          onChange={handleInputChange}
        />
        <button type="submit">search</button>
      </form>
    </div>
  );
};

export default SearchBar;
