import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { render } from "@testing-library/react";

import useForwardRef from "./";

/**
 * @typedef {Object} BaseComponentProps
 * @property {(arg : string) => void} spy
 */

const BaseComponent = React.forwardRef(
  /**
   * @param {BaseComponentProps} props
   * @param {React.RefObject<HTMLDivElement>} maybeRef
   */
  (props, maybeRef) => {
    const ref = useForwardRef(maybeRef);

    useEffect(
      () => {
        props.spy(ref.current.id);
      }
    );

    return (
      <div id="test-app" ref={ref} />
    );
  }
);

BaseComponent.displayName = "BaseComponent";

BaseComponent.propTypes = {
  spy: PropTypes.func.isRequired,
};

const ComponentWithRef =
  (props) => {
    const ref = useRef();

    return (
      <BaseComponent {...props} ref={ref} />
    );
  };

describe("useForwardRef", () => {
  it("creates a new ref when ref is not forwarded", () => {
    const spy = jest.fn();

    render(<BaseComponent spy={spy} />);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("test-app");
  });

  it("uses forwarded ref", () => {
    const spy = jest.fn();

    render(<ComponentWithRef spy={spy}>Demo</ComponentWithRef>);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("test-app");
  });
});
