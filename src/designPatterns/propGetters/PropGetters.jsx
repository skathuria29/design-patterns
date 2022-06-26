import useExpanded from "./useExpanded";

export const PropGetters = () => {
  const { expanded, getTogglerProps } = useExpanded();
  const customClickHandler = () => {
    alert("Iam a custom handler");
  };
  return (
    <>
      <button
        {...getTogglerProps({
          id: "my-btn-id",
          "aria-label": "custom toggler",
          onClick: customClickHandler
        })}
      >
        +
      </button>
      <div
        style={{
          position: "relative",
          border: "1px solid",
          cursor: "pointer",
          marginTop: "3rem"
        }}
        {...getTogglerProps({
          id: "my-div-id"
        })}
      >
        <div>Click here to expand the view</div>
      </div>
      {expanded ? (
        <p> Hello! Welcome to Advanced React Patterns session </p>
      ) : null}
    </>
  );
};
