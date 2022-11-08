import React from "react";

export function MakeComponent(WrappedComponent) {
  function Component(props) {
    return <WrappedComponent {...props} />;
  }
  return Component;
}
