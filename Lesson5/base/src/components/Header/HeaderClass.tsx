import React, { ReactNode } from "react";
import theme from './style/header.module.css';
import { IHeaderProps } from "./interface/header";

class HeaderClass extends React.Component<IHeaderProps> {
  render(): ReactNode {
    return (
      <header
        className={this.props.id === 1 ? theme.header : theme.secondHeader}
        style={this.props.id === 1 ? { color: "orange" } : { color: "green" }}>
        {this.props.id ? (
          <div>Header with first id</div>
        ) : (
          <a href='google.com'>Link</a>
        )}
      </header>
    );
  }
}

export default HeaderClass;
