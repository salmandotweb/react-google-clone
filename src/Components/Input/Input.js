import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { BsMic } from "react-icons/bs";
import classes from "./Input.module.css";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

const Input = ({ className, value }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input === "") {
      setAlert(true);
    } else {
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input,
      });
      navigate("/search");
    }
  };
  const handleChange = (e) => {
    setInput(e.target.value);
    setAlert(false);
  };
  return (
    <form
      className={`${alert && classes.alert} ${
        classes.searchInput
      } ${className}`}
      onSubmit={handleSubmit}
    >
      <HiOutlineSearch className={classes.icon_2} />
      <input
        type="search"
        value={input}
        placeholder={value}
        onChange={handleChange}
      />
      <BsMic className={classes.icon_2} />
    </form>
  );
};

export default Input;
