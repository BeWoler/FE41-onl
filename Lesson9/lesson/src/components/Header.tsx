import { useContext } from "react";
import { AllContext, ThemeContext } from "..";
import { IContext } from "../store/context.interface";

const Header = () => {
  const themeContext: { theme: string } = useContext<{ theme: string }>(
    ThemeContext
  );

  const Allcontext: IContext = useContext<any>(AllContext);

  return (
    <div>
      {themeContext.theme}/{Allcontext.user.userId}
    </div>
  );
};

export default Header;
