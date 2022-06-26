import { Dialog } from "./Card";
import { actions } from "./data";
// import { Dialog1 } from "./Card";

export const Intro = () => {
  return (
    <Dialog
      header="Alert!!"
      body="Your session is about to expire"
      actions={actions}
    />
  );
};
