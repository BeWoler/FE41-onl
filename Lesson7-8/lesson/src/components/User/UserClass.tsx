import React from "react";

// Жизненный цикл
// Монтирование компонента
// При монтировании первым делом идёт constructor, после чего отрабатывает наш render и в дальнейшем отрабатывает componentDidMount

// Размонтирование компонента
// Срабатывает при перерендере и при полном размонтировании компонента и вызывает функцию componentWillUnmount

// Обновление компонента
// Срабатывает при изменеии определённого состояние и дальнейшем перерендере компонента и вызывает componentDidUpdate

class User extends React.Component {
  componentDidMount(): void { 
    console.log("mounted");
  }

  componentWillUnmount(): void {
    console.log("unmount");
  }

  componentDidUpdate(): void {
    console.log("updated");
  }

  render(): React.ReactNode {
    return (
      <div>
        <div></div>123
      </div>
    );
  }
}

export default User;
