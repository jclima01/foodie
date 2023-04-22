import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesByQuery } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");

  const handleInputChange = (e) => {
    setSearchKey(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getRecipesByQuery(searchKey));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="input"
          id="form2Example1"
          className="form-control"
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
