import React from "react";
import Input from "../../Components/Input/Input";
import GoogleLink from "../../Components/GoogleLink/GoogleLink";
import { AiOutlineSetting } from "react-icons/ai";
import { RiVideoLine } from "react-icons/ri";
import { BiSearch, BiNews, BiImage } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import classes from "./Search.module.css";
import useSearch from "../../CustomHooks/useSearch";
import { useStateValue } from "../../StateProvider";
import Menu from "../../Components/Menu/Menu";

const Search = () => {
  const [{ term }] = useStateValue();
  const { data } = useSearch(term);

  return (
    <>
      <div className={classes.searchNavbar}>
        <div className={classes.left}>
          <Link to="/">
            <img
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
              alt=""
            />
          </Link>
          <Input className={classes.Input} value={term} />
        </div>
        <div className={classes.btnContainer}>
          <AiOutlineSetting className={classes.icon} />
          <Menu />
          <div className={classes.user}>
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={classes.menu}>
        <div className={classes.menuLink}>
          <BiSearch className={classes.icon_2} />
          All
        </div>
        <div className={classes.menuLink}>
          <RiVideoLine className={classes.icon_2} />
          Videos
        </div>
        <div className={classes.menuLink}>
          <BiImage className={classes.icon_2} />
          Images
        </div>
        <div className={classes.menuLink}>
          <BiNews className={classes.icon_2} />
          News
        </div>
        <div className={classes.menuLink}>
          <BsThreeDotsVertical className={classes.icon_2} />
          More
        </div>
      </div>
      {term && (
        <>
          <p
            className={classes.result}
          >{`About ${data?.searchInformation.formattedTotalResults} results (${data?.searchInformation.formattedSearchTime})`}</p>
          <div className={classes.linksContainer}>
            {data?.items.map((item) => (
              <GoogleLink
                key={item.cacheId}
                link={item.link}
                url={item.title}
                displayLink={item.formattedUrl}
                description={item.snippet}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Search;
