import { Expandable } from "../compoundComponents/Expandable";
import { information } from "./data";
export const ControlPropsPattern = () => {
  return (
    <div className="control-props">
      {information.map(({ header, note }, index) => (
        <Expandable key={index}>
          <Expandable.Header style={{ color: "red", border: "1px solid teal" }}>
            {header}
          </Expandable.Header>
          <Expandable.Icon />
          <Expandable.Body>{note}</Expandable.Body>
        </Expandable>
      ))}
    </div>
  );
};
