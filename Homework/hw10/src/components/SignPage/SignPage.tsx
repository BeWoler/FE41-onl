
const SignPage = ({ isAuth }: { isAuth: boolean }) => {

    if (isAuth === true) {
        return (
            <div>
                <input placeholder='email'></input>
                <input placeholder='password'></input>
                <button>Login</button>
            </div>
        )
    } else {
        return (
            <div>
                <input placeholder='first name'></input>
                <input placeholder='last name'></input>
                <input placeholder='email'></input>
                <button>Register</button>
            </div>
        )
    }

}

export default SignPage
