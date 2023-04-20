import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector, } from "react-redux";
import { logoutUser } from "../../../store/actions/usersActions";


const AnonymousMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(logoutUser(navigate));
    };


    const user = useSelector(state => state.users.user);

    return <>
        {user ? <></> :
            <div>    
                <Button
                component={NavLink}
                color="inherit"
                to="/login"
            >
                Login
            </Button>
                <Button
                    component={NavLink}
                    color="inherit"
                    to="/register"
                >
                    Register
                </Button>
            </div>
        }
              
        {user ?
            <div>
                <Button
                    color="inherit"
                >
                    Hello, {user?.username}
                </Button>
                <Button
                    color="inherit"
                    onClick={logout}
                >
                    Logout
                </Button>
            </div>

            : <p></p>

        }
    </>
};

export default AnonymousMenu;
