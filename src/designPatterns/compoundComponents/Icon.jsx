import { useContext } from "react";
import ExpandableContext from "./ExpandableProvider";

export const Icon = () => {
  const { expanded } = useContext(ExpandableContext);
  return <span className="Expandable-icon">{expanded ? "-" : "+"}</span>;
};
