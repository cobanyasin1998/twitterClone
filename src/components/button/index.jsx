import classNames from "classnames";
import PropTypes from "prop-types";
import { createElement } from "react";

export default function Button({ size = "normal", children }) {
  return createElement(
    "button",
    {
      className: classNames(
        "bg-[#1d9bf0] rounded-full flex items-center font-bold text-white hover:bg-[#1a8cd8] transition-colors justify-center",
        {
          "px-4 h-9": size === "normal",
          "px-6 h-12 w-full text-[17px]": size === "large",
        }
      ),
    },
    children
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(["normal", "large"]),
};
