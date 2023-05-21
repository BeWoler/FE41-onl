
import { ThemeContext } from '../../App';
import SignForm from '../../components/SignForm/SignForm';
import { useContext } from 'react';
import './style/signPage.css'


const SignPage = () => {
  const context: { theme?: string } = useContext(ThemeContext)

  return (
    <div>
      {context.theme === 'dark'}
      <SignForm signIn={false} />
    </div>
  )
}

export default SignPage
