import {AppBar, Box, Toolbar, IconButton, Typography, Button} from "@mui/material";
import {NavLink} from "react-router-dom";
import AnonymousMenu from "../Menus/AnonymousMenu/AnonymousMenu";


const AppToolbar = () => {

    return <Box sx={{ flexGrow: 1, mb: "40px" }}>
        <AppBar sx ={{background: " #61B0DC"}}position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    {/* <MenuIcon /> */}
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                
                </Typography>
                <Button
                    component={NavLink}
                    to="/"
                    color="inherit"
                >
                    Main
                </Button>
                <AnonymousMenu/>


            </Toolbar>
        </AppBar>
    </Box>
};

export default AppToolbar;
