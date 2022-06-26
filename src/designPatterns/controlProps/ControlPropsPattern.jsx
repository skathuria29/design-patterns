import { useState } from "react";
import { Expandable } from "./Expandable";
import { information } from "./data";
export const ControlPropsPattern = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onExpand = (evt) => setActiveIndex(evt.target.dataset.index);

  return (
    <div className="control-props">
      <b> Control Props Pattern Example</b>
      {information.map(({ header, note }, index) => (
        <Expandable
          key={index}
          shouldExpand={index === +activeIndex}
          className="pos-relative"
          onExpanded={onExpand}
        >
          <Expandable.Header
            style={{ color: "red", border: "1px solid teal" }}
            data-index={index}
          >
            {header}
          </Expandable.Header>
          <Expandable.Icon />
          <Expandable.Body>{note}</Expandable.Body>
        </Expandable>
      ))}
    </div>
  );
};
