
import { ThemeContext } from '../../App';
import SignForm from '../../components/SignForm/SignForm';
import { useContext } from 'react';
import style from './style/signPage.module.css'


const SignPage = () => {
  const context: { theme?: string } = useContext(ThemeContext)
  return (
    <div>
      <div>{context?.theme === 'light' ? style.lightTheme : style.darkTheme}</div>
      <SignForm signIn={false} />
    </div>
  )
}

export default SignPage
