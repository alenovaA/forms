import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/actions/usersActions";
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

const Register = () => {
    const [state, setState] = useState({
        username: "",
        password: "",
        emailId: "",
        gender: "",
        lastName: "",
        phone: ""
    });
    const dispatch = useDispatch();
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setState((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };

    const submitHandler = async (data) => {
        if (data.password === data.password2) {
            await dispatch(registerUser(state, navigate));
            setPasswordError("");
        } else {
            setPasswordError("* Пароли не совпадают");
        }
    };

    console.log(passwordError)

    return <div className="registerBackground">

        <form className="registerBox" onSubmit={submitHandler}>
            <h1 className="registerTitle">Registration form</h1>
            <div className="registerBlock">
                <div className="registerColumn">
                    <div className="registerRow">
                        <p className="registerText">First Name</p>
                        <input className="registerInput"
                            onChange={inputChangeHandler}
                            name="username"
                            state={state}
                            required
                        />
                    </div>
                    <div className="registerRow">
                        <p className="registerText">Email Id</p>
                        <input className="registerInput"
                            onChange={inputChangeHandler}
                            name="emailId"
                            state={state}
                            required
                        />
                    </div>
                    <div className="registerRow">
                        <p className="registerText">Password</p>
                        <input className="registerInput"
                            onChange={inputChangeHandler}
                            name="password"
                            state={state}
                        />
                    </div>
                    <div className="registerRow">
                        <p className="registerText">Gender</p>
                        <input className="registerInput"
                            onChange={inputChangeHandler}
                            name="gender"
                            state={state}
                            required
                        />
                    </div>
                </div>
                <div className="registerColumn">
                    <div className="registerRow">
                        <p className="registerText">Last Name</p>
                        <input className="registerInput"
                            onChange={inputChangeHandler}
                            name="lastName"
                            state={state}
                            required
                        />
                    </div>
                    <div className="registerRow">
                        <p className="registerText">Phone Number</p>
                        <input className="registerInput"
                            onChange={inputChangeHandler}
                            name="phone"
                            state={state}
                            required
                        />
                    </div>
                    <div className="registerRow">
                        <p className="registerText">Confirm Password</p>
                        <input className="registerInput"
                            onChange={inputChangeHandler}
                            name="password2"
                            state={state}
                            required
                        />
                        <Grid item>
                            <Typography style={{ color: "red" }}>
                                {passwordError}
                            </Typography>
                        </Grid>
                    </div>

                </div>
            </div>

            <button className="registerButton"
                type="submit"
                variant="contained"
                color="primary"
            >
                Register
            </button>

        </form>

    </div>
};

export default Register;
