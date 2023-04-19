import { useState } from "react";

const Register = () => {
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
                    />
                </div>
                <div className="registerRow">
                    <p className="registerText">Email Id</p>
                    <input className="registerInput"
                        onChange={inputChangeHandler}
                        name="email"
                        state={state}
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
                    />
                </div>
            </div>


            <div className="registerColumn">
                <div className="registerRow">
                    <p className="registerText">Last Name</p>
                    <input className="registerInput"
                        onChange={inputChangeHandler}
                        name="name"
                        state={state}
                    />
                </div>
                <div className="registerRow">
                    <p className="registerText">Phone Number</p>
                    <input className="registerInput"
                        onChange={inputChangeHandler}
                        name="phone"
                        state={state}
                    />
                </div>
                <div className="registerRow">
                    <p className="registerText">Confirm Password</p>
                    <input className="registerInput"
                        onChange={inputChangeHandler}
                        name="password"
                        state={state}
                    />
                </div>
            </div>
            </div>


            <button className="registerButton"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
            >
                Register
            </button>
           
        </form>
    </div>
};

export default Register;
