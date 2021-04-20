import React from "react";
import renderer from "react-test-renderer";
import { BasitToast } from "./basitToastComponent";

test("BasitToast have been test", () => {
  const components = renderer.create(
    <BasitToast
      isOpen={true}
      position="bottomcenter"
      severity="success"
      message="Hello"
      handleClose={() => console.log("closed")}
      handleCloseDuration={3000}
    />
  );

  let tree = components.toJSON();
  tree.props.isOpen;
  tree.props.position;
  tree.props.severity;
  tree.props.message;
  tree.props.handleClose;
  tree.props.handleCloseDuration;
});
