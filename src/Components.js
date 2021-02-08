import { useButton } from "react-aria";
import React, { useRef } from "react";

export function Button(props) {
  // 生 DOM や カスタムコンポーネントへの参照
  let ref = useRef();
  // TODO: useButton のコードを読む
  let { buttonProps } = useButton(props, ref);
  return (
    <button {...buttonProps} ref={ref}>
      {props.children}
    </button>
  );
}

export function Button2(props) {
  let { children } = props;
  let ref = useRef();
  let { buttonProps, isPressed } = useButton(
    {
      ...props,
      elementType: "span",
    },
    ref
  );

  return (
    <span
      {...buttonProps}
      style={{
        background: isPressed ? "darkgreen" : "red",
        color: "white",
        padding: 10,
        cursor: "pointer",
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
      ref={ref}
    >
      {children}
    </span>
  );
}
