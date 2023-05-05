import React, { useRef } from "react";

class RefClass extends React.Component {
  // constructor(props: any) {
  //   super(props);
  //   this.myRef = React.createRef();
  // }

  // consoleRef() {
  //   this.myRef.current.focus();
  // }

  // render(): React.ReactNode {
  //   return <input ref={this.myRef} placeholder="Ref" onClick={this.consoleRef}/>
  // }
}

export const RefHook = () => {
  const divRef = useRef(null);

  const handler = (ref: any) => {
    console.log(ref);
    console.log(ref.current);
  };

  return (
    <div ref={divRef} onClick={() => handler(divRef)}>
      useref
    </div>
  );
};

export default RefClass;
