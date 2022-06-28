import { NavbarContainer } from "./NavbarContainer";

export const SlotPattern = () => {
  return (
    <>
      <NavbarContainer className="h-50 border-1 p-1">
        <NavbarContainer.Slot name="left">
          <div className="text-subtle">Logo</div>
        </NavbarContainer.Slot>
        <NavbarContainer.Slot name="center">
          <input type="search" placeholder="Search Exp Cloud" />
        </NavbarContainer.Slot>
        <NavbarContainer.Slot name="right">
          <button>Login</button>
        </NavbarContainer.Slot>
      </NavbarContainer>
      <br />

      <NavbarContainer className="h-50 border-1 p-1">
        <NavbarContainer.Slot name="left">
          <div className="text-subtle flex flex-direction-column">
            <div className="text-align-left"> Title </div>
            <div> some description </div>
          </div>
        </NavbarContainer.Slot>
        <NavbarContainer.Slot name="right">
          <button
            style={{
              backgroundColor: "#0095ff",
              color: "white"
            }}
            className="mr-1"
          >
            Signup
          </button>
          <button>Contact</button>
        </NavbarContainer.Slot>
      </NavbarContainer>
    </>
  );
};
