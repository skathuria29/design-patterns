import { useCallback, useMemo, useState } from "react";

export default function useExpanded() {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );

  // const getTogglerProps = useCallback(
  //   ({ ...customProps }) => ({
  //     onClick: toggle,
  //     "aria-expanded": expanded,
  //     ...customProps
  //   }),
  //   [toggle, expanded]
  // );

  const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);

  return value;
}
