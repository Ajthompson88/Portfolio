// src/components/Navbar.jsx
import { textLogo, navElements } from "../../assets/assets.js";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";

const Navbar = ({ activeElem, setActiveElem }) => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  useEffect(() => {
    if (!isMenuHidden) {
      const onClick = (e) => {
        e.stopPropagation();
        setIsMenuHidden(true);
      };
      document.body.addEventListener("click", onClick);
      return () => document.body.removeEventListener("click", onClick);
    }
  }, [isMenuHidden]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuHidden(!isMenuHidden);
  };

  return (
    <nav className="fixed w-full top-0 px-5 md:px-10 py-4 z-50 bg-white/85 backdrop-blur">
      <div className="flex items-center justify-between">
        {imgLogo ? (
          <img src={imgLogo} alt="Logo" />
        ) : (
          <a
            href={`#${navElements[0]}`}
            onClick={() => setActiveElem(navElements[0])}
            className="text-lg md:text-3xl font-bold"
          >
            {textLogo}
          </a>
        )}

        <div className="hidden md:flex gap-4">
          {navElements.map((elem) => (
            <a
              key={elem}
              href={`#${elem}`}
              onClick={() => setActiveElem(elem)}
              className={`px-4 py-2 rounded-full font-medium ${
                activeElem === elem ? "bg-mainColor text-white" : ""
              }`}
            >
              {elem}
            </a>
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className="text-xl md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuHidden ? <RxHamburgerMenu /> : <IoClose />}
        </button>
      </div>

      <div
        className={`md:hidden mt-2 flex flex-col gap-2 ${
          isMenuHidden ? "hidden" : ""
        }`}
      >
        {navElements.map((elem) => (
          <a
            key={elem}
            href={`#${elem}`}
            onClick={() => setActiveElem(elem)}
            className={`px-4 py-2 border rounded ${
              activeElem === elem ? "bg-mainColor text-white" : ""
            }`}
          >
            {elem}
          </a>
        ))}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  activeElem: PropTypes.string.isRequired,
  setActiveElem: PropTypes.func.isRequired,
};

export default Navbar;
