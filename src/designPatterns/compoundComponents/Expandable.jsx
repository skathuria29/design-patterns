import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo
} from "react";

import "./expandable.css";
import { Header } from "./Header";
import { Icon } from "./Icon";
import { Body } from "./Body";

import ExpandableContext from "./ExpandableProvider";

const DEFAULT_FN = () => {};

export const Expandable = ({
  children,
  className = "",
  onExpanded = DEFAULT_FN
}) => {
  const [expanded, setExpanded] = useState(false);
  const componentJustMounted = useRef(true);

  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );

  useEffect(() => {
    if (!componentJustMounted) {
      onExpanded(expanded);
      componentJustMounted.current = false;
    }
  }, [expanded]);

  const contextValue = useMemo(() => ({ expanded, toggle }), [
    expanded,
    toggle
  ]);

  const combinedClassNames = ["Expandable", className].join(" ");

  return (
    <ExpandableContext.Provider value={contextValue}>
      <div className={combinedClassNames}>{children}</div>
    </ExpandableContext.Provider>
  );
};

Expandable.Header = Header;
Expandable.Icon = Icon;
Expandable.Body = Body;
