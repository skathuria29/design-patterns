import React, { useContext } from "react";
import ExpandableContext from "./ExpandableProvider";

export const Header = ({ children, className = "" }) => {
  const { toggle } = useContext(ExpandableContext);
  const combinedClassName = ["Expandable-trigger", className].join(" ");

  return (
    <div onClick={toggle} className={combinedClassName}>
      {children}
    </div>
  );
};
