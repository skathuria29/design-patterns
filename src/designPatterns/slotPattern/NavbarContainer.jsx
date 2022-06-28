import { Children } from "react";

const Slot = () => null;

export const NavbarContainer = ({ children, className }) => {
  const childrenArray = Children.toArray(children);

  const leftSlot = childrenArray.find((child) => child?.props?.name === "left");
  const centerSlot = childrenArray.find(
    (child) => child?.props?.name === "center"
  );
  const rightSlot = childrenArray.find(
    (child) => child?.props?.name === "right"
  );

  return (
    <div className="flex justify-between items-center h-50 border-1 py-1">
      <div className="flex items-center">
        <img
          style={{ width: "20px", height: "20px", marginRight: "1rem" }}
          src="https://exc-unifiedcontent.experience-stage.adobe.net/assets/HeroIcons.ad02b730.svg#AdobeExperienceCloud"
          alt="banner"
        />
        {leftSlot?.props?.children}
      </div>

      <div className="flex">{centerSlot?.props?.children}</div>

      <div className="flex">{rightSlot?.props?.children}</div>
    </div>
  );
};

NavbarContainer.Slot = Slot;
