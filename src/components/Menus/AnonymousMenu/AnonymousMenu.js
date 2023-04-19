import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";

const AnonymousMenu = () => {
    return <>
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
    </>
};

export default AnonymousMenu;
