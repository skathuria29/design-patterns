import useExpanded from "./hooks/useExpanded_WithPropCollection";

export const WithPropCollection = () => {
  const { expanded, togglerProps } = useExpanded();
  return (
    <>
      <button {...togglerProps}>+</button>
      <div
        style={{
          position: "relative",
          border: "1px solid",
          cursor: "pointer",
          marginTop: "3rem"
        }}
        {...togglerProps}
      >
        <div>Click here to expand the view</div>
      </div>
      {expanded ? (
        <p> Hello! Welcome to Advanced React Patterns session </p>
      ) : null}
    </>
  );
};
