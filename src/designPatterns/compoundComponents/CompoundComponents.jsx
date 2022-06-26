import { Expandable } from "./Expandable";

export const CompoundComponents = () => {
  return (
    <Expandable className="pos-relative">
      <Expandable.Header className="border-1">
        <div>React Compound Patterns</div>
      </Expandable.Header>
      <Expandable.Icon />
      <Expandable.Body>
        Compound Patterns are fun to work with!!
      </Expandable.Body>
    </Expandable>
  );
};
