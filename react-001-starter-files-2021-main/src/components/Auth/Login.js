import React from "react";
import PropTypes from "prop-types";


const Login = (props) => {
    return(
        <div className='login-container'>
            <nav className="login">
                <h2>הרשאה</h2>
                <p>הכנס שם משתמש וסיסמה</p>
                <button className="github" onClick={() => props.authenticate}>
                    כניסה
                </button>
            </nav>
        </div>
    )
}

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
}

export default Login;