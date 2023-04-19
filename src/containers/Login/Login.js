import { useState } from "react";

const Login = () => {
    const [state, setState] = useState({
        username: "",
        password: ""
    });


    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setState((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
    
    };

    return <div className="background">
        <form className="loginBox" onSubmit={submitHandler}>
            <h1 className="loginTitle">Login form</h1>
            <div className="loginBlock">
                <input className="loginInput"
                    onChange={inputChangeHandler}
                    name="email"
                    state={state}
                    placeholder = "Enter Email Id"
             
                />
                <input className="loginInput"
                    onChange={inputChangeHandler}
                    name="password"
                    placeholder="Enter Password: "
                    type="password"
                    state={state}
    
                />
            </div>
            <button className="loginButton"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
            >
                Login
            </button>
            <p className="loginText">Don’t have an account? Register</p>
        </form>
    </div>
};

export default Login;
