import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo
} from "react";

import "../compoundComponents/expandable.css";
import { Header } from "../compoundComponents/Header";
import { Icon } from "../compoundComponents/Icon";
import { Body } from "../compoundComponents/Body";

import ExpandableContext from "../compoundComponents/ExpandableProvider";

const DEFAULT_FN = () => {};

export const Expandable = ({
  children,
  className = "",
  onExpanded = DEFAULT_FN,
  shouldExpand,
  ...restProps
}) => {
  const isExpandControlled = shouldExpand !== undefined;

  const [expanded, setExpanded] = useState(false);
  const componentJustMounted = useRef(true);
  const getState = isExpandControlled ? shouldExpand : expanded;

  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );

  const getToggle = isExpandControlled ? onExpanded : toggle;

  useEffect(() => {
    if (!componentJustMounted && !isExpandControlled) {
      onExpanded(expanded);
      componentJustMounted.current = false;
    }
  }, [expanded]);

  const contextValue = useMemo(
    () => ({ expanded: getState, toggle: getToggle }),
    [getState, getToggle]
  );

  const combinedClassNames = ["Expandable", className].join(" ");

  return (
    <ExpandableContext.Provider value={contextValue}>
      <div className={combinedClassNames} {...restProps}>
        {children}
      </div>
    </ExpandableContext.Provider>
  );
};

Expandable.Header = Header;
Expandable.Icon = Icon;
Expandable.Body = Body;
