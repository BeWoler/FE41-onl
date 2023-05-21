
import { Link, useNavigate } from 'react-router-dom'
import './nav.css'

const Nav = () => {
    const navigate = useNavigate()
    return (
        <div>
            <ul>
                <li>
                    <button onClick={() => {
                        navigate(-1);
                    }}>Back</button>
                </li>
                <li>
                    <Link to={'/posts'}>
                        <button className='button'>
                            Posts
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to={'/'}>
                        <button className='button'>
                            Sign up
                        </button></Link>
                </li>
                <li>
                    <Link to={'/posts/:id'}>
                        <button className='button'>
                            Post
                        </button></Link>
                </li>
            </ul>

        </div>
    )
}

export default Nav
