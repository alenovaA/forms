import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../store/actions/usersActions";
import { Alert } from "@mui/material";
import Loader from "../../components/Loader/Loader";

const Login = () => {
    const [state, setState] = useState({
        emailId: "",
        password: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loginError, loading } = useSelector(state => state.users);

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
        await dispatch(loginUser(state, navigate));
    };


    return <div className="background">
        <form className="loginBox" onSubmit={submitHandler}>
            {!!loginError && <Alert color="error">{loginError}</Alert>}
            <h1 className="loginTitle">Login form</h1>
            <div className="loginBlock">
                <input className="loginInput"
                    onChange={inputChangeHandler}
                    name="emailId"
                    state={state}
                    placeholder = "Enter Email Id"
                    required
                />

                <input className="loginInput"
                    onChange={inputChangeHandler}
                    name="password"
                    placeholder="Enter Password: "
                    type="password"
                    state={state}
                    required
                />
            </div>
            <button className="loginButton"
                type="submit"
                variant="contained"
                color="primary"
            >
                Login
            </button>
            <p className="loginText">Don’t have an account? Register</p>
        </form>
        <Loader loading={loading} />
    </div>
};

export default Login;
