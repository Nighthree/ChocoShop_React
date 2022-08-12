import { useRef, useEffect } from "react";

const RenderTip = (props) => {
  const { name = "" } = props;
  const refCount = useRef(1);
  const refDom = useRef(null);

  useEffect(() => {
    refCount.current += 1;
  });

  const info = `${name}${name ? ": " : ""}${refCount.current}`;

  return (
    <div className="d-flex">
      <div className="ms-auto bg-warning rounded p-1" ref={refDom}>
        {info}
      </div>
    </div>
  );
};

export default RenderTip;
