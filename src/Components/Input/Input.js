import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { BsMic } from "react-icons/bs";
import classes from "./Input.module.css";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

const Input = ({ className }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input === "") {
      alert("Type Something");
    } else {
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input,
      });

      navigate("/search");
    }
  };
  return (
    <form
      className={`${classes.searchInput} ${className}`}
      onSubmit={handleSubmit}
    >
      <HiOutlineSearch className={classes.icon_2} />
      <input
        type="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <BsMic className={classes.icon_2} />
    </form>
  );
};

export default Input;
