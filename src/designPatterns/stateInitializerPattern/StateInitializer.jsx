import { useCounter } from "./useCounter";
// import useExpanded from "./useExpanded";

export const StateInitializerPattern = () => {
  // const { expanded, toggle } = useExpanded(true);
  const { counter, incrementCounter, resetCounter } = useCounter(4);

  return (
    <>
      {/* {" "}
      <div
        style={{
          position: "relative",
          border: "1px solid",
          cursor: "pointer",
          marginTop: "3rem"
        }}
        onClick={toggle}
      >
        <div>Click here to expand the view</div>
      </div>
      {expanded ? (
        <div className="border-1 h-200">
          Hello! Welcome to Advanced React Patterns session
        </div>
      ) : null} */}
      <div> {counter}</div>
      <button onClick={incrementCounter}>Increment Counter </button>
      <button onClick={resetCounter}>Reset Counter </button>
    </>
  );
};
