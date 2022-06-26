import useExpanded from "./hooks/useExpanded_WithoutPropCollection";

export const WithoutPropCollection = () => {
  const { expanded, toggle } = useExpanded();
  return (
    <>
      <button onClick={toggle} aria-expanded={expanded}>
        +
      </button>
      <div
        style={{
          position: "relative",
          border: "1px solid",
          cursor: "pointer",
          marginTop: "3rem"
        }}
        onClick={toggle}
        aria-expanded={expanded}
      >
        <div>Click here to expand the view</div>
      </div>
      {expanded ? (
        <p> Hello! Welcome to Advanced React Patterns session </p>
      ) : null}
    </>
  );
};
