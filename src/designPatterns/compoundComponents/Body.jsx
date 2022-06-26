import { useContext } from "react";
import ExpandableContext from "./ExpandableProvider";

export const Body = ({ children, className = "" }) => {
  const { expanded } = useContext(ExpandableContext);
  return expanded ? children : null;
};
