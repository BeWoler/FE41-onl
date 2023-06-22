import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {

    const navigate = useNavigate()

    return (
        <div>
            <ul>
                <button onClick={() => navigate(-1)}>Back</button>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/">Main</Link>
                </li>
                <li>
                    <Link to="/sign">Sign in </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
