import React, { useEffect, useRef, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import data from "../../MenuData.json";
import classes from "./Menu.module.css";

const MenuLink = ({ img, name, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    className={classes.menuLink}
  >
    <img src={img} alt="" />
    <p>{name}</p>
  </a>
);

const Menu = () => {
  const ref = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [show]);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div ref={ref}>
      <CgMenuGridR className={classes.icon} onClick={toggleShow} />
      {show && (
        <div className={classes.menuContainer}>
          {data.map((link) => (
            <MenuLink
              key={link.id}
              img={link.image}
              name={link.name}
              link={link.link}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
