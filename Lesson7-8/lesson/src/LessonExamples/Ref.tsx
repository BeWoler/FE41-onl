import { useEffect, useRef, useState } from "react";

const Ref = () => {
  const [text, setText] = useState("text");
  const divRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(divRef.current);
  }, [text]);

  return (
    <div>
      <input
        ref={divRef}
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <pre>{JSON.stringify(divRef.current?.value, null)}</pre>
    </div>
  );
};

export default Ref;
