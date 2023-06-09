import { ReactNode, useEffect } from "react";
import { Header } from "../Header/Header";

const Layout = (props: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
