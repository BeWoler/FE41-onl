import React, { useRef, createRef } from "react";

class RefClass extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
    this.divRef = createRef();
  }

  setRef = (ref) => {
    this.inputRef = ref
  }

  componentDidMount() {
    this.setRef({ current: 'google.com'})
    console.log(this.inputRef)
  }

  render() {
    return <div>
      <input ref={this.inputRef} placeholder="Ref" onClick={() => console.log(this.inputRef.current)}/>
      <div ref={this.divRef}>123</div>
    </div>
  }
}

export const RefHook = () => {
  const divRef2 = createRef();
  const divRef = useRef(null);

  const handler = (ref) => {
    console.log(ref);
    console.log(ref.current);
  };

  return (
    <div ref={divRef2} onClick={() => handler(divRef2.current)}>
      useref
    </div>
  );
};

export default RefClass;
